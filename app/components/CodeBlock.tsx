"use client";

import { useState } from "react";

interface Props {
  lang?: string;
  children: string;
  code?: string;
}

export default function CodeBlock({ lang = "HTML", children, code }: Props) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code || children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700">
        <span className="text-zinc-400 text-xs font-medium">{lang}</span>
        <button
          onClick={copy}
          className={`text-xs bg-zinc-700 px-3 py-1 rounded cursor-pointer border-0 ${copied ? "text-success" : "text-subtle"
            }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        className="p-5 overflow-x-auto text-sm"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  );
}
