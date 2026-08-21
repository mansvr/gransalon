/**
 * One-shot ingest: data/exhibitors.catalog.csv → data/exhibitors.json
 * Canonical CSV from GB-Corpus. Do not scrape again unless told.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CSV_PATH = join(ROOT, "data", "exhibitors.catalog.csv");
const OUT_PATH = join(ROOT, "data", "exhibitors.json");

const HALLS = new Set(["05", "06", "07", "08", "ALB"]);
const TAGS = new Set([
  "vis",
  "vivienda",
  "inversion",
  "turismo",
  "financiero",
  "servicios",
  "comercio",
  "no_vis",
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      field = "";
      if (row.some((cell) => cell.length)) rows.push(row);
      row = [];
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function splitList(value, sep) {
  return (value || "")
    .split(sep)
    .map((part) => part.trim())
    .filter(Boolean);
}

function cleanWebsite(raw) {
  const s = (raw || "").trim();
  if (!s || /^https?:\/\/\/?$/i.test(s) || s === "http://" || s === "https://") {
    return null;
  }
  if (!/^https?:\/\//i.test(s)) return `https://${s}`;
  return s;
}

function cleanLogo(raw) {
  const s = (raw || "").trim();
  return s || null;
}

function citySlugsFor(citiesCell, cityDisplay) {
  const slugs = new Set(
    splitList(citiesCell, ";").map((s) => s.toLowerCase()),
  );
  const display = (cityDisplay || "").trim().toUpperCase();
  if (display === "PANAMA" || display === "PANAMÁ") slugs.add("panama");
  return [...slugs];
}

const raw = readFileSync(CSV_PATH, "utf8").replace(/^\uFEFF/, "");
const [header, ...body] = parseCsv(raw);
const col = Object.fromEntries(header.map((name, i) => [name.trim(), i]));

const exhibitors = body.map((cells) => {
  const get = (key) => cells[col[key]] ?? "";
  const hallRaw = get("hall").trim();
  const halls = splitList(hallRaw, ",").filter((h) => HALLS.has(h));
  const categoryRaw = get("category");
  const tags = splitList(categoryRaw, ";")
    .map((t) => t.toLowerCase())
    .filter((t) => TAGS.has(t));

  return {
    id: get("id").trim(),
    exhibitorId: get("exhibitor_id").trim(),
    companyName: get("company_name").trim(),
    hallRaw,
    halls,
    nivel: get("nivel").trim() || "01",
    standRaw: get("stand").trim(),
    cityDisplay: get("city").trim(),
    citySlugs: citySlugsFor(get("cities"), get("city")),
    tags,
    product: get("product").trim(),
    website: cleanWebsite(get("website")),
    logoUrl: cleanLogo(get("logo_url")),
    descriptionEs: get("description_es").trim(),
  };
});

const json = {
  meta: {
    count: exhibitors.length,
    source: "data/exhibitors.catalog.csv",
    generatedAt: new Date().toISOString().slice(0, 10),
    note: "One card per company. Hall chips use presence (a row with 06, 07 counts in both).",
  },
  exhibitors,
};

writeFileSync(OUT_PATH, `${JSON.stringify(json, null, 2)}\n`, "utf8");
console.log(`Wrote ${exhibitors.length} exhibitors → ${OUT_PATH}`);
