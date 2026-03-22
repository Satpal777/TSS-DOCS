import { Zap, Moon, Eye, Layers, Construction } from "lucide-react";
import Image from "next/image";
import { TSS_VERSION } from "../../lib/tssConfig";

export default function Introduction() {
  return (
    <section id="introduction" className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg overflow-hidden">
          <Image
            src="/logo.svg"
            alt="TSS Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-black text-heading">Tea Simple Smart CSS</h1>
          <p className="text-subtle">TSS · v{TSS_VERSION} · MIT</p>
        </div>
      </div>

      <p className="text-lg text-body mb-8 leading-relaxed">
        Lightweight, zero-config, utility-first CSS engine. Scans HTML at runtime, generates only used CSS, and handles dark mode automatically.
      </p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { val: "~10kb", label: "Minified" },
          { val: "0", label: "Dependencies" },
          { val: "Auto", label: "Dark Mode" },
          { val: "CDN", label: "Ready" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface border rounded-xl p-4 text-center shadow-sm hover:animate-shimmer hover:bg-shimmer"
          >
            <p className="text-2xl font-black text-accent mb-1">{stat.val}</p>
            <p className="text-xs text-subtle">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          {
            icon: <Zap size={24} className="text-accent" />,
            title: "Runtime",
            desc: "Zero-build CSS generation based on your actual HTML usage.",
          },
          {
            icon: <Moon size={24} className="text-accent" />,
            title: "Dark Mode",
            desc: "Tokens adapt automatically to system settings or manual toggle.",
          },
          {
            icon: <Eye size={24} className="text-accent" />,
            title: "Observer",
            desc: "Watches for DOM changes to style dynamic elements instantly.",
          },
          {
            icon: <Layers size={24} className="text-accent" />,
            title: "Utilities",
            desc: "Standard utility names. If you know Tailwind, you know TSS.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-surface border rounded-xl p-5 flex gap-4 items-start"
          >
            <div className="p-2 bg-accent/5 rounded-lg">
              {card.icon}
            </div>
            <div>
              <p className="font-bold text-heading mb-1">{card.title}</p>
              <p className="text-sm text-subtle">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-surface border-2 border-accent border-dashed rounded-2xl p-6 flex flex-col items-center justify-between gap-6 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 -mr-16 -mt-16 rounded-full" />
        <div className="flex items-center gap-5 relative z-10 w-full">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shrink-0">
            <Construction size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-accent text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                In Development
              </span>
              <span className="text-subtle text-xs font-semibold uppercase tracking-widest">
                v1.1.0 Roadmap
              </span>
            </div>
            <h3 className="text-2xl font-black text-heading">
              Responsive Support
            </h3>
            <p className="text-body leading-relaxed max-w-xl">
              Breakpoints (<code className="text-accent font-bold">sm:</code>, <code className="text-accent font-bold">md:</code>, <code className="text-accent font-bold">lg:</code>) are arriving soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
