"use client";

import { useEffect, useState } from "react";

const ARCO_SRC = "https://playcanv.as/p/iimjVte8/";
const CHAT_SRC = "https://vpandco.co/embed/chat";

function ArcoMark() {
  return (
    <svg
      className="arco-mark"
      viewBox="0 0 120 80"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M10 72 V38 C10 16 38 4 60 4 C82 4 110 16 110 38 V72"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M28 72 V42 C28 26 42 16 60 16 C78 16 92 26 92 42 V72"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function HeroPlate() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="hero-plate" aria-label="Arco de Corferias y asesor">
      <div className="hero-media">
        {reduceMotion ? (
          <div className="hero-fallback">
            <ArcoMark />
            <p>Arco de Corferias</p>
            <a href={ARCO_SRC} target="_blank" rel="noopener noreferrer">
              Abrir la experiencia 3D
            </a>
          </div>
        ) : (
          <iframe
            title="Arco de Corferias — experiencia 3D"
            src={ARCO_SRC}
            allow="autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div className="hero-caption">
        <iframe title="Asesor" src={CHAT_SRC} className="chat-frame" />
      </div>
    </section>
  );
}
