import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Activity, ArrowRight, Lock } from "lucide-react";

// --- THE SOLITARY DOOR (Internal Component for Speed) ---
function SolitaryDoor({ onComplete }: { onComplete: () => void }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // Attempt to play the clank - ensure gate-clank.mp3 is in /public/
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current
      .play()
      .catch(() => console.log("Sound blocked or file missing."));
    setIsUnlocked(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-[#09090b] flex items-center justify-center [perspective:2500px] overflow-hidden">
      {/* 1. ACCESS PROMPT */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 z-[1001] flex items-center justify-center bg-black/40 backdrop-blur-md"
          >
            <button
              onClick={handleStart}
              className="group bg-[#7f1d1d] text-[#f1f5f9] px-12 py-6 font-mono font-black uppercase tracking-[0.4em] border-4 border-[#18181b] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-red-800 transition-all flex items-center gap-4 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <Lock size={20} className="group-hover:animate-bounce" />
              Request Access_
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE DOOR (Heavy Swing Logic) */}
      <motion.div
        initial={{ rotateY: 0, opacity: 1 }}
        animate={
          isUnlocked
            ? {
                rotateY: -160, // Swings way past the 'camera'
                opacity: [1, 1, 1, 0], // Stays solid, then fades at the very end
              }
            : { rotateY: 0 }
        }
        transition={{
          duration: 5.5, // Much slower, intentional movement
          delay: 0.2,
          ease: [0.65, 0, 0.35, 1], // Custom 'Heavy Friction' easing
          opacity: { times: [0, 0.8, 0.9, 1], duration: 5.5 }, // Fades only in the last second
        }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }}
        className="absolute inset-0 w-full h-full bg-[#94a3b8] border-l-[65px] border-[#18181b] relative flex flex-col shadow-[80px_0_150px_rgba(0,0,0,1)]"
      >
        {/* Visual Details (Grain/Grooves) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 78px, #000 78px, #000 80px)",
          }}
        />

        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 font-mono text-[120px] font-black text-black/10 italic select-none">
          666
        </div>

        {/* Judas Eye Hatch */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-48 h-64 bg-[#94a3b8] border-4 border-[#18181b] shadow-2xl flex flex-col p-1">
          <div className="w-full h-4 bg-red-950 mb-1" />
          <div className="flex-1 bg-zinc-900 border-2 border-black flex items-center justify-center relative">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_12px_red]" />
          </div>
        </div>

        {/* Massive Industrial Handle */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2">
          <div className="w-16 h-[600px] bg-zinc-800 rounded-full border-r-8 border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.5)]" />
        </div>
      </motion.div>

      {/* 3. LOADING TEXT BEHIND DOOR */}
      <div className="absolute inset-0 -z-10 bg-[#09090b] flex flex-col items-center justify-center">
        <Activity className="text-[#7f1d1d] animate-spin mb-4" size={48} />
        <span className="font-mono text-[#94a3b8] text-xs tracking-[0.6em] animate-pulse">
          INITIATING_VHL_READ_PROTOCOL...
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
      {!isEntryComplete && (
        <SolitaryDoor onComplete={() => setEntryComplete(true)} />
      )}

      <header className="bg-[#7f1d1d] text-[#f1f5f9] p-6 border-b-8 border-[#18181b] flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={32} className="text-[#94a3b8]" />
          <h1 className="font-mono font-black text-2xl uppercase italic tracking-tighter">
            Vankila-Punk // Registry
          </h1>
        </div>
        <div className="font-mono text-[10px] bg-black/20 px-3 py-1 rounded">
          SYS_666_OK
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-24">
        <section className="bg-white border-[8px] border-[#18181b] shadow-[24px_24px_0px_0px_rgba(24,24,27,1)] overflow-hidden">
          <div className="bg-[#94a3b8] p-4 border-b-4 border-[#18181b] font-mono text-xs font-black uppercase text-[#18181b]">
            Protocol: Solitary_Confinement_Active
          </div>

          <div className="p-10 md:p-20">
            <h2 className="text-6xl md:text-8xl font-black text-[#18181b] uppercase leading-[0.8] mb-12">
              The Aesthetic <br />
              Of{" "}
              <span className="text-[#7f1d1d] underline decoration-[12px]">
                Containment
              </span>
            </h2>

            <p className="text-2xl font-medium leading-relaxed text-[#18181b] max-w-2xl mb-12">
              The door has opened. You are now inside the Vankilapunk record.
              The layout is designed for maximum clarity and institutional
              focus.
            </p>

            <button className="group bg-[#18181b] text-[#f1f5f9] px-10 py-5 font-mono font-black uppercase tracking-widest flex items-center gap-4 hover:bg-[#7f1d1d] transition-all">
              Access Full Log{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#18181b] text-[#94a3b8]/40 p-16 mt-20 font-mono text-[10px] uppercase tracking-[0.5em] text-center border-t-8 border-[#7f1d1d]">
        Property of Unit 666 // All Transitions Logged // 2026
      </footer>
    </div>
  );
}
