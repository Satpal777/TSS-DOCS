"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { toggleDark } from "tea-simple-smart-css";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function handleToggle() {
    const result = toggleDark();
    setIsDark(result);
  }

  function copyInstall() {
    navigator.clipboard.writeText("npm install tea-simple-smart-css").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b shadow-sm">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.svg"
              alt="TSS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black text-heading text-xl">TSS</span>
            <span className="bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
              v1.0.3
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Install command */}
          <div className="bg-zinc-900 rounded-lg px-4 py-2 flex items-center gap-2">
            <span className="text-green-400 text-xs">$</span>
            <code className="text-green-300 text-xs">npm i tea-simple-smart-css</code>
            <button
              onClick={copyInstall}
              className={`text-xs bg-zinc-700 px-2 py-0.5 rounded cursor-pointer border-0 ${
                copied ? "text-success" : "text-subtle"
              }`}
            >
              {copied ? "copied!" : "copy"}
            </button>
          </div>

          {/* npm link */}
          <a
            href="https://www.npmjs.com/package/tea-simple-smart-css"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-subtle font-medium px-3 py-1 rounded-lg bg-muted border"
          >
            npm ↗
          </a>

          {/* Theme toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full bg-muted border flex items-center justify-center cursor-pointer text-lg border-0"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
