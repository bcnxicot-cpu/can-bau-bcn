import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://can-bau-bcn.vercel.app"),
  title: "Can Bau y Cris — Peluquería canina de bajo estrés en Barcelona",
  description:
    "Peluquería canina respetuosa en el Eixample. Un solo perro por cita y la familia puede acompañarlo durante toda la sesión.",
  openGraph: {
    title: "Can Bau y Cris — Que entre tranquilo importa",
    description: "Peluquería canina de bajo estrés en Carrer de Girona 101, Barcelona.",
    type: "website",
    locale: "es_ES",
    images: ["/images/dogs-editorial.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3ead7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
