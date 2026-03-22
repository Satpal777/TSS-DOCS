import Navbar from "./components/Navbar";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/sections/Introduction";
import Installation from "./components/sections/Installation";
import QuickStart from "./components/sections/QuickStart";
import HowItWorks from "./components/sections/HowItWorks";
import ClassExplorer from "./components/sections/ClassExplorer";
import SemanticColors from "./components/sections/SemanticColors";
import Palette from "./components/sections/Palette";
import Typography from "./components/sections/Typography";
import {
  Spacing,
  Borders,
  Layout,
  Grid,
  Sizing,
  Positioning,
  Shadows,
  Transitions,
  Effects,
  Utilities,
  ApiReference,
} from "./components/sections/Sections";
import { TSS_VERSION, TSS_CDN_JSDELIVR, TSS_CDN_UNPKG } from "./lib/tssConfig";
import { ExternalLink } from "lucide-react";

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="pl-64 pt-16">
        <div className="max-w-4xl mx-auto py-12 px-8">
          <Introduction />
          <Installation />
          <QuickStart />
          <HowItWorks />
          <ClassExplorer />

          <hr className="border-t my-12" />

          <SemanticColors />
          <Palette />

          <hr className="border-t my-12" />

          <Typography />
          <Spacing />
          <Borders />
          <Layout />
          <Grid />
          <Sizing />
          <Positioning />
          <Shadows />
          <Transitions />
          <Effects />
          <Utilities />

          <hr className="border-t my-12" />

          <ApiReference />

          {/* Footer */}
          <footer className="border-t pt-10 pb-16 text-center">
            <div className="relative w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-md mx-auto mb-4">
              <Image
                src="/logo.svg"
                alt="TSS Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-heading font-bold text-lg mb-1">
              tea-simple-smart-css
            </p>
            <p className="text-subtle text-sm mb-6">
              v{TSS_VERSION} · MIT License · Zero dependencies
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.npmjs.com/package/tea-simple-smart-css"
                className="text-sm text-link"
              >
                npm <ExternalLink size={12} className="inline ml-1" />
              </a>
              <span className="text-subtle">·</span>
              <a
                href={TSS_CDN_JSDELIVR}
                className="text-sm text-link"
              >
                jsDelivr <ExternalLink size={12} className="inline ml-1" />
              </a>
              <span className="text-subtle">·</span>
              <a
                href={TSS_CDN_UNPKG}
                className="text-sm text-link"
              >
                unpkg <ExternalLink size={12} className="inline ml-1" />
              </a>
            </div>
            
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-accent/20 shadow-sm transition hover:shadow-md hover:scale-105 active:scale-95 group">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-subtle group-hover:text-accent transition">
                  Built with TSS
                </span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
