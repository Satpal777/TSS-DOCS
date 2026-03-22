"use client";

// Spacing
export function Spacing() {
  const SCALE = [
    { key: "0", val: "0", px: "0px" },
    { key: "px", val: "1px", px: "1px" },
    { key: "0.5", val: "0.125rem", px: "2px" },
    { key: "1", val: "0.25rem", px: "4px" },
    { key: "2", val: "0.5rem", px: "8px" },
    { key: "3", val: "0.75rem", px: "12px" },
    { key: "4", val: "1rem", px: "16px" },
    { key: "5", val: "1.25rem", px: "20px" },
    { key: "6", val: "1.5rem", px: "24px" },
    { key: "8", val: "2rem", px: "32px" },
    { key: "10", val: "2.5rem", px: "40px" },
    { key: "12", val: "3rem", px: "48px" },
    { key: "16", val: "4rem", px: "64px" },
    { key: "20", val: "5rem", px: "80px" },
    { key: "24", val: "6rem", px: "96px" },
    { key: "auto", val: "auto", px: "-" },
  ];

  return (
    <section id="spacing" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Spacing</h2>
      <p className="text-body mb-4">
        Consistent scale for padding and margin. Axis variants supported.
      </p>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-6">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
              <th>Pixels</th>
            </tr>
          </thead>
          <tbody>
            {SCALE.map((s) => (
              <tr key={s.key}>
                <td>
                  <code>{s.key}</code>
                </td>
                <td>
                  <span className="text-subtle">{s.val}</span>
                </td>
                <td>
                  <span className="text-subtle">{s.px}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-surface border rounded-2xl p-6 shadow-sm">
        <p className="text-xs text-subtle font-semibold uppercase mb-4">Padding Visual</p>
        <div className="flex gap-4 flex-wrap items-end">
          {[1, 2, 3, 4, 6, 8].map((n) => (
            <div key={n} className={`bg-accent p-${n} rounded text-center`}>
              <div className="bg-surface text-xs px-2 py-1">p-{n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Borders
export function Borders() {
  return (
    <section id="borders" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Borders &amp; Radius</h2>
      <p className="text-body mb-8">Border widths, colors, and radius utilities.</p>

      <h3 className="text-lg font-bold text-heading mb-3">Border Width</h3>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {["", "-2", "-4", "-8"].map((w) => (
          <div
            key={w}
            className={`border${w} border-accent h-16 rounded-lg bg-surface flex items-center justify-center`}
          >
            <code className="text-xs text-heading">border{w}</code>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">Border Sides</h3>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {["t", "r", "b", "l"].map((side) => (
          <div
            key={side}
            className={`border-${side}-4 border-accent h-16 bg-surface rounded-lg flex items-center justify-center`}
          >
            <code className="text-xs text-heading">border-{side}-4</code>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">Border Colors</h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          ["accent", "border-accent"],
          ["success", "border-success"],
          ["danger", "border-danger"],
          ["warning", "border-warning"],
          ["blue-500", "border-blue-500"],
          ["purple-500", "border-purple-500"],
        ].map(([label, cls]) => (
          <div
            key={label}
            className={`border-2 ${cls} p-4 rounded-lg bg-surface text-center`}
          >
            <code className="text-xs text-heading">{label}</code>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">Border Radius</h3>
      <div className="grid grid-cols-4 gap-3">
        {[
          ["none", "rounded-none"],
          ["sm", "rounded-sm"],
          ["rounded", "rounded"],
          ["md", "rounded-md"],
          ["lg", "rounded-lg"],
          ["xl", "rounded-xl"],
          ["2xl", "rounded-2xl"],
          ["full", "rounded-full"],
        ].map(([label, cls]) => (
          <div
            key={label}
            className={`border-2 border-accent bg-muted h-16 flex items-center justify-center ${cls}`}
          >
            <code className="text-xs text-heading">{label}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

// Layout
export function Layout() {
  const FLEX_REF = [
    ["flex-row / flex-col", "flex-direction: row / column"],
    ["flex-wrap / flex-nowrap", "flex-wrap: wrap / nowrap"],
    ["flex-1", "flex: 1 1 0%"],
    ["flex-none", "flex: none"],
    ["flex-grow / flex-shrink-0", "flex-grow: 1 / flex-shrink: 0"],
    ["items-start/center/end/stretch", "align-items: …"],
    ["justify-start/center/end/between/around/evenly", "justify-content: …"],
    ["self-start/center/end/stretch", "align-self: …"],
    ["gap-{n} / gap-x-{n} / gap-y-{n}", "gap / column-gap / row-gap: …"],
  ];

  return (
    <section id="layout" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Layout &amp; Flexbox</h2>
      <p className="text-body mb-8">Display and flexbox utilities.</p>

      <h3 className="text-lg font-bold text-heading mb-3">Flex Examples</h3>
      <div className="space-y-3 mb-6">
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-subtle mb-2">flex justify-between items-center</p>
          <div className="flex justify-between items-center bg-surface border rounded-lg p-3">
            {["Start", "Center", "End"].map((l) => (
              <div key={l} className="bg-accent text-white text-xs px-3 py-1 rounded-md font-semibold">{l}</div>
            ))}
          </div>
        </div>
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-subtle mb-2">flex gap-3</p>
          <div className="flex gap-3 bg-surface border rounded-lg p-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex-1 bg-accent text-white text-xs p-3 rounded-md text-center font-semibold">flex-1</div>
            ))}
          </div>
        </div>
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-subtle mb-2">flex flex-col gap-2</p>
          <div className="flex flex-col gap-2 bg-surface border rounded-lg p-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-accent text-white text-xs p-2 rounded-md text-center font-semibold">Item {n}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
        <table>
          <thead><tr><th>Class</th><th>CSS</th></tr></thead>
          <tbody>
            {FLEX_REF.map(([cls, css]) => (
              <tr key={cls}>
                <td><code>{cls}</code></td>
                <td><span className="text-subtle">{css}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Grid
export function Grid() {
  const GRID_REF = [
    ["grid-cols-{1-12}", "grid-template-columns: repeat(n, minmax(0, 1fr))"],
    ["grid-rows-{1-6}", "grid-template-rows: repeat(n, minmax(0, 1fr))"],
    ["col-span-{n}", "grid-column: span n / span n"],
    ["col-span-full", "grid-column: 1 / -1"],
    ["row-span-{n}", "grid-row: span n / span n"],
    ["place-items-center", "place-items: center"],
    ["place-content-center", "place-content: center"],
  ];

  return (
    <section id="grid" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Grid</h2>
      <p className="text-body mb-8">CSS Grid utilities for two-dimensional layouts.</p>

      <div className="space-y-4 mb-6">
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-subtle mb-2">grid grid-cols-3 gap-3</p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-accent text-white text-xs p-3 rounded-md text-center font-semibold">{n}</div>
            ))}
          </div>
        </div>
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-subtle mb-2">grid-cols-4 with col-span-2 and col-span-full</p>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-accent text-white text-xs p-3 rounded-md text-center font-semibold">1</div>
            <div className="bg-accent text-white text-xs p-3 rounded-md text-center font-semibold">2</div>
            <div className="bg-indigo-400 text-white text-xs p-3 rounded-md text-center font-semibold col-span-2">col-span-2</div>
            <div className="bg-indigo-400 text-white text-xs p-3 rounded-md text-center font-semibold col-span-full">col-span-full</div>
          </div>
        </div>
      </div>

      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
        <table>
          <thead><tr><th>Class</th><th>CSS</th></tr></thead>
          <tbody>
            {GRID_REF.map(([cls, css]) => (
              <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{css}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Sizing
export function Sizing() {
  const PREFIXES = [
    ["w-{n}", "width", "w-4, w-8, w-16, w-full, w-auto"],
    ["h-{n}", "height", "h-4, h-8, h-screen, h-full"],
    ["w-{a}/{b}", "width %", "w-1/2 (50%), w-1/3 (33%), w-3/4 (75%)"],
    ["size-{n}", "width + height", "size-8 → w-8 h-8"],
    ["max-w-{key}", "max-width", "max-w-sm, max-w-xl, max-w-7xl"],
    ["min-w-{n}", "min-width", "min-w-0, min-w-full"],
    ["min-h-{n}", "min-height", "min-h-0, min-h-screen"],
    ["max-h-{n}", "max-height", "max-h-96, max-h-screen"],
  ];
  const MW = [
    ["max-w-xs", "20rem (320px)"], ["max-w-sm", "24rem (384px)"],
    ["max-w-md", "28rem (448px)"], ["max-w-lg", "32rem (512px)"],
    ["max-w-xl", "36rem (576px)"], ["max-w-2xl", "42rem (672px)"],
    ["max-w-3xl", "48rem (768px)"], ["max-w-4xl", "56rem (896px)"],
    ["max-w-5xl", "64rem (1024px)"], ["max-w-6xl", "72rem (1152px)"],
    ["max-w-7xl", "80rem (1280px)"],
  ];
  return (
    <section id="sizing" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Sizing</h2>
      <p className="text-body mb-8">Width, height, and min/max sizing utilities.</p>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-6">
        <table>
          <thead><tr><th>Prefix</th><th>Property</th><th>Examples</th></tr></thead>
          <tbody>
            {PREFIXES.map(([p, prop, ex]) => (
              <tr key={p}><td><code>{p}</code></td><td><span className="text-subtle">{prop}</span></td><td><span className="text-subtle">{ex}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-bold text-heading mb-3">max-w Scale</h3>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
        <table>
          <thead><tr><th>Class</th><th>Value</th></tr></thead>
          <tbody>
            {MW.map(([cls, val]) => (
              <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{val}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Positioning
export function Positioning() {
  const ROWS = [
    ["static / relative / absolute / fixed / sticky", "position: …"],
    ["top-{n} / right-{n} / bottom-{n} / left-{n}", "top / right / bottom / left: …"],
    ["inset-{n}", "top + right + bottom + left: …"],
    ["inset-x-{n}", "left + right: …"],
    ["inset-y-{n}", "top + bottom: …"],
    ["z-{0|10|20|30|40|50|auto}", "z-index: …"],
  ];
  return (
    <section id="positioning" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Positioning</h2>
      <p className="text-body mb-8">Position utilities and inset helpers.</p>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
        <table>
          <thead><tr><th>Class</th><th>CSS</th></tr></thead>
          <tbody>
            {ROWS.map(([cls, css]) => (
              <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{css}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Shadows
export function Shadows() {
  const SHADOWS = ["sm", "", "md", "lg", "xl", "2xl"];
  return (
    <section id="shadows" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Shadows</h2>
      <p className="text-body mb-8">Box shadow utilities from subtle to dramatic.</p>
      <div className="grid grid-cols-3 gap-5 mb-6">
        {SHADOWS.map((s) => (
          <div key={s} className={`bg-surface rounded-xl p-6 shadow${s ? "-" + s : ""} text-center`}>
            <code className="text-sm text-heading">shadow{s ? "-" + s : ""}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

// Transitions
export function Transitions() {
  const TRANS = [
    ["transition", "color, bg, border, opacity, shadow, transform — 150ms ease"],
    ["transition-all", "all — 150ms ease"],
    ["transition-colors", "color, background-color, border-color — 150ms ease"],
    ["transition-opacity", "opacity — 150ms ease"],
    ["transition-shadow", "box-shadow — 150ms ease"],
    ["transition-transform", "transform — 150ms ease"],
    ["transition-none", "none (disabled)"],
  ];
  const EASE = [
    ["ease-linear", "linear"],
    ["ease-in", "cubic-bezier(0.4, 0, 1, 1)"],
    ["ease-out", "cubic-bezier(0, 0, 0.2, 1)"],
    ["ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)"],
  ];
  return (
    <section id="transitions" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Transitions</h2>
      <p className="text-body mb-8">Smooth state changes with zero boilerplate.</p>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-6">
        <table>
          <thead><tr><th>Class</th><th>Properties Transitioned</th></tr></thead>
          <tbody>
            {TRANS.map(([cls, val]) => (
              <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{val}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-bold text-heading mb-3">Easing</h3>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
        <table>
          <thead><tr><th>Class</th><th>Cubic Bezier</th></tr></thead>
          <tbody>
            {EASE.map(([cls, val]) => (
              <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{val}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Utilities ───────────────────────────────────────────────────────────────
export function Utilities() {
  const GROUPS = [
    {
      title: "Opacity",
      rows: [["opacity-0", "0"], ["opacity-25", "0.25"], ["opacity-50", "0.5"], ["opacity-75", "0.75"], ["opacity-100", "1"]],
    },
    {
      title: "Overflow",
      rows: [["overflow-hidden", "hidden"], ["overflow-auto", "auto"], ["overflow-scroll", "scroll"], ["overflow-visible", "visible"], ["overflow-x-hidden", "x: hidden"], ["overflow-y-auto", "y: auto"]],
    },
    {
      title: "Cursor",
      rows: [["cursor-pointer", "pointer"], ["cursor-default", "default"], ["cursor-not-allowed", "not-allowed"], ["cursor-wait", "wait"], ["cursor-grab", "grab"], ["cursor-none", "none"]],
    },
    {
      title: "Misc",
      rows: [["truncate", "overflow: hidden + ellipsis"], ["outline-none", "outline: 2px solid transparent"], ["italic", "font-style: italic"], ["antialiased", "-webkit-font-smoothing: antialiased"], ["pointer-events-none", "pointer-events: none"], ["sr-only", "Visually hidden, screen-reader accessible"]],
    },
  ];
  return (
    <section id="utilities" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Utilities</h2>
      <p className="text-body mb-8">Miscellaneous utility classes for common CSS patterns.</p>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-bold text-heading mb-3 uppercase tracking-wider">{g.title}</h3>
            <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm">
              <table>
                <tbody>
                  {g.rows.map(([cls, val]) => (
                    <tr key={cls}><td><code>{cls}</code></td><td><span className="text-subtle">{val}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">State Modifiers</h3>
      <p className="text-body mb-4">Interactive states like hover can be applied using the <code className="bg-muted px-1 rounded">hover:</code> prefix.</p>
      <div className="bg-muted rounded-xl p-6">
        <div className="flex gap-4">
          <button className="bg-accent text-white px-6 py-2 rounded-lg font-bold transition hover:bg-indigo-700 hover:shadow-lg">
            Hover Me
          </button>
          <div className="bg-surface border border-dashed p-4 rounded-xl transition hover:border-accent hover:bg-accent hover:bg-opacity-10 group overflow-hidden relative">
            <p className="text-sm text-heading transition hover:text-accent">Hover card example</p>
          </div>
        </div>
        <div className="mt-4">
          <code className="text-xs text-subtle">class="bg-accent hover:bg-indigo-700 transition"</code>
        </div>
      </div>
    </section>
  );
}

export function Effects() {
  const SNIPPET = `<div class="w-full h-32 bg-shimmer animate-shimmer rounded-xl"></div>`;
  return (
    <section id="effects" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Effects &amp; Shimmer</h2>
      <p className="text-body mb-8">Premium animations for skeleton loaders and state indicators.</p>

      <div className="space-y-6">

        <div className="bg-muted rounded-xl p-6">
          <p className="text-xs text-subtle font-semibold uppercase mb-4">Pulse vs Shimmer</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface border rounded-xl text-center">
              <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2 animate-pulse" />
              <code className="text-xs">animate-pulse</code>
            </div>
            <div className="p-4 bg-surface border rounded-xl text-center overflow-hidden">
              <div className="w-8 h-8 rounded-full mx-auto mb-2 bg-shimmer" />
              <code className="text-xs">bg-shimmer</code>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-bold text-heading mb-3 uppercase tracking-wider">Usage Example</h3>
        <CodeBlock lang="Html">{SNIPPET}</CodeBlock>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import CodeBlock from "../CodeBlock";

const API_METHODS = [
  {
    badge: "METHOD", badgeCls: "bg-accent",
    sig: "TSS.toggleDark()",
    desc: "Toggles dark mode on the <html> element by adding/removing the dark class. Persists preference to localStorage.",
    returns: "boolean - true if dark mode is now active, false if light.",
    code: `<span class="text-zinc-500">// Toggle dark mode</span>
<span class="text-blue-400">const</span> <span class="text-zinc-200">isDark</span> <span class="text-zinc-400">=</span> <span class="text-zinc-200">TSS</span><span class="text-zinc-400">.</span><span class="text-amber-300">toggleDark</span><span class="text-zinc-400">();</span>
<span class="text-zinc-200">console</span><span class="text-zinc-400">.</span><span class="text-amber-300">log</span><span class="text-zinc-400">(</span><span class="text-zinc-200">isDark</span><span class="text-zinc-400">);</span> <span class="text-zinc-500">// true or false</span>`,
    lang: "JavaScript",
  },
  {
    badge: "METHOD", badgeCls: "bg-success",
    sig: "TSS.parse(className)",
    desc: "Parses a single TSS class name and returns its selector and CSS rules.",
    returns: "{ selector: string, rules: Record<string, string> } | null",
    code: `<span class="text-zinc-200">TSS</span><span class="text-zinc-400">.</span><span class="text-amber-300">parse</span><span class="text-zinc-400">(</span><span class="text-amber-300">'bg-accent'</span><span class="text-zinc-400">);</span>
<span class="text-zinc-500">// → { selector: ".bg-accent", rules: { "background-color": "var(--tss-accent)" } }</span>

<span class="text-zinc-200">TSS</span><span class="text-zinc-400">.</span><span class="text-amber-300">parse</span><span class="text-zinc-400">(</span><span class="text-amber-300">'unknown-class'</span><span class="text-zinc-400">);</span>
<span class="text-zinc-500">// → null</span>`,
    lang: "JavaScript",
  },
  {
    badge: "METHOD", badgeCls: "bg-warning",
    sig: "TSS.refresh()",
    desc: "Re-scans document.body for TSS classes. Useful after manually injecting HTML that bypasses the MutationObserver.",
    returns: null,
    code: `<span class="text-zinc-200">TSS</span><span class="text-zinc-400">.</span><span class="text-amber-300">refresh</span><span class="text-zinc-400">();</span> <span class="text-zinc-500">// re-scan and apply styles</span>`,
    lang: "JavaScript",
  },
  {
    badge: "PROPERTY", badgeCls: "bg-info",
    sig: "TSS.version",
    desc: "The current version string of the loaded TSS library.",
    returns: null,
    code: `<span class="text-zinc-200">console</span><span class="text-zinc-400">.</span><span class="text-amber-300">log</span><span class="text-zinc-400">(</span><span class="text-zinc-200">TSS</span><span class="text-zinc-400">.</span><span class="text-zinc-200">version</span><span class="text-zinc-400">);</span>
<span class="text-zinc-500">// → "1.0.3"</span>`,
    lang: "JavaScript",
  },
];

export function ApiReference() {
  return (
    <section id="api" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">API Reference</h2>
      <p className="text-body mb-8">
        TSS exposes a small JavaScript API on the global{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">TSS</code> object.
      </p>
      <div className="space-y-6">
        {API_METHODS.map((m) => (
          <div key={m.sig} className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-4">
            <div className="p-5 border-b bg-muted">
              <div className="flex items-center gap-3">
                <span className={`${m.badgeCls} text-white text-xs px-2 py-1 rounded font-mono font-semibold`}>
                  {m.badge}
                </span>
                <code className="text-heading font-bold">{m.sig}</code>
              </div>
              <p className="text-body text-sm mt-2">{m.desc}</p>
            </div>
            <div className="p-5">
              {m.returns && (
                <>
                  <p className="text-xs font-semibold text-subtle uppercase mb-2">Returns</p>
                  <p className="text-sm text-body mb-4">
                    <code className="bg-muted px-1 rounded text-xs">{m.returns}</code>
                  </p>
                </>
              )}
              <CodeBlock lang={m.lang}>{m.code}</CodeBlock>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

