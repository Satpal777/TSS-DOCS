const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const FAMILIES = [
  "slate", "red", "orange", "amber", "green", "teal",
  "blue", "indigo", "violet", "pink",
];

const MINI_FAMILIES = [
  "gray", "zinc", "rose", "sky", "cyan", "lime", "yellow", "purple", "emerald",
];

export default function Palette() {
  return (
    <section id="palette" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Color Palette</h2>
      <p className="text-body mb-8">
        Fixed color shades — identical in both light and dark mode. Syntax:{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          bg-&#123;color&#125;-&#123;shade&#125;
        </code>{" "}
        or{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          text-&#123;color&#125;-&#123;shade&#125;
        </code>
        .
      </p>

      <div className="space-y-4">
        {FAMILIES.map((family) => (
          <div key={family}>
            <p className="text-sm font-semibold text-heading mb-2 capitalize">
              {family}
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {SHADES.map((shade) => (
                <div
                  key={shade}
                  className={`flex-1 min-w-0 h-10 rounded-lg bg-${family}-${shade}${shade === 50 ? " border" : ""}`}
                  title={`${family}-${shade}`}
                />
              ))}
            </div>
            <div className="flex gap-1.5 flex-wrap mt-1">
              {SHADES.map((shade) => (
                <span
                  key={shade}
                  className="flex-1 text-center text-xs text-subtle"
                >
                  {shade}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-heading mb-2">
            {MINI_FAMILIES.map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" · ")}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {MINI_FAMILIES.map((family) => (
              <div
                key={family}
                className={`flex-1 min-w-0 h-6 rounded bg-${family}-400`}
                title={family}
              />
            ))}
          </div>
          <p className="text-xs text-subtle mt-2">
            All families support shades: 50, 100, 200, 300, 400, 500, 600, 700,
            800, 900, 950
          </p>
        </div>
      </div>
    </section>
  );
}
