import { useState } from "react";
import { PrisonBars } from "./components/Intro/PrisonBars";
import { FileText, Activity, ShieldCheck } from "lucide-react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {showIntro && <PrisonBars onComplete={() => setShowIntro(false)} />}

      {/* Institutional Header: The "Maroon Yoke" */}
      <header className="bg-vhl-maroon text-vhl-linen p-4 border-b-4 border-vhl-lead sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-vhl-grey" />
            <h1 className="font-mono font-black text-xl tracking-tighter uppercase">
              Vankilapunk_Registry
            </h1>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-xs uppercase opacity-80">
            <span>Sector_01</span>
            <span className="flex items-center gap-2">
              <Activity size={14} className="animate-pulse text-green-500" />
              System_Live
            </span>
          </div>
        </div>
      </header>

      {/* Main Content: High Readability Focus */}
      <main className="flex-grow max-w-3xl mx-auto p-6 md:py-16">
        <section className="space-y-12">
          <header className="border-l-8 border-vhl-maroon pl-6 py-2">
            <p className="font-mono text-vhl-grey text-sm mb-1 uppercase">
              Report // 2026.03.23
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-vhl-lead leading-none">
              The Protocol of Normality
            </h2>
          </header>

          <article className="prose prose-lg text-vhl-lead leading-relaxed">
            <p>
              In the Finnish prison system, the environment is designed to
              mirror the outside world. This is the <strong>Vankilapunk</strong>{" "}
              ethos: minimalist, industrial, but fundamentally human.
            </p>
            <div className="bg-vhl-grey/10 p-6 border-2 border-vhl-lead my-8 flex gap-4 italic">
              <FileText className="shrink-0 text-vhl-maroon" />
              "Readability is not just design; it is a right of the record."
            </div>
            <p>
              This blog uses high-contrast typography and structured layouts to
              ensure that the mission remains clear. The color palette follows
              the VHL standard—Maroon for authority, Grey for utility, and Linen
              for clarity.
            </p>
          </article>
        </section>
      </main>

      {/* Industrial Footer */}
      <footer className="bg-vhl-lead text-vhl-grey p-8 mt-20 font-mono text-[10px] uppercase tracking-widest text-center">
        Property of Vankila-Punk // No Unauthorized Access
      </footer>
    </div>
  );
}
