// src/components/Intro/SolitaryDoor.tsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface SolitaryDoorProps {
  onComplete: () => void;
}

// Rivet component for industrial detail
const Rivet = () => (
  <div className="w-3 h-3 rounded-full bg-black/40 shadow-inner" />
);

export const SolitaryDoor = ({ onComplete }: SolitaryDoorProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Initialize the sound on mount
    audioRef.current = new Audio("/gate-clank.mp3");
    audioRef.current.volume = 0.5;

    // 2. Play immediately. If the browser blocks it, it's okay.
    // The attempt registers it.
    audioRef.current.play().catch(() => {
      console.log("Audio waiting for user interaction.");
    });
  }, []);

  const handleAnimationStart = () => {
    // 3. Try playing again on animation start as a fallback
    audioRef.current?.play().catch(() => {});
  };

  return (
    // THE FRAME: Essential for 3D depth (perspective)
    <div className="fixed inset-0 z-50 flex overflow-hidden [perspective:1800px] bg-transparent pointer-events-none">
      {/* THE DOOR: A heavy steel plate using VHL-Grey */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -110 }} // Swing wide wide
        onAnimationStart={handleAnimationStart} // Try sound play
        onAnimationComplete={onComplete}
        transition={{
          duration: 3.5, // Slow, heavy move
          delay: 0.5, // A pause for suspense
          // Custom Bezier for overcoming inertia: slow start, deliberate swing, heavy slow down
          ease: [0.65, 0, 0.35, 1],
        }}
        // origin-left creates the hinge on the left side
        className="absolute inset-0 bg-vhl-grey border-l-[40px] border-y-[1px] border-vhl-lead origin-left relative shadow-2xl"
      >
        {/* Judas Eye (Spyhole) with Sliding Cover Detail */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-[12px] border-vhl-lead bg-vhl-lead shadow-[8px_8px_16px_0px_rgba(0,0,0,0.5)]">
          <div className="w-full h-full rounded-full border-4 border-vhl-lead shadow-inner flex items-center justify-center relative overflow-hidden">
            {/* The actual view (revealing blog content inside the circle) */}
            <div className="w-12 h-12 bg-transparent rounded-full border-2 border-vhl-lead" />

            {/* The sliding cover plate (VHL-Lead) */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-vhl-lead border-r-4 border-black/20"
            />
          </div>
        </div>

        {/* Industrial Detailing: Rivets and Plate Seams */}
        <div className="absolute inset-10 flex flex-col justify-between items-end border-r-2 border-vhl-lead/30 py-20 pr-10">
          <Rivet />
          <Rivet />
          <div className="h-0.5 w-60 bg-vhl-lead/40" />
          <Rivet />
          <Rivet />
        </div>

        {/* Thick Door Edge Highlight (to make it look thick when rotating) */}
        <div className="absolute top-0 right-0 h-full w-[2px] bg-black/5" />
      </motion.div>
    </div>
  );
};
