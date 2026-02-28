import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Serenade Town - Your Moment, Perfectly Celebrated",
  description: "High-end, responsive single-page website for The Serenade Town located in Andheri (East).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw]">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-cream text-brown-dark overflow-x-hidden w-full max-w-[100vw] box-border`}
      >
        {children}
      </body>
    </html>
  );
}
