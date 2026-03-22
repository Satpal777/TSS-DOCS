"use client";

import { useState } from "react";
import { parse } from "tea-simple-smart-css";

const EXAMPLES = [
  "bg-accent", "p-6", "text-2xl", "flex", "rounded-xl",
  "shadow-lg", "grid-cols-3", "transition-colors", "font-bold", "opacity-50",
];

function escHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function ClassExplorer() {
  const [input, setInput] = useState("");

  function getOutput() {
    const val = input.trim();
    if (!val) return null;

    const result = parse(val);

    if (result) {
      const lines = Object.entries(result.rules)
        .map(([k, v]) => `  ${k}: ${v};`)
        .join("\n");
      return { ok: true, selector: result.selector, lines };
    }
    return { ok: false };
  }

  const output = getOutput();

  return (
    <section id="class-explorer" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Class Explorer</h2>
      <p className="text-body mb-6">
        Type any TSS class to instantly see the CSS it generates — powered by{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">parse()</code>.
      </p>

      <div className="bg-surface border rounded-2xl p-6 shadow-md">
        <input
          type="text"
          placeholder="Try: bg-accent, p-4, text-xl, rounded-xl, shadow-lg …"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-secondary border rounded-xl px-4 py-3 text-body text-sm outline-none"
        />

        <div className="mt-4">
          {!output ? (
            <div className="bg-muted rounded-xl p-4 text-center">
              <p className="text-subtle text-sm">
                Enter a class above to see generated CSS ↑
              </p>
            </div>
          ) : output.ok ? (
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="px-4 py-2 border-b border-zinc-700">
                <span className="text-zinc-400 text-xs">Generated CSS</span>
              </div>
              <pre className="p-4 text-sm">
                <code>
                  <span className="text-blue-400">
                    {escHtml(output.selector!)}
                  </span>{" "}
                  <span className="text-zinc-400">{"{"}</span>
                  {"\n"}
                  <span className="text-green-300">
                    {escHtml(output.lines!)}
                  </span>
                  {"\n"}
                  <span className="text-zinc-400">{"}"}</span>
                </code>
              </pre>
            </div>
          ) : (
            <div className="bg-muted rounded-xl p-4 flex items-center gap-3">
              <span className="text-danger font-bold text-lg">✗</span>
              <p className="text-body text-sm">
                No match for{" "}
                <code className="bg-surface px-1 rounded">{input}</code> —
                check the class name and try again.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <p className="text-xs text-subtle w-full mb-1">Quick examples:</p>
          {EXAMPLES.map((cls) => (
            <button
              key={cls}
              onClick={() => setInput(cls)}
              className="text-xs bg-muted text-body px-3 py-1 rounded-full cursor-pointer border"
            >
              {cls}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
