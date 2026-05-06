import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mapa Jugar — Explorá Argentina",
    template: "%s | Mapa Jugar",
  },
  description:
    "Mapa interactivo para explorar Argentina: provincias, naturaleza, cultura y turismo. Pensado para chicas, chicos y aulas.",
  applicationName: "Mapa Jugar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Mapa Jugar",
    title: "Mapa Jugar — Explorá Argentina",
    description:
      "Descubrí el país jugando con el mapa: flora, fauna, sabores y destinos.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f3d5c" },
    { media: "(prefers-color-scheme: dark)", color: "#0c2438" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${nunito.variable} ${fredoka.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
