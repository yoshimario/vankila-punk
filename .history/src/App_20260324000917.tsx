// src/App.tsx
import { useState } from "react";
import { SolitaryDoor } from "./components/Intro/SolitaryDoor"; // Ensure this matches your file name
import { Activity, ShieldAlert } from "lucide-react";

export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-vhl-linen font-sans overflow-x-hidden">
      {/* FIX: Use !isEntryComplete so it shows at the start */}
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      {/* The rest of your site... */}
      <header className="bg-vhl-maroon text-vhl-linen p-5 border-b-8 border-vhl-lead flex justify-between items-center">
        <h1 className="font-mono font-black text-2xl uppercase italic">
          Vankila-Punk
        </h1>
        <Activity className="animate-pulse text-green-400" size={20} />
      </header>

      <main className="max-w-4xl mx-auto p-8 pt-20">
        <div className="bg-white border-4 border-vhl-lead p-10 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]">
          <h2 className="text-6xl font-black uppercase leading-none mb-6">
            The Aesthetic of Containment
          </h2>
          <p className="text-xl leading-relaxed">
            System operational. Reading protocols engaged.
          </p>
        </div>
      </main>
    </div>
  );
}
