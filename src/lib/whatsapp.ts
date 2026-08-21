const BASE = "https://wa.me/573018927141";

export const WA_GUIA = `${BASE}?text=${encodeURIComponent("Hola — vi la guía del Gran Salón")}`;

export function waClaim(companyName: string): string {
  const text = `Hola — soy el expositor ${companyName}`;
  return `${BASE}?text=${encodeURIComponent(text)}`;
}
