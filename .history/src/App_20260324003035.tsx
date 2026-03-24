import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor";
import { ShieldAlert, Activity, FileText } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    // Changed bg-vhl-linen to a darker slate to avoid "white page" look
    <div className="min-h-screen bg-slate-200 font-sans flex flex-col overflow-x-hidden selection:bg-vhl-maroon selection:text-white">
      
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* HEADER */}
      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40 shadow-2xl">
        <div className="flex items-center gap-3">
          <ShieldAlert size={28} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-2xl tracking-tighter uppercase italic">
            Vankila-Punk // Unit_666
          </h1>
        </div>
        <Activity size={20} className="animate-pulse text-green-400" />
      </header>

      {/* CONTENT BLOCK - Force high contrast */}
      <main className="flex-grow max-w-4xl mx-auto w-full p-6 md:p-12">
        <section className="bg-white border-[6px] border-vhl-lead shadow-[20px_20px_0px_0px_rgba(24,24,27,1)]">
          <div className="bg-vhl-grey p-4 border-b-4 border-vhl-lead font-mono text-xs font-black uppercase">
            Status: Connection_Established
          </div>
          
          <div className="p-10 md:p-16 space-y-8">
            <h2 className="text-6xl font-black text-vhl-lead uppercase leading-[0.85]">
              The Aesthetic <br/>Of <span className="text-vhl-maroon underline decoration-8">Containment</span>
            </h2>
            
            <p className="text-2xl font-medium leading-relaxed text-vhl-lead">
              The "White Page" is gone. We are now in the <strong>Registry</strong>. 
              The Finnish prison design language is our protocol.
            </p>

            <div className="bg-vhl-linen p-6 border-l-8 border-vhl-maroon italic text-xl font-mono text-vhl-lead/70">
              "Normality is the only way out."
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}