"use client";

import { useEffect, useState } from "react";

const NAV = [
  {
    group: "Getting Started",
    links: [
      { href: "#introduction", label: "Introduction" },
      { href: "#installation", label: "Installation" },
      { href: "#quick-start", label: "Quick Start" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#class-explorer", label: "Class Explorer" },
    ],
  },
  {
    group: "Colors",
    links: [
      { href: "#semantic-colors", label: "Semantic Colors" },
      { href: "#palette", label: "Color Palette" },
    ],
  },
  {
    group: "Utilities",
    links: [
      { href: "#typography", label: "Typography" },
      { href: "#spacing", label: "Spacing" },
      { href: "#borders", label: "Borders" },
      { href: "#layout", label: "Layout" },
      { href: "#grid", label: "Grid" },
      { href: "#sizing", label: "Sizing" },
      { href: "#positioning", label: "Positioning" },
      { href: "#shadows", label: "Shadows" },
      { href: "#transitions", label: "Transitions" },
      { href: "#effects", label: "Effects & Shimmer" },
      { href: "#utilities", label: "Utilities" },
    ],
  },
  {
    group: "Reference",
    links: [
      { href: "#api", label: "API Reference" },
    ],
  },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("introduction");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="fixed left-0 bottom-0 overflow-y-auto bg-secondary border-r z-40 py-6 top-16 w-64"
    >
      <div className="px-3">
        {NAV.map((group, gi) => (
          <div key={gi}>
            {gi > 0 && <div className="border-t my-4" />}
            <p className="text-xs font-semibold uppercase text-subtle mb-2 px-3 tracking-wider">
              {group.group}
            </p>
            {group.links.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link${activeId === id ? " active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        ))}

        <div className="border-t my-4 mx-3" />
        <div className="mx-3 p-4 bg-muted border border-accent/10 rounded-xl transition hover:border-accent/30 group">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-widest text-subtle group-hover:text-accent transition">
              Powered by TSS
            </p>
          </div>
          <p className="text-[11px] text-body font-medium truncate">tea-simple-smart-css</p>
          <p className="text-[10px] text-subtle mt-1 opacity-60">MIT License · {new Date().getFullYear()}</p>
        </div>
      </div>
    </aside>
  );
}
