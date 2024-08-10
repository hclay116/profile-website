import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

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
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
