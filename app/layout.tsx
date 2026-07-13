import type { Metadata } from "next";
import { Archivo, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noble Bathrooms | Sydney's Expert Bathroom & Kitchen Renovations",
  description:
    "Licensed Sydney builder for bathroom, kitchen, laundry & home renovations. Custom 3D design, transparent pricing, and a 10-year waterproofing guarantee. Book a free consultation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${oswald.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
