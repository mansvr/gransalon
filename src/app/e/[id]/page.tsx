import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getExhibitor,
  getExhibitors,
  hallStandLine,
  prettyCity,
  tagLabel,
} from "@/lib/exhibitors";
import { waClaim } from "@/lib/whatsapp";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getExhibitors().map((row) => ({ id: row.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const row = getExhibitor(id);
  if (!row) return { title: "Expositor" };
  return { title: row.companyName };
}

export default async function ExhibitorPage({ params }: Props) {
  const { id } = await params;
  const row = getExhibitor(id);
  if (!row) notFound();

  const tags = row.tags.filter((t) => t !== "no_vis").map(tagLabel);

  return (
    <main className="page-prose">
      <p className="page-kicker">{hallStandLine(row)}</p>
      <h1>{row.companyName}</h1>
      <p>
        {prettyCity(row.cityDisplay)}
        {tags.length ? ` · ${tags.join(" · ")}` : ""}
      </p>
      {row.product ? <p>{row.product}</p> : null}
      {row.descriptionEs ? <p>{row.descriptionEs}</p> : null}
      <p>
        {row.website ? (
          <>
            <a href={row.website} target="_blank" rel="noopener noreferrer">
              Sitio web
            </a>
            {" · "}
          </>
        ) : null}
        <a href={waClaim(row.companyName)}>Reclamar perfil</a>
        {" · "}
        <Link href="/">Directorio</Link>
      </p>
    </main>
  );
}
