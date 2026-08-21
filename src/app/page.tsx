import { Suspense } from "react";

import { Directory } from "@/components/Directory";
import { HeroPlate } from "@/components/HeroPlate";
import { getExhibitors } from "@/lib/exhibitors";
import { WA_GUIA } from "@/lib/whatsapp";

const DISCLAIMER =
  "Esta guía es independiente. No está afiliada, patrocinada ni administrada por Corferias, la Lonja de Bogotá ni los organizadores del Gran Salón Inmobiliario.";

export default function Home() {
  const exhibitors = getExhibitors();

  return (
    <>
      <div className="mast">
        <p className="mast-eyebrow">
          Gran Salón Inmobiliario 2026 · Corferias · Bogotá
        </p>
        <h1 className="mast-headline">Guía Independiente</h1>
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
          <a href={WA_GUIA}>Hablar con la guía</a>
          <span aria-hidden="true"> · </span>
          <a href="/privacidad">Privacidad</a>
          <span aria-hidden="true"> · </span>
          <span>Una capa de Mirador</span>
        </p>
      </footer>
    </>
  );
}
