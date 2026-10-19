"use client";

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const MotionContext = createContext(false);
const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

export function useSiteMotion() { return useContext(MotionContext); }

export default function SiteMotion({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribe, () => window.matchMedia(motionQuery).matches, () => true);
  const [paused, setPaused] = useState(false);
  const active = !reducedMotion && !paused;
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !active) return;

    const reveals = Array.from(shell.querySelectorAll<HTMLElement>("[data-reveal]"));
    const scenes = Array.from(shell.querySelectorAll<HTMLElement>("[data-parallax]"));
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("data-reveal-pending");
            observer?.unobserve(entry.target);
          }
        }
      }, { threshold: 0.08 });
      for (const element of reveals) {
        // Content stays visible until the browser can safely enhance it.
        if (element.getBoundingClientRect().top > window.innerHeight * 0.95) {
          element.setAttribute("data-reveal-pending", "");
          observer.observe(element);
        }
      }
    }

    let frame = 0;
    function update() {
      frame = 0;
      const viewport = window.innerHeight;
      const length = document.documentElement.scrollHeight - viewport;
      shell?.style.setProperty("--reading-progress", `${length > 0 ? Math.min(window.scrollY / length, 1) : 0}`);
      for (const scene of scenes) {
        const bounds = scene.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > viewport) continue;
        const distance = Number(scene.dataset.parallax) || 20;
        const position = (viewport / 2 - bounds.top - bounds.height / 2) / viewport;
        scene.style.setProperty("--scene-y", `${Math.max(-distance, Math.min(distance, position * distance))}px`);
      }
    }
    function schedule() { if (!frame) frame = window.requestAnimationFrame(update); }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      observer?.disconnect();
      for (const element of reveals) element.removeAttribute("data-reveal-pending");
      for (const scene of scenes) scene.style.removeProperty("--scene-y");
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [active]);

  return (
    <MotionContext.Provider value={active}>
      <div ref={shellRef} className="motion-shell" data-motion={active ? "on" : "off"}>
        <div className="reading-progress" aria-hidden="true" />
        {children}
        <button type="button" className="motion-toggle" disabled={reducedMotion}
          aria-pressed={paused || reducedMotion}
          aria-label={reducedMotion ? "Reduced motion follows your device settings" : active ? "Pause motion" : "Resume motion"}
          onClick={() => setPaused((value) => !value)}>
          <span className={active ? "motion-pause-icon" : "motion-play-icon"} aria-hidden="true" />
          {reducedMotion ? "Reduced motion" : active ? "Pause motion" : "Resume motion"}
        </button>
      </div>
    </MotionContext.Provider>
  );
}
