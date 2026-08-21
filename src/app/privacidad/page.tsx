import type { Metadata } from "next";
import Link from "next/link";

import { WA_GUIA } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <main className="page-prose">
      <p className="page-kicker">Guía independiente</p>
      <h1>Privacidad</h1>
      <p>
        Esta guía es independiente. No está afiliada, patrocinada ni
        administrada por Corferias, la Lonja de Bogotá ni los organizadores del
        Gran Salón Inmobiliario.
      </p>
      <p>
        El directorio publica datos de una exposición comercial pública: nombre
        de empresa, pabellón, stand, ciudad, categoría y, cuando existen, sitio
        web y logo. No vendemos esa lista.
      </p>
      <p>
        En esta versión no hay formulario de visitantes. No pedimos cédula,
        presupuesto ni WhatsApp del visitante. Si escribes al número de la guía,
        el responsable del tratamiento es Mirador S.A.S.; el mensaje se usa para
        orientarte en el recinto o para que un expositor reclame su ficha. Puedes
        pedir borrado por el mismo canal.
      </p>
      <p>
        <a href={WA_GUIA}>Escribir a la guía</a>
        {" · "}
        <Link href="/">Volver al directorio</Link>
      </p>
    </main>
  );
}
