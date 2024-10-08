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
  title: "Hannah Clay's Profile",
  description: "Hannah Clay's virtual resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background min-h-screen"}> 
        <NavBar />
        <main className="container mx-auto p-4">{children}</main>
        <Analytics/>
      </body>
    </html>
  );
}
