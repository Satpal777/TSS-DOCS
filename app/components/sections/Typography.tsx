const SIZES = [
  { cls: "text-xs", size: "0.75rem", lh: "1rem" },
  { cls: "text-sm", size: "0.875rem", lh: "1.25rem" },
  { cls: "text-base", size: "1rem", lh: "1.5rem" },
  { cls: "text-lg", size: "1.125rem", lh: "1.75rem" },
  { cls: "text-xl", size: "1.25rem", lh: "1.75rem" },
  { cls: "text-2xl", size: "1.5rem", lh: "2rem" },
  { cls: "text-3xl", size: "1.875rem", lh: "2.25rem" },
  { cls: "text-4xl", size: "2.25rem", lh: "2.5rem" },
  { cls: "text-5xl", size: "3rem", lh: "1" },
];

const WEIGHTS = [
  { cls: "font-thin", w: "100" },
  { cls: "font-extralight", w: "200" },
  { cls: "font-light", w: "300" },
  { cls: "font-normal", w: "400" },
  { cls: "font-medium", w: "500" },
  { cls: "font-semibold", w: "600" },
  { cls: "font-bold", w: "700" },
  { cls: "font-extrabold", w: "800" },
  { cls: "font-black", w: "900" },
];

export default function Typography() {
  return (
    <section id="typography" className="mb-20">
      <h2 className="text-3xl font-bold text-heading mb-2">Typography</h2>
      <p className="text-body mb-8">
        Font sizes, weights, alignment and text utilities.
      </p>

      <h3 className="text-lg font-bold text-heading mb-3">Font Sizes</h3>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-6">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Size</th>
              <th>Line Height</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((s) => (
              <tr key={s.cls}>
                <td>
                  <code>{s.cls}</code>
                </td>
                <td>
                  <span className="text-subtle">{s.size}</span>
                </td>
                <td>
                  <span className="text-subtle">{s.lh}</span>
                </td>
                <td>
                  <span className={`${s.cls} text-body`}>
                    {parseInt(s.size) >= 3 ? "TSS" : "The quick brown fox"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">Font Weights</h3>
      <div className="bg-surface border rounded-2xl overflow-hidden shadow-sm mb-6">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Weight</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {WEIGHTS.map((w) => (
              <tr key={w.cls}>
                <td>
                  <code>{w.cls}</code>
                </td>
                <td>
                  <span className="text-subtle">{w.w}</span>
                </td>
                <td>
                  <span className={`${w.cls} text-lg text-body`}>
                    Tea Simple Smart CSS
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold text-heading mb-3">Text Utilities</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface border rounded-xl p-4">
          <p className="text-xs text-subtle mb-3 font-semibold uppercase">Alignment</p>
          <p className="text-left text-body text-sm py-1 border-b">text-left</p>
          <p className="text-center text-body text-sm py-1 border-b">text-center</p>
          <p className="text-right text-body text-sm py-1">text-right</p>
        </div>
        <div className="bg-surface border rounded-xl p-4">
          <p className="text-xs text-subtle mb-3 font-semibold uppercase">Transform</p>
          <p className="uppercase text-body text-sm py-1 border-b">uppercase</p>
          <p className="lowercase text-body text-sm py-1 border-b">LOWERCASE</p>
          <p className="capitalize text-body text-sm py-1">capitalize me</p>
        </div>
        <div className="bg-surface border rounded-xl p-4">
          <p className="text-xs text-subtle mb-3 font-semibold uppercase">Decoration</p>
          <p className="underline text-body text-sm py-1 border-b">underline</p>
          <p className="overline text-body text-sm py-1 border-b">overline</p>
          <p className="line-through text-body text-sm py-1">line-through</p>
        </div>
        <div className="bg-surface border rounded-xl p-4">
          <p className="text-xs text-subtle mb-3 font-semibold uppercase">Misc</p>
          <p className="italic text-body text-sm py-1 border-b">italic</p>
          <p className="truncate text-body text-sm py-1">
            truncate — This is a very long piece of text that gets truncated with ellipsis
          </p>
        </div>
      </div>
    </section>
  );
}
