import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome";
import LayoutClient from "./layoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planning",
  description: "Planning tool for managing church services and events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
