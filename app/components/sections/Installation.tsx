import CodeBlock from "../CodeBlock";
import { TSS_VERSION, TSS_CDN_JSDELIVR, TSS_CDN_UNPKG, TSS_NPM_INSTALL } from "../../lib/tssConfig";

const CDN_CODE = `<span class="text-zinc-500">&lt;!-- jsDelivr (recommended) --&gt;</span>
<span class="text-blue-400">&lt;script</span> <span class="text-green-300">src</span><span class="text-zinc-400">=</span><span class="text-amber-300">"${TSS_CDN_JSDELIVR}"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span>

<span class="text-zinc-500">&lt;!-- or unpkg --&gt;</span>
<span class="text-blue-400">&lt;script</span> <span class="text-green-300">src</span><span class="text-zinc-400">=</span><span class="text-amber-300">"${TSS_CDN_UNPKG}"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span>`;

const NPM_CODE = `<span class="text-green-300">${TSS_NPM_INSTALL}</span>`;

const ESM_CODE = `<span class="text-purple-400">import</span> <span class="text-zinc-200">TSS</span> <span class="text-purple-400">from</span> <span class="text-amber-300">'tea-simple-smart-css'</span><span class="text-zinc-400">;</span>`;

const NEXT_CODE = `<span class="text-zinc-500">// app/layout.tsx</span>
<span class="text-purple-400">import</span> <span class="text-zinc-200">Script</span> <span class="text-purple-400">from</span> <span class="text-amber-300">"next/script"</span><span class="text-zinc-400">;</span>

<span class="text-purple-400">export default function</span> <span class="text-amber-300">RootLayout</span><span class="text-zinc-400">({</span> <span class="text-zinc-200">children</span> <span class="text-zinc-400">}: {</span> <span class="text-zinc-200">children</span><span class="text-zinc-400">:</span> <span class="text-blue-400">React.ReactNode</span> <span class="text-zinc-400">}) {</span>
  <span class="text-purple-400">return</span> <span class="text-zinc-400">(</span>
    <span class="text-blue-400">&lt;html</span><span class="text-blue-400">&gt;</span>
      <span class="text-blue-400">&lt;head&gt;</span>
        <span class="text-blue-400">&lt;Script</span>
          <span class="text-green-300">src</span><span class="text-zinc-400">=</span><span class="text-amber-300">"${TSS_CDN_JSDELIVR}"</span>
          <span class="text-green-300">strategy</span><span class="text-zinc-400">=</span><span class="text-amber-300">"beforeInteractive"</span>
        <span class="text-blue-400">/&gt;</span>
      <span class="text-blue-400">&lt;/head&gt;</span>
      <span class="text-blue-400">&lt;body</span> <span class="text-green-300">className</span><span class="text-zinc-400">=</span><span class="text-amber-300">"bg-base text-body"</span><span class="text-blue-400">&gt;</span><span class="text-zinc-400">{</span><span class="text-zinc-200">children</span><span class="text-zinc-400">}</span><span class="text-blue-400">&lt;/body&gt;</span>
    <span class="text-blue-400">&lt;/html&gt;</span>
  <span class="text-zinc-400">);</span>
<span class="text-zinc-400">}</span>`;

export default function Installation() {
  const steps = [
    {
      num: "1",
      title: "CDN",
      badge: "Easiest",
      badgeColor: "bg-success",
      note: (
        <>
          Drop the script in your <code className="bg-muted px-1 rounded text-xs">&lt;head&gt;</code>.
        </>
      ),
      code: CDN_CODE,
      lang: "HTML",
    },
    {
      num: "2",
      title: "npm / bun",
      badge: null,
      note: null,
      code: NPM_CODE,
      lang: "Terminal",
    },
    {
      num: "3",
      title: "ES Module Import",
      badge: null,
      note: null,
      code: ESM_CODE,
      lang: "JavaScript",
    },
  ];

  return (
    <section id="installation" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Installation</h2>
      <p className="text-body mb-8">Install via package manager or use the CDN.</p>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.num} className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                {step.num}
              </span>
              <p className="font-semibold text-heading">{step.title}</p>
              {step.badge && (
                <span
                  className={`${step.badgeColor} text-white text-xs px-2 py-0.5 rounded-full font-medium`}
                >
                  {step.badge}
                </span>
              )}
            </div>
            {step.note && (
              <p className="text-sm text-subtle mb-3">{step.note}</p>
            )}
            <CodeBlock lang={step.lang}>{step.code}</CodeBlock>
          </div>
        ))}
      </div>
    </section>
  );
}
