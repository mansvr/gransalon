"use client";

import { useQueryStates } from "nuqs";
import { useState } from "react";

import {
  CITY_CHIPS,
  type Exhibitor,
  HALL_CHIPS,
  TAG_CHIPS,
  filterExhibitors,
  hallStandLine,
  prettyCity,
  tagLabel,
} from "@/lib/exhibitors";
import { directoryParsers } from "@/lib/search-params";
import { waClaim } from "@/lib/whatsapp";

function HallGlyph({ halls }: { halls: Exhibitor["halls"] }) {
  const label = halls[0] ?? "—";
  return (
    <span className="hall-glyph" aria-hidden="true">
      {label}
    </span>
  );
}

function Logo({ row }: { row: Exhibitor }) {
  const [failed, setFailed] = useState(false);
  if (!row.logoUrl || failed) {
    return <HallGlyph halls={row.halls} />;
  }
  return (
    // Hotlink v1 — next/image later if Corferias blocks.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="exhibitor-logo"
      src={row.logoUrl}
      alt=""
      width={48}
      height={48}
      onError={() => setFailed(true)}
    />
  );
}

function ExhibitorCard({ row }: { row: Exhibitor }) {
  const tags = row.tags
    .filter((t) => t !== "no_vis")
    .slice(0, 3)
    .map(tagLabel);
  const place = [prettyCity(row.cityDisplay), ...tags]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="exhibitor-card">
      <Logo row={row} />
      <div className="exhibitor-body">
        <h3 className="exhibitor-name">{row.companyName}</h3>
        <p className="exhibitor-stand">{hallStandLine(row)}</p>
        {place ? <p className="exhibitor-place">{place}</p> : null}
        {row.product ? (
          <p className="exhibitor-product">{row.product}</p>
        ) : null}
        <p className="exhibitor-links">
          <a href={`/e/${row.id}`}>Ficha</a>
          {row.website ? (
            <>
              <span aria-hidden="true"> · </span>
              <a href={row.website} target="_blank" rel="noopener noreferrer">
                Web
              </a>
            </>
          ) : null}
          <span aria-hidden="true"> · </span>
          <a href={waClaim(row.companyName)}>Reclamar perfil</a>
        </p>
      </div>
    </article>
  );
}

export function Directory({ exhibitors }: { exhibitors: Exhibitor[] }) {
  const [filters, setFilters] = useQueryStates(directoryParsers);
  const results = filterExhibitors(exhibitors, filters);
  const active =
    Boolean(filters.q) ||
    filters.hall !== null ||
    filters.city !== null ||
    filters.tag !== null;

  function toggleHall(value: (typeof HALL_CHIPS)[number]["value"]) {
    void setFilters({ hall: filters.hall === value ? null : value });
  }
  function toggleCity(value: (typeof CITY_CHIPS)[number]["value"]) {
    void setFilters({ city: filters.city === value ? null : value });
  }
  function toggleTag(value: (typeof TAG_CHIPS)[number]["value"]) {
    void setFilters({ tag: filters.tag === value ? null : value });
  }

  return (
    <section className="directory" aria-label="Directorio de expositores">
      <div className="directory-head">
        <h2>Directorio</h2>
        <p className="result-count">
          <strong>{results.length}</strong> expositores
        </p>
      </div>

      <div className="chip-row" role="toolbar" aria-label="Filtros">
        <button
          type="button"
          className="chip"
          aria-pressed={!active}
          onClick={() =>
            void setFilters({ q: "", hall: null, city: null, tag: null })
          }
        >
          Todos
        </button>
        {HALL_CHIPS.map((chip) => (
          <button
            key={chip.value}
            type="button"
            className="chip"
            aria-pressed={filters.hall === chip.value}
            onClick={() => toggleHall(chip.value)}
          >
            {chip.label}
          </button>
        ))}
        {CITY_CHIPS.map((chip) => (
          <button
            key={chip.value}
            type="button"
            className="chip"
            aria-pressed={filters.city === chip.value}
            onClick={() => toggleCity(chip.value)}
          >
            {chip.label}
          </button>
        ))}
        {TAG_CHIPS.map((chip) => (
          <button
            key={chip.value}
            type="button"
            className="chip"
            aria-pressed={filters.tag === chip.value}
            onClick={() => toggleTag(chip.value)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="search-row">
        <label className="sr-only" htmlFor="directory-q">
          Buscar empresa, producto o ciudad
        </label>
        <input
          id="directory-q"
          className="search-input"
          type="search"
          value={filters.q}
          onChange={(e) => void setFilters({ q: e.target.value })}
          placeholder="Empresa, producto, ciudad…"
          autoComplete="off"
        />
        <label className="sort-label">
          <span className="sr-only">Orden</span>
          <select
            className="sort-select"
            value={filters.sort}
            onChange={(e) =>
              void setFilters({
                sort: e.target.value === "hall" ? "hall" : "az",
              })
            }
          >
            <option value="az">A–Z</option>
            <option value="hall">Por pabellón</option>
          </select>
        </label>
      </div>

      {results.length === 0 ? (
        <p className="empty">
          Ningún expositor coincide. Prueba otro pabellón o borra la búsqueda.
        </p>
      ) : (
        <div className="exhibitor-grid">
          {results.map((row) => (
            <ExhibitorCard key={row.id} row={row} />
          ))}
        </div>
      )}
    </section>
  );
}
