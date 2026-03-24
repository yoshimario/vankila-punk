import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // Ensure the audio file is in /public/gate-clank.mp3
    audioRef.current = new Audio('/gate-clank.mp3');
    audioRef.current.play().catch(() => console.log("Audio trigger failed - click 'Request Access'"));
    setIsUnlocked(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-zinc-950 flex items-center justify-center [perspective:2500px] overflow-hidden">
      
      {/* 1. INTERACTION OVERLAY (Ensures Audio Works) */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 z-[1001] flex items-center justify-center bg-black/20 backdrop-blur-sm"
          >
            <button
              onClick={handleStart}
              className="bg-vhl-maroon text-vhl-linen px-12 py-6 font-mono font-black uppercase tracking-[0.4em] border-4 border-vhl-lead shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-all"
            >
              Request Access_
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE DOOR (Heavy Gauge Steel) */}
      <motion.div
        initial={{ rotateY: 0, opacity: 1 }}
        animate={isUnlocked ? { 
          rotateY: -140, // Wider swing to clear the screen
          opacity: [1, 1, 0] // Fades out only at the very end of the swing
        } : { rotateY: 0 }}
        transition={{ 
          duration: 4.5, // Much slower, heavier swing
          delay: 0.3,
          ease: [0.45, 0, 0.2, 1], // Custom "Inertia" curve: slow start, heavy momentum
          opacity: { times: [0, 0.8, 1], duration: 4.5 } // Fade occurs in the last 20%
        }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }}
        className="metal-grain vhl-door-panels absolute inset-0 w-full h-full bg-vhl-grey border-l-[60px] border-vhl-lead relative flex flex-col shadow-[60px_0_120px_rgba(0,0,0,0.9)]"
      >
        {/* INMATE NUMBER 666 */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 font-mono text-8xl font-black text-black/20 mix-blend-multiply italic select-none">
          666
        </div>

        {/* JUDAS EYE BOX */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-44 h-56 bg-vhl-grey border-4 border-vhl-lead shadow-2xl flex flex-col p-1">
           <div className="w-full h-4 bg-red-900 mb-1 shadow-inner" />
           <div className="flex-1 bg-zinc-900 border-2 border-black flex items-center justify-center relative overflow-hidden">
              {/* Simulated scanline inside the eye */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-4 animate-scan" />
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" />
           </div>
        </div>

        {/* HEAVY ROUND HANDLE */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2">
           <div className="w-14 h-[550px] bg-zinc-800 rounded-full border-r-8 border-white/5 shadow-[10px_0_30px_rgba(0,0,0,0.6)]" />
        </div>

        {/* DOOR EDGE (The 'Thickness') */}
        <div className="absolute inset-y-0 right-0 w-12 bg-black/60 shadow-inner" />
      </motion.div>

      {/* 3. BACKGROUND BEHIND THE DOOR */}
      <div className="absolute inset-0 -z-10 bg-zinc-950 flex flex-col items-center justify