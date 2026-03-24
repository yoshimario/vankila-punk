import { motion } from "framer-motion";

export const SolitaryDoor = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 z-[999] bg-zinc-950 flex overflow-hidden [perspective:1500px] [transform-style:preserve-3d]">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -105 }}
        transition={{
          duration: 3.2,
          delay: 1.5,
          ease: [0.7, 0, 0.2, 1], // Industrial weight curve
        }}
        onAnimationComplete={onComplete}
        style={{ originX: 0 }}
        className="w-full h-full bg-vhl-grey border-l-[45px] border-vhl-lead relative flex flex-col shadow-[40px_0_80px_rgba(0,0,0,0.7)]"
      >
        {/* THE STEEL SURFACE: Horizontal Grooves + Metallic Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 78px, rgba(0,0,0,0.5) 78px, rgba(0,0,0,0.5) 80px)",
          }}
        />

        {/* INMATE NUMBER 666 (Stamped look) */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 font-mono text-5xl font-black text-vhl-lead/80 tracking-widest">
          666
        </div>

        {/* THE MAIN HATCH (Judas Eye) */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-64 h-48 bg-vhl-grey border-4 border-vhl-lead shadow-[inset_0_2px_10px_rgba(0,0,0,0.4),10px_10px_20px_rgba(0,0,0,0.3)] flex flex-col items-center">
          {/* Top Latch Plate */}
          <div className="w-full h-6 bg-vhl-lead flex justify-center items-center gap-8">
            <div className="w-2 h-2 rounded-full bg-black/40" />
            <div className="w-2 h-2 rounded-full bg-black/40" />
          </div>
          {/* The Actual Hatch Cover */}
          <div className="mt-4 w-48 h-28 bg-vhl-lead border-2 border-zinc-800 shadow-inner flex items-center justify-center relative">
            <div className="w-4 h-4 rounded-full bg-zinc-900 border border-white/5" />
            {/* Small handle on the hatch */}
            <div className="absolute bottom-2 w-12 h-2 bg-zinc-800 rounded-full" />
          </div>
        </div>

        {/* MECHANICAL HARDWARE BLOCK (Right side) */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 flex flex-col gap-8">
          {/* Secondary Hatch / Mail Slot */}
          <div className="w-40 h-24 bg-vhl-grey border-2 border-vhl-lead shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-32 h-12 bg-vhl-lead rounded-sm" />
          </div>

          {/* Main Pull Handle (Thick Industrial Steel) */}
          <div className="relative h-80 w-10 flex flex-col items-center">
            <div className="absolute -top-4 w-16 h-4 bg-vhl-lead border border-zinc-700" />
            <div className="w-full h-full bg-zinc-800 rounded-full border-r-4 border-white/5 shadow-[5px_0_15px_rgba(0,0,0,0.4)]" />
            <div className="absolute -bottom-4 w-16 h-4 bg-vhl-lead border border-zinc-700" />
          </div>
        </div>

        {/* LOCK PLATES & KEYHOLE */}
        <div className="absolute right-40 top-[65%] w-24 h-32 bg-vhl-grey border-2 border-vhl-lead shadow-md flex items-center justify-center">
          <div className="w-6 h-10 bg-vhl-lead rounded-full" />
        </div>

        {/* DOOR CLOSER (Top) */}
        <div className="absolute top-4 left-20 w-80 h-12 bg-zinc-800 border-b-4 border-black/30 rounded-sm opacity-90" />

        {/* SIDE THICKNESS: Adds realism during rotation */}
        <div className="absolute inset-y-0 right-0 w-8 bg-black/40" />
      </motion.div>

      {/* REVEAL: The "Inner Cell" or darkness before the blog appears */}
      <div className="absolute inset-0 -z-10 bg-zinc-950 flex items-center justify-center">
        <div className="text-vhl-grey font-mono text-xs animate-pulse">
          ESTABLISHING CONNECTION...
        </div>
      </div>
    </div>
  );
};
