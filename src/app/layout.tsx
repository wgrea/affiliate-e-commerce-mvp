// src/app/layout.tsx
// Do not include 'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Header from '@/components/Header'; // ADD THESE IMPORTS
import Footer from '@/components/Footer'; // ADD THIS IMPORT
import CartIndicator from '@/components/CartIndicator'; // ✅ Add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pack Lite | Travel Light. Look Bold.",
  description: "Stylish jumpsuits & travelwear curated for the modern nomad. Built with modular UX and emotional resonance.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <CartIndicator /> {/* ✅ Live cart feedback */}
        <main className="min-h-[calc(100vh-160px)] px-6 py-10 sm:px-10 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
