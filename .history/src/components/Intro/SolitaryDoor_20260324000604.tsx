// src/components/Intro/SolitaryDoor.tsx
import { motion } from "framer-motion";

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex overflow-hidden [perspective:2000px] bg-vhl-lead pointer-events-none">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -105 }} // Swinging open
        transition={{
          duration: 2.8,
          delay: 0.8, // Wait a second for the "clank" feel
          ease: [0.7, 0, 0.2, 1], // Heavy mechanical curve
        }}
        onAnimationComplete={onComplete}
        // origin-left puts the hinges on the left side
        className="relative w-full h-full bg-vhl-grey origin-left border-l-[30px] border-vhl-lead shadow-[50px_0_100px_rgba(0,0,0,0.5)] flex flex-col"
        style={{
          // This creates the horizontal paneling from your photo
          backgroundImage: `linear-gradient(to bottom, transparent 95%, rgba(0,0,0,0.2) 95%)`,
          backgroundSize: "100% 80px",
        }}
      >
        {/* THE HATCH / WINDOW (Top center) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-32 h-40 bg-vhl-lead border-4 border-zinc-800 shadow-inner flex flex-col items-center p-2">
          <div className="w-full h-1 bg-red-600 mb-2" />{" "}
          {/* Small red indicator */}
          <div className="flex-1 w-full bg-zinc-900 border-2 border-black" />
        </div>

        {/* THE HANDLE & LOCK (Right side) */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 flex flex-col gap-10 items-center">
          {/* Main vertical pull handle */}
          <div className="w-6 h-64 bg-zinc-800 rounded-full border-r-4 border-white/10 shadow-lg relative">
            <div className="absolute -top-4 -left-2 w-10 h-4 bg-zinc-900 rounded-sm" />
            <div className="absolute -bottom-4 -left-2 w-10 h-4 bg-zinc-900 rounded-sm" />
          </div>

          {/* Keyhole / Lock box */}
          <div className="w-20 h-32 bg-vhl-lead border-2 border-zinc-700 shadow-xl flex items-center justify-center">
            <div className="w-4 h-8 bg-black rounded-full" />
          </div>
        </div>

        {/* DOOR THICKNESS (Revealed when rotating) */}
        <div className="absolute inset-y-0 right-0 w-[10px] bg-black/20" />
      </motion.div>

      {/* BACKGROUND WALL (Visible as door opens) */}
      <div className="absolute inset-0 -z-10 bg-zinc-900" />
    </div>
  );
};
