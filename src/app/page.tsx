import { Suspense } from "react";

import { Directory } from "@/components/Directory";
import { HeroPlate } from "@/components/HeroPlate";
import { getExhibitorCount, getExhibitors } from "@/lib/exhibitors";
import { WA_GUIA } from "@/lib/whatsapp";

const DISCLAIMER =
  "Esta guía es independiente. No está afiliada, patrocinada ni administrada por Corferias, la Lonja de Bogotá ni los organizadores del Gran Salón Inmobiliario.";

export default function Home() {
  const exhibitors = getExhibitors();
  const total = getExhibitorCount();

  return (
    <>
      <header className="nav-edge">
        <a className="wordmark" href="/">
          gransalon.co
        </a>
        <a className="cta" href={WA_GUIA}>
          Hablar con la guía
        </a>
      </header>

      <div className="mast">
        <div className="mast-copy">
          <p className="mast-eyebrow">
            Guía independiente · Gran Salón 2026 · Corferias
          </p>
          <h1 className="mast-headline">Encuentra el stand</h1>
        </div>
        <p className="mast-count">
          {total} expositores
        </p>
      </div>

      <HeroPlate />
      <Suspense
        fallback={
          <section className="directory" aria-label="Directorio de expositores">
            <div className="directory-head">
              <h2>Directorio</h2>
              <p className="result-count">Cargando</p>
            </div>
          </section>
        }
      >
        <Directory exhibitors={exhibitors} />
      </Suspense>

      <footer className="foot-line">
        <p>{DISCLAIMER}</p>
        <p className="foot-meta">
          <a href="/privacidad">Privacidad</a>
          <span aria-hidden="true"> · </span>
          <span>Una capa de Mirador</span>
        </p>
      </footer>
    </>
  );
}
