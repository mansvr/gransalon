import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Baskerville, Outfit } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/lib/utils";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
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
      className={cn(
        outfit.variable,
        libreBaskerville.variable,
        ibmPlexMono.variable,
      )}
    >
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
