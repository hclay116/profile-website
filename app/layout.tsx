/**
 * @file page.tsx
 *
 * @description This is the root layout for the profile website.
 *
 * @author Hannah Clay
 *
 * @created 2024-08-11
 *
 * @version 2.0.0
*/
import "./globals.css";

import NavBar from "./components/layout/NavBar";

import { Analytics } from "@vercel/analytics/react"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Hannah Clay - Software Engineer",
  description: "AI Engineer working at the intersection of machine learning and medicine. Stanford CS (Biomedical Computation, AI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans min-h-screen">
        <div className="backdrop" aria-hidden="true" />
        <NavBar />
        <main className="w-full">{children}</main>
        <Analytics/>
      </body>
    </html>
  );
}
