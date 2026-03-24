import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor";
import { ShieldAlert, Activity } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans flex flex-col overflow-x-hidden selection:bg-vhl-maroon selection:text-white">
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <ShieldAlert size={28} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-2xl tracking-tighter uppercase italic">
            Vankila-Punk // Unit_666
          </h1>
        </div>
        <Activity size={20} className="animate-pulse text-green-400" />
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-6 md:p-12">
        <section className="bg-white border-[6px] border-vhl-lead shadow-[20px_20px_0px_0px_rgba(24,24,27,1)]">
          <div className="bg-vhl-grey p-4 border-b-4 border-vhl-lead font-mono text-xs font-black uppercase">
            Status: Connection_Established
          </div>

          <div className="p-10 md:p-16 space-y-8">
            <h2 className="text-6xl font-black text-vhl-lead uppercase leading-[0.85]">
              The Aesthetic <br />
              Of{" "}
              <span className="text-vhl-maroon underline decoration-8">
                Containment
              </span>
            </h2>

            <p className="text-2xl font-medium leading-relaxed text-vhl-lead antialiased">
              The Vankilapunk protocols are now active. Finnish prison design
              language has been successfully integrated.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-vhl-lead text-vhl-grey/40 p-12 mt-20 font-mono text-[10px] uppercase tracking-[0.3em] text-center border-t-8 border-vhl-maroon">
        Property of Vankila-Punk // March 2026
      </footer>
    </div>
  );
}
