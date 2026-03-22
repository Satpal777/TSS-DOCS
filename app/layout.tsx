import type { Metadata } from "next";
import "./globals.css";
import TSSInitializer from "./Tss";

export const metadata: Metadata = {
  title: "TSS — Tea Simple Smart CSS · Documentation",
  description:
    "Official documentation for TSS — a lightweight, utility-first CSS engine with automatic light/dark mode. Zero config, CDN-ready.",
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
    <html lang="en">
      <body className="bg-base text-body">
        <TSSInitializer />
        {children}
      </body>
    </html>
  );
}
