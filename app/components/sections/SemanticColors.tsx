const TOKENS = [
  { token: "primary", light: "#ffffff", dark: "#09090b", usage: "Card backgrounds" },
  { token: "secondary", light: "#f3f4f6", dark: "#18181b", usage: "Sidebars, panels" },
  { token: "tertiary", light: "#e5e7eb", dark: "#27272a", usage: "Nested containers" },
  { token: "surface", light: "#ffffff", dark: "#18181b", usage: "Main surface" },
  { token: "base", light: "#f9fafb", dark: "#09090b", usage: "Page background" },
  { token: "muted", light: "#f3f4f6", dark: "#27272a", usage: "Subtle sections" },
  { token: "inverse", light: "#111827", dark: "#f9fafb", usage: "Inverted banners" },
  { token: "heading", light: "#111827", dark: "#f9fafb", usage: "Headings, titles" },
  { token: "body", light: "#374151", dark: "#d1d5db", usage: "Paragraph text" },
  { token: "subtle", light: "#6b7280", dark: "#9ca3af", usage: "Captions, hints" },
  { token: "disabled", light: "#9ca3af", dark: "#52525b", usage: "Disabled state" },
  { token: "accent", light: "#4f46e5", dark: "#818cf8", usage: "Primary actions" },
  { token: "link", light: "#2563eb", dark: "#60a5fa", usage: "Hyperlinks" },
  { token: "success", light: "#16a34a", dark: "#4ade80", usage: "Success states" },
  { token: "warning", light: "#f59e0b", dark: "#fbbf24", usage: "Warnings" },
  { token: "danger", light: "#dc2626", dark: "#f87171", usage: "Errors" },
  { token: "info", light: "#2563eb", dark: "#60a5fa", usage: "Informational" },
  { token: "outline", light: "#e5e7eb", dark: "#3f3f46", usage: "Border color" },
  { token: "ring", light: "#3b82f6", dark: "#60a5fa", usage: "Focus rings" },
];

const TEXT_TOKENS = [
  { cls: "text-heading", label: "text-heading: titles", extra: "text-2xl font-extrabold" },
  { cls: "text-body", label: "text-body: paragraph", extra: "" },
  { cls: "text-subtle", label: "text-subtle: secondary info", extra: "" },
  { cls: "text-disabled", label: "text-disabled: inactive", extra: "" },
  { cls: "text-link", label: "text-link: interactive", extra: "" },
];

export default function SemanticColors() {
  return (
    <section id="semantic-colors" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Semantic Colors</h2>
      <p className="text-body mb-8">
        These tokens automatically switch between light and dark values. Use
        them with{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          bg-&#123;token&#125;
        </code>
        ,{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          text-&#123;token&#125;
        </code>
        , and{" "}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          border-&#123;token&#125;
        </code>
        .
      </p>

      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-8">
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Light</th>
              <th>Dark</th>
              <th>Preview</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {TOKENS.map((t) => (
              <tr key={t.token}>
                <td>
                  <code>{t.token}</code>
                </td>
                <td>
                  <span className="text-subtle">{t.light}</span>
                </td>
                <td>
                  <span className="text-subtle">{t.dark}</span>
                </td>
                <td>
                  <div
                    className={`w-7 h-7 rounded-md bg-${t.token} border shadow-sm`}
                  />
                </td>
                <td>
                  <span className="text-subtle text-xs">{t.usage}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold text-heading mb-4">Text Color Tokens</h3>
      <div className="bg-surface border rounded-2xl p-6 shadow-sm">
        {TEXT_TOKENS.map((t) => (
          <p key={t.cls} className={`${t.cls} ${t.extra} mb-2`}>
            {t.label}
          </p>
        ))}
        <div className="flex gap-4 flex-wrap mt-2">
          {["success", "warning", "danger", "info", "accent"].map((c) => (
            <span key={c} className={`text-${c} font-medium`}>
              text-{c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
