// src/components/Intro/SolitaryDoor.tsx
import { motion } from "framer-motion";

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  return (
    // THE STAGE: Must be fixed, full screen, and have high perspective
    <div className="fixed inset-0 z-[999] bg-zinc-950 flex overflow-hidden [perspective:1200px] [transform-style:preserve-3d]">
      <motion.div
        // START: Closed, facing the user directly
        initial={{ rotateY: 0 }}
        // END: Swung open to the left
        animate={{ rotateY: -105 }}
        transition={{
          duration: 3,
          delay: 1.2, // Pause for "confinement" feel
          ease: [0.7, 0, 0.2, 1], // Heavy mechanical curve
        }}
        onAnimationComplete={onComplete}
        // CRITICAL: This anchors the "hinge" to the left edge
        style={{ originX: 0 }}
        className="w-full h-full bg-vhl-grey border-l-[40px] border-vhl-lead relative shadow-[50px_0_100px_rgba(0,0,0,0.8)] flex flex-col"
      >
        {/* Horizontal Grooves (The "Finnish Solitary" look) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 98%, rgba(0,0,0,0.4) 98%)",
            backgroundSize: "100% 70px",
          }}
        />

        {/* The Judas Eye / Hatch Box */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-32 h-40 bg-vhl-lead border-4 border-zinc-800 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] flex flex-col p-1">
          <div className="w-full h-2 bg-red-700 mb-2" />
          <div className="flex-1 w-full bg-zinc-900 border-2 border-black" />
        </div>

        {/* Heavy Mechanical Pull Handle */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2">
          <div className="w-8 h-80 bg-zinc-800 rounded-full border-r-4 border-white/5 relative shadow-2xl">
            <div className="absolute -top-4 -left-4 w-16 h-8 bg-vhl-lead border border-zinc-700 shadow-md" />
            <div className="absolute -bottom-4 -left-4 w-16 h-8 bg-vhl-lead border border-zinc-700 shadow-md" />
          </div>
        </div>

        {/* Side Edge of the door (Visible when it opens) */}
        <div className="absolute inset-y-0 right-0 w-6 bg-black/40 shadow-inner" />
      </motion.div>

      {/* Behind the door (The "darkness" of the prison wall) */}
      <div className="absolute inset-0 -z-10 bg-zinc-950" />
    </div>
  );
};
