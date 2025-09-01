/** 
 * @file page.tsx
 * 
 * @description This is the root layout for the profile website.
 * 
 * @author Hannah Clay
 * 
 * @created 2024-08-11
 * 
 * @version 1.0.0
*/
import "./globals.css";

import NavBar from "./components/NavBar";

import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hannah Clay - AI Biotech Engineer",
  description: "AI Biotech Engineer specializing in computer vision, machine learning, and full-stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="biotech">
      <body className={inter.className + " animated-bg min-h-screen"}> 
        <NavBar />
        <main className="w-full">{children}</main>
        <Analytics/>
      </body>
    </html>
  );
}
