import type { Metadata } from "next";
import { Barlow, Inconsolata, Oswald } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/lib/utils";

import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Guía independiente · Gran Salón 2026",
    template: "%s · Gran Salón 2026",
  },
  description:
    "Encuentra el stand. Directorio independiente de expositores del Gran Salón Inmobiliario en Corferias. No afiliada a Corferias ni a la Lonja.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn(oswald.variable, barlow.variable, inconsolata.variable)}
    >
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
