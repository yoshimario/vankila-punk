import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Activity, Lock } from "lucide-react";

export default function App() {
  // FORCE TO FALSE: This ensures the door starts closed
  const [isEntryComplete, setEntryComplete] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current
      .play()
      .catch(() => console.log("Audio file missing in /public"));
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans overflow-hidden">
      {/* THE DOOR LAYER (Forced to the very top) */}
      <AnimatePresence>
        {!isEntryComplete && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#09090b] flex items-center justify-center [perspective:2500px]"
            exit={{ opacity: 0 }} // Smooth transition to the site
          >
            {/* 1. ACCESS BUTTON */}
            {!isUnlocked && (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handleStart}
                className="z-[10001] bg-[#7f1d1d] text-[#f1f5f9] px-12 py-6 font-mono font-black uppercase tracking-[0.4em] border-4 border-[#18181b] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-red-800 transition-all active:translate-y-1"
              >
                Request Access_
              </motion.button>
            )}

            {/* 2. THE DOOR SLAB */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={isUnlocked ? { rotateY: -150 } : { rotateY: 0 }}
              transition={{ duration: 5, ease: [0.65, 0, 0.35, 1] }}
              onAnimationComplete={() => setEntryComplete(true)}
              style={{ originX: 0 }}
              className="absolute inset-0 w-full h-full bg-[#94a3b8] border-l-[60px] border-[#18181b] shadow-[50px_0_150px_rgba(0,0,0,1)]"
            >
              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 font-mono text-[100px] font-black text-black/10 select-none italic">
                666
              </div>
              <div className="absolute top-1/2 right-20 -translate-y-1/2 w-12 h-[500px] bg-zinc-800 rounded-full border-r-4 border-white/5 shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- THE ACTUAL WEBSITE (Hidden under the door) --- */}
      <header className="bg-[#7f1d1d] text-[#f1f5f9] p-5 border-b-8 border-[#18181b]">
        <h1 className="font-mono font-black text-2xl uppercase italic">
          Vankila-Punk // Registry
        </h1>
      </header>
      <main className="p-10 max-w-4xl mx-auto">
        <div className="bg-white border-4 border-[#18181b] p-10 shadow-[12px_12px_0px_0px_#18181b]">
          <h2 className="text-5xl font-black uppercase mb-4">
            Entry Successful
          </h2>
          <p className="text-xl">
            The solitary door protocol has been cleared.
          </p>
        </div>
      </main>
    </div>
  );
}
