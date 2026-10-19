"use client";

import Image from "next/image";
import { useState } from "react";
import { studioSpaces } from "../data/site";
import { ArrowIcon } from "./Icons";
import { useSiteMotion } from "./SiteMotion";

export default function StudioTour() {
  const [active, setActive] = useState(0);
  const motion = useSiteMotion();
  const current = studioSpaces[active];

  function move(direction: number) {
    setActive((value) => (value + direction + studioSpaces.length) % studioSpaces.length);
  }

  return (
    <section className="studio-section section" id="studio" aria-labelledby="studio-heading">
      <div className="container-wide">
        <div className="section-heading section-heading-split" data-reveal>
          <div><p className="eyebrow gold-line">A LITTLE CLOSER</p><h2 id="studio-heading">Step inside.<br /><em>Slow down.</em></h2></div>
          <p className="section-intro">Warm stone. Soft light. Space to breathe. Wander through three corners of our imagined sanctuary.</p>
        </div>
        <div className="studio-viewer" data-reveal role="region" aria-roledescription="carousel" aria-label="Explore the imagined studio">
          <div className="studio-scene" data-parallax="28">
            {studioSpaces.map((space, index) => (
              <div key={space.id} className={`studio-frame ${active === index ? "is-active" : ""}`} aria-hidden={active !== index}>
                <Image src={space.image} alt={space.alt} fill sizes="(max-width: 720px) 100vw, 90vw" />
              </div>
            ))}
          </div>
          <div className="studio-viewer-shade" aria-hidden="true" />
          <div className="studio-viewer-top" aria-hidden="true"><span>THE VELVET BLOOM SPACES</span><span><i className={motion ? "studio-live-dot is-moving" : "studio-live-dot"} /> TAKE A MOMENT</span></div>
          <div className="studio-viewer-bottom">
            <div className="studio-scene-caption" aria-live="polite" aria-atomic="true">
              <span className="studio-scene-number">0{active + 1} <span>/ 03</span></span>
              <h3>{current.title}</h3><p>{current.description}</p>
            </div>
            <div className="studio-arrows">
              <button type="button" aria-label="Previous studio space" onClick={() => move(-1)}><ArrowIcon size={21} className="arrow-reverse" /></button>
              <button type="button" aria-label="Next studio space" onClick={() => move(1)}><ArrowIcon size={21} /></button>
            </div>
          </div>
        </div>
        <div className="studio-selector" role="group" aria-label="Choose a studio space">
          {studioSpaces.map((space, index) => (
            <button key={space.id} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
              <span>0{index + 1}</span>{space.label}<span className="studio-selector-line" aria-hidden="true" />
            </button>
          ))}
        </div>
        <p className="studio-disclaimer">AI-created interiors · A fictional studio concept for this portfolio</p>
      </div>
    </section>
  );
}
