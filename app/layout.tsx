import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TSSInitializer from "./Tss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TSS | Documentation",
  description:
    "Official documentation for TSS | a lightweight, utility-first CSS engine with automatic light/dark mode. Zero config, CDN-ready.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-base text-body font-sans antialiased">
        <TSSInitializer />
        {children}
      </body>
    </html>
  );
}
