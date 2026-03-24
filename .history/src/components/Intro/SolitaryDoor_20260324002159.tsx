// src/components/Intro/SolitaryDoor.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // 1. Play audio (now allowed because of user click)
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current.play();
    // 2. Start the door animation
    setIsUnlocked(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-zinc-950 flex items-center justify-center [perspective:1500px]">
      {/* INITIAL ACCESS SCREEN (To trigger audio) */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.button
            exit={{ opacity: 0 }}
            onClick={handleStart}
            className="z-[1001] bg-vhl-maroon text-vhl-linen px-10 py-5 font-mono font-black uppercase tracking-[0.3em] border-4 border-vhl-lead shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-red-800 transition-colors"
          >
            Request Access_
          </motion.button>
        )}
      </AnimatePresence>

      {/* THE DOOR */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={isUnlocked ? { rotateY: -110 } : { rotateY: 0 }}
        transition={{ duration: 3.5, delay: 0.5, ease: [0.7, 0, 0.2, 1] }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }}
        className="metal-grain absolute inset-0 bg-vhl-grey border-l-[50px] border-vhl-lead relative flex flex-col shadow-[50px_0_100px_rgba(0,0,0,0.8)]"
      >
        {/* Horizontal Grooves */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 70px, rgba(0,0,0,0.8) 70px, rgba(0,0,0,0.8) 72px)",
          }}
        />

        {/* STENCILED 666 */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 font-mono text-7xl font-black text-black/40 mix-blend-multiply italic">
          666
        </div>

        {/* THE MAIL SLOT (Animated) */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-56 h-20 bg-vhl-lead border-4 border-zinc-800 p-1">
          <motion.div
            animate={isUnlocked ? { rotateX: -80 } : { rotateX: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ originY: 0 }}
            className="w-full h-full bg-vhl-grey border-2 border-vhl-lead shadow-lg flex items-center justify-center"
          >
            <div className="w-12 h-1 bg-black/20 rounded-full" />
          </motion.div>
        </div>

        {/* JUDAS EYE (Spyhole) */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-48 h-32 bg-vhl-grey border-4 border-vhl-lead shadow-2xl flex flex-col">
          <div className="w-full h-4 bg-vhl-lead" />
          <div className="flex-1 w-full bg-zinc-900 border-inner flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]" />
          </div>
        </div>

        {/* HEAVY HARDWARE */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-10 h-96 bg-zinc-800 rounded-full border-r-8 border-white/5 shadow-2xl relative">
            <div className="absolute -top-4 -left-4 w-20 h-10 bg-vhl-lead border-2 border-zinc-700 shadow-md" />
            <div className="absolute -bottom-4 -left-4 w-20 h-10 bg-vhl-lead border-2 border-zinc-700 shadow-md" />
          </div>
        </div>

        {/* DOOR EDGE THICKNESS */}
        <div className="absolute inset-y-0 right-0 w-10 bg-black/60 shadow-inner" />
      </motion.div>

      {/* REVEAL TEXT */}
      <div className="absolute inset-0 -z-10 bg-zinc-950 flex items-center justify-center">
        <span className="font-mono text-vhl-maroon animate-pulse tracking-tighter">
          CELL_UNLOCKED // ENTERING...
        </span>
      </div>
    </div>
  );
};
