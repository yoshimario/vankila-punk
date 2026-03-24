// src/components/Intro/SolitaryDoor.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current
      .play()
      .catch(() => console.log("Audio file missing in public/ folder"));
    setIsUnlocked(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-zinc-950 flex items-center justify-center [perspective:2000px] overflow-hidden">
      {!isUnlocked && (
        <motion.button
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={handleStart}
          className="z-[1001] bg-vhl-maroon text-vhl-linen px-10 py-5 font-mono font-black uppercase tracking-[0.3em] border-4 border-vhl-lead shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-red-800 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Request Access_
        </motion.button>
      )}

      <motion.div
        initial={{ rotateY: 0 }}
        animate={isUnlocked ? { rotateY: -115 } : { rotateY: 0 }}
        transition={{ duration: 3.2, delay: 0.2, ease: [0.7, 0, 0.2, 1] }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }}
        className="metal-grain absolute inset-0 w-full h-full bg-vhl-grey border-l-[60px] border-vhl-lead relative flex flex-col shadow-[60px_0_100px_rgba(0,0,0,0.9)]"
      >
        {/* Grooves & Detail */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 78px, #000 78px, #000 80px)",
          }}
        />

        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 font-mono text-8xl font-black text-black/20 mix-blend-multiply italic select-none">
          666
        </div>

        {/* The Judas Eye Hatch */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-40 h-56 bg-vhl-grey border-4 border-vhl-lead shadow-2xl flex flex-col p-1">
          <div className="w-full h-3 bg-red-900 mb-1" />
          <div className="flex-1 bg-zinc-900 border-2 border-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
          </div>
        </div>

        {/* Mail Slot */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-64 h-24 bg-vhl-lead p-1">
          <div className="w-full h-full bg-vhl-grey border-2 border-vhl-lead flex items-center justify-center">
            <div className="w-20 h-2 bg-black/20 rounded-full" />
          </div>
        </div>

        {/* Handle */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2">
          <div className="w-12 h-[500px] bg-zinc-800 rounded-full border-r-8 border-white/5 shadow-2xl" />
        </div>
      </motion.div>
    </div>
  );
};
