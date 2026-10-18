"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gallery } from "../data/site";
import { ArrowIcon, CloseIcon } from "./Icons";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openGallery(index: number, trigger: HTMLButtonElement) {
    setActive(index);
    triggerRef.current = trigger;
    dialogRef.current?.showModal();
  }

  function restoreFocus() {
    triggerRef.current?.focus({ preventScroll: true });
  }

  function closeGallery() { dialogRef.current?.close(); }
  function move(direction: number) {
    setActive((index) => (index + direction + gallery.length) % gallery.length);
  }

  return (
    <>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <button className={`gallery-tile gallery-tile-${index + 1}`} key={item.label} type="button"
            onClick={(event) => openGallery(index, event.currentTarget)}
            aria-label={`View photo: ${item.label}`} aria-haspopup="dialog">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1060px) 50vw, 33vw" unoptimized />
            <span className="gallery-tile-overlay"><span>{item.label}</span><span className="gallery-plus" aria-hidden="true">+</span></span>
          </button>
        ))}
      </div>
      <dialog className="lightbox" ref={dialogRef} aria-labelledby="gallery-photo-title" aria-describedby="gallery-instructions"
        onClose={restoreFocus}
        onClick={(event) => { if (event.target === event.currentTarget) closeGallery(); }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
            const first = buttons[0];
            const last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}>
        <div className="lightbox-panel">
          <button type="button" className="lightbox-close" aria-label="Close gallery" onClick={closeGallery}><CloseIcon size={22}/></button>
          <div className="lightbox-image"><Image src={gallery[active].image} alt={gallery[active].alt} fill sizes="90vw" unoptimized /></div>
          <div className="lightbox-bottom">
            <div aria-live="polite"><span className="eyebrow">VELVET BLOOM GALLERY</span><p id="gallery-photo-title">{gallery[active].label}</p></div>
            <div className="lightbox-controls"><span>{String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
              <button type="button" aria-label="Previous photo" onClick={() => move(-1)}><ArrowIcon size={18} className="arrow-reverse"/></button>
              <button type="button" aria-label="Next photo" onClick={() => move(1)}><ArrowIcon size={18}/></button>
            </div>
          </div>
          <p id="gallery-instructions" className="sr-only">Use the arrow keys to browse. Press Escape to close.</p>
        </div>
      </dialog>
    </>
  );
}
