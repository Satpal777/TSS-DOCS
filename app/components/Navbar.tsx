"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import { toggleDark } from "tea-simple-smart-css";
import { TSS_VERSION } from "../lib/tssConfig";

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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center bg-accent rounded-xl shadow-sm overflow-hidden">
              <Image
                src="/logo.svg"
                alt="TSS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-heading text-xl tracking-tight">TSS Docs</span>
                <span className="bg-accent/10 text-accent text-[10px] font-bold px-1.5 py-0.5 rounded border border-accent/20">
                  v{TSS_VERSION}
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-tighter text-subtle opacity-50">
                  Powered by TSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Install command */}
          <div className="bg-zinc-900 rounded-lg pl-3 pr-2 py-1.5 flex items-center gap-3 border border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 font-mono text-xs">$</span>
              <code className="text-zinc-200 text-xs font-medium">npm i tea-simple-smart-css</code>
            </div>
            <button
              onClick={copyInstall}
              className={`p-1.5 rounded-md transition-all duration-200 border-0 cursor-pointer ${copied ? "bg-success/20 text-success" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700"
                }`}
              title="Copy install command"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          {/* npm link */}
          <a
            href="https://www.npmjs.com/package/tea-simple-smart-css"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-subtle font-bold px-3 py-2 rounded-lg bg-muted border border-transparent hover:border-accent/20 hover:text-accent transition"
          >
            <span>NPM</span>
            <ExternalLink size={12} />
          </a>

          <div className="w-px h-6 bg-divider mx-1" />

          {/* Theme toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-xl bg-muted border flex items-center justify-center cursor-pointer transition hover:bg-surface hover:shadow-sm"
          >
            {isDark ? (
              <Sun size={20} className="text-amber-400" />
            ) : (
              <Moon size={20} className="text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
