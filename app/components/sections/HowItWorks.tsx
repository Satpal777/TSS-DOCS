export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "DOM Scan on Load",
      body: (
        <>
          On{" "}
          <code className="bg-muted px-1 rounded text-xs">
            DOMContentLoaded
          </code>
          , TSS walks every element, reads its{" "}
          <code className="bg-muted px-1 rounded text-xs">classList</code>, and
          passes each class through its parser.
        </>
      ),
      snippet: (
        <div className="bg-muted rounded-lg p-3 text-xs font-mono text-subtle">
          element.classList → [&quot;bg-accent&quot;, &quot;p-4&quot;, &quot;rounded-xl&quot;] → generates CSS
        </div>
      ),
    },
    {
      num: "2",
      title: "CSS Variable Theming",
      body: (
        <>
          TSS injects a{" "}
          <code className="bg-muted px-1 rounded text-xs">&lt;style&gt;</code>{" "}
          tag with all semantic tokens as{" "}
          <code className="bg-muted px-1 rounded text-xs">:root</code> CSS
          variables, plus a{" "}
          <code className="bg-muted px-1 rounded text-xs">
            @media (prefers-color-scheme: dark)
          </code>{" "}
          override.
        </>
      ),
      snippet: (
        <div className="bg-zinc-900 rounded-lg p-3 text-xs font-mono">
          <span className="text-zinc-400">:root {"{"}</span>
          <br />
          <span className="text-green-300">&nbsp;&nbsp;--tss-accent: #4f46e5;</span>
          <br />
          <span className="text-zinc-400">{"}"}</span>
          <br />
          <span className="text-zinc-400">
            @media (prefers-color-scheme: dark) {"{"}
          </span>
          <br />
          <span className="text-green-300">&nbsp;&nbsp;--tss-accent: #818cf8;</span>
          <br />
          <span className="text-zinc-400">{"}"}</span>
        </div>
      ),
    },
    {
      num: "3",
      title: "MutationObserver Watches Changes",
      body: (
        <>
          A{" "}
          <code className="bg-muted px-1 rounded text-xs">
            MutationObserver
          </code>{" "}
          watches for new nodes and class attribute changes, so dynamically
          added elements are styled automatically.
        </>
      ),
      snippet: (
        <div className="bg-muted rounded-lg p-3 text-xs font-mono text-subtle">
          document.body → observe(childList + subtree + attributes)
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">How It Works</h2>
      <p className="text-body mb-8">
        Understanding TSS internals in three steps.
      </p>

      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent opacity-20"
        />
        {steps.map((step) => (
          <div key={step.num} className="flex gap-6 mb-8 relative">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-md flex-shrink-0 z-10">
              <span className="text-white font-bold">{step.num}</span>
            </div>
            <div className="pt-2 flex-1">
              <h3 className="font-bold text-heading mb-2">{step.title}</h3>
              <p className="text-body text-sm mb-3">{step.body}</p>
              {step.snippet}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
