import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor";
import { ShieldAlert, Activity, ArrowRight } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans flex flex-col overflow-x-hidden selection:bg-vhl-maroon selection:text-white">
      
      {/* 1. THE INTRO: Solitary Door logic */}
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* 2. THE HEADER: The 'Maroon Yoke' layout */}
      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <ShieldAlert size={28} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-2xl tracking-tighter uppercase italic">
            Vankila-Punk // VHL.666
          </h1>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-widest text-vhl-linen/80">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" /> 
            System_Live
          </span>
          <span className="hidden md:inline border-l border-vhl-linen/20 pl-6">
            Registry: Solitary_Unit_03
          </span>
        </div>
      </header>

      {/* 3. THE CONTENT: High-Readability Focus */}
      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-20">
        
        {/* Main Post Card */}
        <section className="bg-white border-4 border-vhl-lead shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] overflow-hidden">
          
          {/* Card Meta-Bar */}
          <div className="bg-vhl-grey p-4 border-b-4 border-vhl-lead flex justify-between font-mono text-[11px] font-black uppercase text-vhl-lead">
            <span>Protocol: Normality</span>
            <span className="opacity-60">Entry_ID: 7708CD</span>
          </div>

          <div className="p-8 md:p-20">
            <h2 className="text-6xl md:text-8xl font-black text-vhl-lead uppercase leading-[0.8] mb-10 tracking-tighter">
              The Aesthetic <br/>
              Of <span className="text-vhl-maroon">Containment</span>
            </h2>
            
            <div className="max-w-2xl space-y-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-vhl-lead/90 antialiased">
                The Finnish prison design language is the foundation of this UI. 
                We prioritize <strong className="text-vhl-maroon">high contrast</strong> and 
                aggressive white space to ensure every record is legible.
              </p>
              
              <div className="border-l-8 border-vhl-maroon pl-8 py-4 bg-vhl-linen/30">
                <p className="italic text-vhl-lead/70 text-xl font-mono">
                  "Surroundings must mirror the outside world to maintain the human record."
                </p>
              </div>

              <div className="pt-10">
                <button className="group bg-vhl-lead text-vhl-linen px-10 py-5 font-mono font-black uppercase tracking-[0.2em] hover:bg-vhl-maroon transition-all flex items-center gap-4 active:scale-95">
                  View Case Files 
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Update Ticker */}
        <div className="mt-12 bg-vhl-lead text-vhl-grey p-3 font-mono text-[10px] uppercase flex gap-10 overflow-hidden whitespace-nowrap border-y-2 border-vhl-maroon">
          <span className="flex gap-2">● NEW_RECORD: Protocol_v4_Updated</span>
          <span className="flex gap-2">● SYSTEM_ALERT: Cell_666_Unlocked</span>
          <span className="flex gap-2">● LOG: 2026.03.24_Established</span>
          <span className="flex gap-2">● NEW_RECORD: Protocol_v4_Updated</span>
        </div>
      </main>

      {/* 4. THE FOOTER: Heavy wide-bar */}
      <footer className="bg-vhl-lead text-vhl-grey/40 p-16 mt-24 font-mono text-[10px] uppercase tracking-[0.4em] text-center border-t-8 border-vhl-maroon">
        Property of Vankila-Punk // No Unauthorized Distribution // March 2026
      </footer>
    </div>
  );
}