import { useState } from "react";
import { PrisonBars } from "./components/Intro/SolitaryDoor"; // Add /Intro/ here
import { Activity, ShieldAlert, BookOpen } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans">
      {!isEntryComplete && (
        <PrisonBars onComplete={() => setEntryComplete(true)} />
      )}

      {/* The "Maroon Yoke" Header */}
      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={28} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-2xl tracking-tighter uppercase italic">
            Vankila-Punk
          </h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" />{" "}
            SYSTEM_ACTIVE
          </span>
          <span className="opacity-50 hidden md:inline">VHL_REF: 7708CD</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:pt-16 md:pb-32">
        {/* Dynamic Post Card */}
        <section className="bg-white border-4 border-vhl-lead shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] mb-12">
          <div className="bg-vhl-grey p-3 border-b-4 border-vhl-lead flex justify-between font-mono text-[10px] font-black uppercase">
            <span>Access_Level: General</span>
            <span>Ref_ID: 001.04</span>
          </div>

          <article className="p-8 md:p-12">
            <h2 className="text-4xl md:text-6xl font-black text-vhl-lead uppercase mb-6 leading-[0.9]">
              The Aesthetic of <br />
              <span className="text-vhl-maroon underline">Containment</span>
            </h2>

            <div className="prose prose-lg max-w-none text-vhl-lead/90 leading-relaxed font-medium">
              <p>
                Readability focus: Using high contrast and a spacious layout.
                The Finnish prison design language—often called "Normality"—is
                the foundation of this UI.
              </p>
              <p className="mt-4 border-l-4 border-vhl-maroon pl-4 italic bg-vhl-grey/10 py-2">
                "Design is not a decoration; it is an environment."
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-vhl-lead text-vhl-linen px-6 py-3 font-mono font-bold uppercase hover:bg-vhl-maroon transition-colors">
                View Full Log_
              </button>
            </div>
          </article>
        </section>
      </main>

      {/* Institutional Footer */}
      <footer className="bg-vhl-lead text-vhl-grey p-10 font-mono text-[10px] uppercase tracking-[0.2em] text-center border-t-8 border-vhl-maroon">
        Property of Vankila-Punk // All Data Logged // March 2026
      </footer>
    </div>
  );
}
