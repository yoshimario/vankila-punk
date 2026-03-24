import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Activity, ArrowRight, Lock } from "lucide-react";

// --- THE SOLITARY DOOR COMPONENT ---
function SolitaryDoor({ onComplete }: { onComplete: () => void }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // Audio trigger - Place gate-clank.mp3 in /public/
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current.play().catch(() => console.log("Audio blocked."));
    setIsUnlocked(true);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#09090b] flex items-center justify-center [perspective:2500px] overflow-hidden">
      {/* 1. ACCESS PROMPT */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="absolute inset-0 z-[10001] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <button
              onClick={handleStart}
              className="bg-[#7f1d1d] text-[#f1f5f9] px-12 py-6 font-mono font-black uppercase tracking-[0.4em] border-4 border-[#18181b] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-red-800 transition-all active:translate-y-1"
            >
              Request Access_
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE HEAVY DOOR */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={
          isUnlocked
            ? {
                rotateY: -150,
                opacity: [1, 1, 1, 0],
              }
            : { rotateY: 0 }
        }
        transition={{
          duration: 6, // Heavy, slow swing
          ease: [0.45, 0, 0.2, 1],
          opacity: { times: [0, 0.9, 0.98, 1], duration: 6 },
        }}
        // THE FIX: Only call onComplete if the door actually unlocked and swung open
        onAnimationComplete={() => {
          if (isUnlocked) {
            onComplete();
          }
        }}
        style={{ originX: 0 }}
        className="absolute inset-0 w-full h-full bg-[#94a3b8] border-l-[60px] border-[#18181b] relative flex flex-col shadow-[80px_0_150px_rgba(0,0,0,1)]"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 78px, #000 78px, #000 80px)",
          }}
        />

        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 font-mono text-[100px] font-black text-black/10 italic select-none">
          666
        </div>

        {/* Judas Eye */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-44 h-56 bg-[#94a3b8] border-4 border-[#18181b] shadow-2xl flex flex-col p-1">
          <div className="w-full h-3 bg-red-950 mb-1" />
          <div className="flex-1 bg-zinc-900 border-2 border-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" />
          </div>
        </div>

        {/* Handle */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2">
          <div className="w-14 h-[500px] bg-zinc-800 rounded-full border-r-8 border-white/5 shadow-2xl" />
        </div>
      </motion.div>

      {/* 3. BACKGROUND BEHIND DOOR */}
      <div className="absolute inset-0 -z-10 bg-[#09090b] flex flex-col items-center justify-center">
        <Activity className="text-[#7f1d1d] animate-spin mb-4" size={40} />
        <span className="font-mono text-[#94a3b8] text-[10px] tracking-[0.5em] animate-pulse">
          ESTABLISHING_VHL_LINK...
        </span>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans flex flex-col overflow-x-hidden">
      <AnimatePresence>
        {!isEntryComplete && (
          <motion.div key="intro" exit={{ opacity: 0 }}>
            <SolitaryDoor onComplete={() => setEntryComplete(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-[#7f1d1d] text-[#f1f5f9] p-6 border-b-8 border-[#18181b] flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={28} className="text-[#94a3b8]" />
          <h1 className="font-mono font-black text-2xl uppercase italic tracking-tighter">
            Vankila-Punk // Registry
          </h1>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-20">
        <section className="bg-white border-[8px] border-[#18181b] shadow-[24px_24px_0px_0px_rgba(24,24,27,1)]">
          <div className="bg-[#94a3b8] p-4 border-b-4 border-[#18181b] font-mono text-xs font-black uppercase text-[#18181b]">
            Protocol: Solitary_666_Active
          </div>
          <div className="p-10 md:p-20">
            <h2 className="text-5xl md:text-8xl font-black text-[#18181b] uppercase leading-[0.8] mb-8">
              The Aesthetic <br />
              Of <span className="text-[#7f1d1d]">Containment</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#18181b]/90 max-w-2xl">
              Access granted. The Finnish institutional design record is now
              available for review.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#18181b] text-[#94a3b8]/40 p-12 mt-20 font-mono text-[10px] uppercase tracking-[0.5em] text-center border-t-8 border-[#7f1d1d]">
        Property of Unit 666 // Authorized Access Only // 2026
      </footer>
    </div>
  );
}
