"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { TSS_CDN_JSDELIVR } from "../../lib/tssConfig";

const SNIPPET = `<span class="text-zinc-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-green-300">lang</span><span class="text-zinc-400">=</span><span class="text-amber-300">"en"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
  <span class="text-blue-400">&lt;meta</span> <span class="text-green-300">charset</span><span class="text-zinc-400">=</span><span class="text-amber-300">"UTF-8"</span><span class="text-blue-400">&gt;</span>
  <span class="text-blue-400">&lt;script</span> <span class="text-green-300">src</span><span class="text-zinc-400">=</span><span class="text-amber-300">"${TSS_CDN_JSDELIVR}"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body</span> <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"bg-base text-body"</span><span class="text-blue-400">&gt;</span>
  <span class="text-blue-400">&lt;div</span> <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"max-w-xl mx-auto p-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;h1</span> <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"text-3xl font-bold text-heading mb-4"</span><span class="text-blue-400">&gt;</span>Hello TSS<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;p</span> <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"text-body mb-6"</span><span class="text-blue-400">&gt;</span>Auto light &amp; dark mode.<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;div</span> <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"bg-accent text-white p-4 rounded-xl"</span><span class="text-blue-400">&gt;</span>
      Styled with TSS utilities
    <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;button</span> <span class="text-green-300">onclick</span><span class="text-zinc-400">=</span><span class="text-amber-300">"TSS.toggleDark()"</span>
      <span class="text-green-300">class</span><span class="text-zinc-400">=</span><span class="text-amber-300">"mt-4 bg-muted text-heading px-4 py-2 rounded-lg cursor-pointer border"</span><span class="text-blue-400">&gt;</span>
      Toggle Dark Mode
    <span class="text-blue-400">&lt;/button&gt;</span>
  <span class="text-blue-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span>`;

const DEFAULT_URL = "";

export default function QuickStart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync with initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const rawUrl = process.env.NEXT_PUBLIC_CODEPEN_URL || DEFAULT_URL;

  return (
    <section id="quick-start" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Quick Start</h2>
      <p className="text-body mb-8">Minimal production-ready template.</p>

      <div className="mb-6">
        <CodeBlock lang="index.html" code={
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <script src="${TSS_CDN_JSDELIVR}"></script>
          </head>
          <body class="bg-base text-body">
            <div class="max-w-xl mx-auto p-8">
              <h1 class="text-3xl font-bold text-heading mb-4">Hello TSS</h1>
              <p class="text-body mb-6">Auto light & dark mode.</p>
              <div class="bg-accent text-white p-4 rounded-xl">
                Styled with TSS utilities
              </div>
              <button onclick="TSS.toggleDark()"
                class="mt-4 bg-muted text-heading px-4 py-2 rounded-lg cursor-pointer border">
                Toggle Dark Mode
              </button>
            </div>
          </body>
          </html>
          `
        }>{SNIPPET}</CodeBlock>
      </div>

      {/* Live preview */}
      <div className="border-2 border-accent rounded-xl overflow-hidden min-h-[400px]">
        <div className="bg-accent px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="text-white text-xs ml-2">Live Preview (CodePen)</span>
          </div>
          <a
            href={rawUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-white/80 hover:text-white flex items-center gap-1"
          >
            <span>Open in CodePen</span> <ExternalLink size={10} />
          </a>
        </div>
        <div className="bg-base h-96">
          <iframe height="300" style={{ width: "100%" }} scrolling="no" title="Untitled" src={rawUrl} loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}
