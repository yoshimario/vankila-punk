import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Activity, ArrowRight, Lock, Eye } from "lucide-react";

// --- THE SOLITARY DOOR COMPONENT ---
// Integrated here to prevent "Module Not Found" errors
function SolitaryDoor({ onComplete }: { onComplete: () => void }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // Triggers the mechanical clank - Ensure gate-clank.mp3 is in your /public folder
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current
      .play()
      .catch(() =>
        console.log("Audio skipped: User must click first or file missing."),
      );
    setIsUnlocked(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#09090b] flex items-center justify-center [perspective:2500px] overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1.5 } }} // Fade out the darkness when done
    >
      {/* 1. ACCESS PROMPT: Solves the browser audio block */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 z-[10001] flex items-center justify-center bg-black/60 backdrop-blur-md"
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

      {/* 2. THE HEAVY DOOR: 7-Second Heavy Swing Logic */}
      <motion.div
        initial={{ rotateY: 0, opacity: 1 }}
        animate={
          isUnlocked
            ? {
                rotateY: -160, // Swings completely behind the user's perspective
                opacity: [1, 1, 1, 0], // Stays solid for the majority of the swing
              }
            : { rotateY: 0 }
        }
        transition={{
          duration: 7, // Heavy industrial speed
          delay: 0.2,
          ease: [0.45, 0, 0.2, 1], // Custom inertia curve
          opacity: { times: [0, 0.85, 0.95, 1], duration: 7 }, // Fades only at the very end
        }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }} // Hinge locked to the far left
        className="metal-grain absolute inset-0 w-full h-full bg-[#94a3b8] border-l-[65px] border-[#18181b] relative flex flex-col shadow-[80px_0_150px_rgba(0,0,0,1)]"
      >
        {/* Visual Details (Grain/Grooves) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 78px, #000 78px, #000 80px)",
          }}
        />

        {/* Inmate Number 666 */}
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

        {/* Door Thickness Edge */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-black/30 shadow-inner" />
      </motion.div>

      {/* 3. LOADING TEXT (Visible during the swing) */}
      <div className="absolute inset-0 -z-10 bg-[#09090b] flex flex-col items-center justify-center">
        <Activity className="text-[#7f1d1d] animate-spin mb-4" size={48} />
        <span className="font-mono text-[#94a3b8] text-xs tracking-[0.6em] animate-pulse uppercase">
          Initiating_VHL_Read_Protocol...
        </span>
      </div>
    </motion.div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function App() {
  const [isEntryComplete, setEntryComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans flex flex-col overflow-x-hidden selection:bg-[#7f1d1d] selection:text-white">
      {/* The AnimatePresence prevents the door from snapping out of existence */}
      <AnimatePresence>
        {!isEntryComplete && (
          <SolitaryDoor
            key="intro-door"
            onComplete={() => setEntryComplete(true)}
          />
        )}
      </AnimatePresence>

      {/* --- THE MAIN SITE CONTENT --- */}
      <header className="bg-[#7f1d1d] text-[#f1f5f9] p-6 border-b-8 border-[#18181b] flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <ShieldAlert size={32} className="text-[#94a3b8]" />
          <h1 className="font-mono font-black text-2xl uppercase italic tracking-tighter">
            Vankila-Punk // Registry
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[#f1f5f9]/60">
          <span className="flex items-center gap-2">
            <Activity size={14} className="animate-pulse text-green-400" />{" "}
            SYSTEM_LIVE
          </span>
          <span className="border-l border-[#f1f5f9]/20 pl-4 uppercase">
            Unit: Solitary_666
          </span>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto w-full p-6 md:p-12 lg:pt-24">
        <section className="bg-white border-[8px] border-[#18181b] shadow-[24px_24px_0px_0px_rgba(24,24,27,1)] overflow-hidden">
          <div className="bg-[#94a3b8] p-4 border-b-4 border-[#18181b] font-mono text-[11px] font-black uppercase text-[#18181b] flex justify-between">
            <span>Access_Level: General_Registry</span>
            <span>Ref_ID: VHL-7708CD</span>
          </div>

          <div className="p-8 md:p-20">
            <h2 className="text-5xl md:text-8xl font-black text-[#18181b] uppercase leading-[0.8] mb-12 tracking-tighter">
              The Aesthetic <br />
              Of{" "}
              <span className="text-[#7f1d1d] underline decoration-[12px]">
                Containment
              </span>
            </h2>

            <div className="max-w-2xl space-y-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#18181b]/90 antialiased">
                The Finnish prison design language is the foundation of this UI.
                We prioritize high contrast and institutional clarity to ensure
                the record is undeniable.
              </p>

              <div className="border-l-8 border-[#7f1d1d] pl-8 py-4 bg-[#f1f5f9]">
                <p className="italic text-[#18181b]/70 text-xl font-mono">
                  "Design is not a decoration; it is a controlled environment."
                </p>
              </div>

              <div className="pt-8">
                <button className="group bg-[#18181b] text-[#f1f5f9] px-10 py-5 font-mono font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-[#7f1d1d] transition-all active:scale-95">
                  Access Case Files
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#18181b] text-[#94a3b8]/40 p-16 mt-24 font-mono text-[10px] uppercase tracking-[0.5em] text-center border-t-8 border-[#7f1d1d]">
        Property of Vankila-Punk // Authorized Registry // 2026.03.24
      </footer>
    </div>
  );
}
