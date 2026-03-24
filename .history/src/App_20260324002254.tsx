import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor";
import { ShieldAlert, Activity } from "lucide-react"; // FileText removed from here

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans flex flex-col overflow-x-hidden">
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* The rest of your site code stays exactly the same as before */}
      <header className="bg-vhl-maroon text-vhl-linen p-4 border-b-8 border-vhl-lead flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={24} className="text-vhl-grey" />
          <h1 className="font-mono font-black text-xl uppercase italic">Vankila-Punk</h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-widest text-vhl-linen">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" /> System_Live
          </span>
          <span className="opacity-50">VHL_REF: 7708CD</span>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-20">
        <section className="bg-white border-4 border-vhl-lead shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] overflow-hidden">
          <div className="bg-vhl-grey p-3 border-b-4 border-vhl-lead flex justify-between font-mono text-[10px] font-black uppercase text-vhl-lead">
            <span>Access: General</span>
            <span>ID: 001.04</span>
          </div>
          <div className="p-8 md:p-16">
            <h2 className="text-5xl md:text-7xl font-black text-vhl-lead uppercase leading-[0.85] mb-8">
              The Aesthetic of <br/>
              <span className="text-vhl-maroon underline decoration-8">Containment</span>
            </h2>
            <p className="text-xl text-vhl-lead/90 leading-relaxed max-w-2xl">
              Readability focus: Using high contrast and a spacious layout. The Finnish prison design language is the foundation of this UI.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}