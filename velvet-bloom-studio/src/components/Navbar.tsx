"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "./Icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#services" },
  { label: "Our story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking demo", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && toggleRef.current?.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggleRef.current.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 951px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="nav-inner container-wide">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Velvet Bloom Studio home">
          <span className="wordmark-primary">Velvet Bloom</span>
          <span className="wordmark-secondary">B E A U T Y&nbsp;&nbsp; S T U D I O</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="nav-booking" href="#contact">Try booking demo <ArrowUpRightIcon size={16}/></a>
        <button ref={toggleRef} className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open}>
          {open ? <CloseIcon size={26}/> : <MenuIcon size={26}/>}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
        {links.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><span>0{index+1}</span>{item.label}</a>)}
        <a href="#contact" className="mobile-nav-cta" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Try booking demo <ArrowUpRightIcon size={17}/></a>
      </nav>
    </header>
  );
}
