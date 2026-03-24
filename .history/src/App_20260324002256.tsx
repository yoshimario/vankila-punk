import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor";
import { ShieldAlert, Activity, FileText } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans flex flex-col selection:bg-vhl-maroon selection:text-white">
      {/* 1. THE DOOR: Only shows while entry is NOT complete */}
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* 2. THE HEADER: Matches the red 'yoke' top bar */}
      <header className="bg-vhl-maroon text-vhl-linen p-4 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={24} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-xl tracking-tighter uppercase italic">
            Vankila-Punk
          </h1>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" />
            System_Active
          </span>
          <span className="opacity-50">VHL_REF: 7708CD</span>
        </div>
      </header>

      {/* 3. THE MAIN SITE: Restored to look like your screenshot */}
      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-20">
        <section className="bg-white border-4 border-vhl-lead shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] overflow-hidden">
          {/* Card Top Info Bar (Grey) */}
          <div className="bg-vhl-grey p-3 border-b-4 border-vhl-lead flex justify-between font-mono text-[10px] font-black uppercase text-vhl-lead/70">
            <span>Access_Level: General</span>
            <span>Ref_ID: 001.04</span>
          </div>

          <div className="p-8 md:p-16">
            <h2 className="text-5xl md:text-7xl font-black text-vhl-lead uppercase leading-[0.85] mb-8">
              The Aesthetic of <br />
              <span className="text-vhl-maroon">Containment</span>
            </h2>

            <div className="max-w-2xl space-y-6">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-vhl-lead/90">
                Readability focus: Using high contrast and a spacious layout.
                The Finnish prison design language—often called "Normality"—is
                the foundation of this UI.
              </p>

              <div className="border-l-4 border-vhl-maroon pl-6 py-2">
                <p className="italic text-vhl-lead/80 text-lg">
                  "Design is not a decoration; it is an environment."
                </p>
              </div>

              <div className="pt-8">
                <button className="bg-vhl-lead text-vhl-linen px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-vhl-maroon transition-colors flex items-center gap-3">
                  View Full Log_
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. THE FOOTER: Restored dark wide bar */}
      <footer className="bg-vhl-lead text-vhl-grey/50 p-12 mt-20 font-mono text-[10px] uppercase tracking-[0.3em] text-center border-t-8 border-vhl-maroon">
        Property of Vankila-Punk // All Data Logged // March 2026
      </footer>
    </div>
  );
}
