// src/App.tsx
import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor"; // <-- Updated import
import { ShieldCheck, Activity } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-vhl-linen font-sans selection:bg-vhl-maroon selection:text-white">
      {/* Solitary Door Intro (with sound check) */}
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* Modern Institutional Layout */}
      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldCheck size={28} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-2xl tracking-tighter uppercase italic">
            Vankila-Punk // REGISTRY
          </h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" />{" "}
            SYSTEM_ACTIVE
          </span>
          <span className="opacity-50">VHL_REF: 7708CD</span>
        </div>
      </header>

      {/* Main Content (High Readability) */}
      <main className="flex-grow max-w-4xl mx-auto p-6 md:pt-16 md:pb-32 space-y-16">
        <article className="prose prose-slate prose-lg max-w-none text-vhl-lead leading-relaxed">
          <h2 className="font-mono text-xl uppercase tracking-widest text-vhl-grey">
            Archive Report // 2026.03.23
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-vhl-lead uppercase leading-[0.9] mt-2 mb-10">
            The Aesthetic <br />
            of Containment
          </h3>
          <p>
            The Finnish prison design language—often called "Normality"—is the
            foundation of this UI. Readability is prioritized through high
            contrast and a spacious layout. The color palette follows the VHL
            standard: Maroon for authority, Grey for utility, and Linen for
            clarity.
          </p>
          <p className="mt-8 border-l-4 border-vhl-maroon pl-6 italic bg-white p-6 shadow-inner">
            "Readability is not just design; it is a fundamental human right
            within the record."
          </p>
        </article>
      </main>

      {/* Industrial Footer */}
      <footer className="bg-vhl-lead text-vhl-grey p-10 font-mono text-[10px] uppercase tracking-[0.2em] text-center border-t-8 border-vhl-maroon mt-auto">
        Property of Vankila-Punk // All Data Logged // March 2026
      </footer>
    </div>
  );
}
