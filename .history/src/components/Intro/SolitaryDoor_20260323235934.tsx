// src/components/Intro/SolitaryDoor.tsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface SolitaryDoorProps {
  onComplete: () => void;
}

// Small detail component for industrial rivets
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
    // The attempt registers it so it can play during the animation.
    audioRef.current.play().catch(() => {
      console.log("Audio awaiting user interaction.");
    });
  }, []);

  const handleAnimationStart = () => {
    // 3. Try playing again on animation start as a fallback
    audioRef.current?.play().catch(() => {});
  };

  return (
    // THE FRAME: Essential for 3D depth. Uses [perspective:1800px]
    <div className="fixed inset-0 z-50 flex overflow-hidden [perspective:1800px] bg-transparent pointer-events-none">
      {/* THE DOOR: A heavy steel plate using VHL-Grey */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -110 }} // Swing wide-open 110 degrees
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
        {/* Judas Eye (Spyhole) Detail */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-[12px] border-vhl-lead bg-vhl-lead shadow-[8px_8px_16px_0px_rgba(0,0,0,0.5)]">
          <div className="w-full h-full rounded-full border-4 border-vhl-lead shadow-inner flex items-center justify-center">
            {/* The actual view (revealing content inside the circle) */}
            <div className="w-12 h-12 bg-transparent rounded-full border-2 border-vhl-lead" />
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
        <div className="absolute top-0 right-0 h-full w-[2px] bg-white/10" />
      </motion.div>
    </div>
  );
};
