import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROI Program sigue vigente para ti | Law Offices of Manuel Solis",
  description:
    "Activa hoy tu representación legal y obtén respaldo profesional durante los próximos 12 meses. Más de 50,000 familias ya confiaron en nosotros.",
  openGraph: {
    title: "ROI Program sigue vigente para ti | Law Offices of Manuel Solis",
    description:
      "Activa hoy tu representación legal y obtén respaldo profesional durante los próximos 12 meses.",
    locale: "es_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf7ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
