import catalog from "../../data/exhibitors.json";

export const HALLS = ["05", "06", "07", "08", "ALB"] as const;
export type Hall = (typeof HALLS)[number];

export const CITY_SLUGS = [
  "bogota",
  "medellin",
  "cali",
  "cartagena",
  "barranquilla",
  "eje_cafetero",
  "costa",
  "internacional",
  "otro",
  "panama",
] as const;
export type CitySlug = (typeof CITY_SLUGS)[number];

export const TAGS = [
  "vis",
  "vivienda",
  "inversion",
  "turismo",
  "financiero",
  "servicios",
] as const;
export type Tag = (typeof TAGS)[number];

export type Exhibitor = {
  id: string;
  exhibitorId: string;
  companyName: string;
  hallRaw: string;
  halls: Hall[];
  nivel: string;
  standRaw: string;
  cityDisplay: string;
  citySlugs: string[];
  tags: string[];
  product: string;
  website: string | null;
  logoUrl: string | null;
  descriptionEs: string;
};

export type DirectoryFilters = {
  q: string;
  hall: Hall | null;
  city: CitySlug | null;
  tag: Tag | null;
  sort: "az" | "hall";
};

const CITY_PRETTY: Record<string, string> = {
  "BOGOTA D.C.": "Bogotá",
  PANAMA: "Panamá",
  CARTAGENA: "Cartagena",
  MEDELLIN: "Medellín",
  BARRANQUILLA: "Barranquilla",
  CALI: "Cali",
  IBAGUE: "Ibagué",
  PEREIRA: "Pereira",
  ARMENIA: "Armenia",
  "SANTA MARTA": "Santa Marta",
  BUCARAMANGA: "Bucaramanga",
  MIAMI: "Miami",
  DUBAI: "Dubái",
  HIGUEY: "Higüey",
  GUATEMALA: "Guatemala",
};

const TAG_LABEL: Record<string, string> = {
  vis: "VIS",
  vivienda: "Vivienda",
  inversion: "Inversión",
  turismo: "Turismo",
  financiero: "Financiero",
  servicios: "Servicios",
  comercio: "Comercio",
  no_vis: "No VIS",
};

export const HALL_CHIPS: { value: Hall; label: string }[] = [
  { value: "06", label: "Pabellón 6" },
  { value: "08", label: "Pabellón 8" },
  { value: "07", label: "Pabellón 7" },
  { value: "05", label: "Pabellón 5" },
  { value: "ALB", label: "ALB" },
];

export const CITY_CHIPS: { value: CitySlug; label: string }[] = [
  { value: "bogota", label: "Bogotá" },
  { value: "panama", label: "Panamá" },
  { value: "cartagena", label: "Cartagena" },
  { value: "medellin", label: "Medellín" },
];

export const TAG_CHIPS: { value: Tag; label: string }[] = [
  { value: "vis", label: "VIS" },
  { value: "inversion", label: "Inversión" },
  { value: "turismo", label: "Turismo" },
];

export function getExhibitors(): Exhibitor[] {
  return catalog.exhibitors as Exhibitor[];
}

export function getExhibitorCount(): number {
  return catalog.meta.count;
}

export function getExhibitor(id: string): Exhibitor | undefined {
  return getExhibitors().find((row) => row.id === id);
}

export function prettyCity(display: string): string {
  return CITY_PRETTY[display.trim().toUpperCase()] ?? display;
}

export function tagLabel(tag: string): string {
  return TAG_LABEL[tag] ?? tag;
}

export function hallStandLine(row: Exhibitor): string {
  const halls = row.halls.length
    ? row.halls.join(", ")
    : row.hallRaw || "—";
  const stand = row.standRaw || "—";
  const nivel =
    row.nivel && row.nivel !== "01" ? ` · Nivel ${row.nivel}` : "";
  return `Pabellón ${halls} · Stand ${stand}${nivel}`;
}

function hallRank(row: Exhibitor): string {
  return row.halls[0] ?? row.hallRaw ?? "zz";
}

export function filterExhibitors(
  rows: Exhibitor[],
  filters: DirectoryFilters,
): Exhibitor[] {
  const q = filters.q.trim().toLowerCase();
  const next = rows.filter((row) => {
    if (filters.hall && !row.halls.includes(filters.hall)) return false;
    if (filters.city && !row.citySlugs.includes(filters.city)) return false;
    if (filters.tag && !row.tags.includes(filters.tag)) return false;
    if (q) {
      const hay = [
        row.companyName,
        row.product,
        row.cityDisplay,
        prettyCity(row.cityDisplay),
        row.standRaw,
        row.hallRaw,
        row.descriptionEs,
        ...row.tags.map(tagLabel),
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  next.sort((a, b) => {
    if (filters.sort === "hall") {
      const hall = hallRank(a).localeCompare(hallRank(b), "es");
      if (hall !== 0) return hall;
      return a.standRaw.localeCompare(b.standRaw, "es", { numeric: true });
    }
    return a.companyName.localeCompare(b.companyName, "es", {
      sensitivity: "base",
    });
  });

  return next;
}
