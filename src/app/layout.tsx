import type { Metadata } from "next";
import { Bitter, Lora, Source_Code_Pro } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/lib/utils";

import "./globals.css";

const bitter = Bitter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bitter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-code-pro",
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
      className={cn(bitter.variable, lora.variable, sourceCodePro.variable)}
    >
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
