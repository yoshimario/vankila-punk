import { motion } from "framer-motion";

export function SolitaryDoor({ onComplete }: { onComplete: () => void }) {
  // Ultra-heavy hydraulic timing for massive weight
  const doorTransition = {
    duration: 2.2,
    ease: [0.7, 0, 0.1, 1],
    delay: 0.3,
  };

  return (
    <div className="fixed inset-0 z-[20000] bg-black flex items-center justify-center perspective-[2500px] overflow-hidden select-none">
      {/* THE CONTAINER: Darker Overall Palette */}
      <div className="relative w-full h-full bg-[#121416] flex items-center justify-center">
        {/* LEFT FRAME DETAIL: Locked & Numbered (Dark Charcoal) */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-[#0a0b0c] border-r-[12px] border-black flex flex-col pt-12 pl-8 z-10 shadow-3xl">
          {/* Numbers: Specific '42 07' style, stacked */}
          <div className="flex flex-col font-sans font-black text-white text-5xl md:text-7xl leading-[0.85] opacity-80 mb-20 tracking-tighter">
            <span>42</span>
            <span>07</span>
          </div>

          {/* MECHANICAL LOCKS: Heavy Duty (Bottom stack) */}
          <div className="mt-auto mb-32 flex flex-col gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-zinc-900 border-4 border-black shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center"
              >
                <div className="w-5 h-1.5 bg-black/60 rotate-90" />
              </div>
            ))}
          </div>
        </div>

        {/* THE DOOR: Dark Slate-Black // Widened // Massive Planks */}
        <motion.div
          initial={{ rotateY: 0 }}
          exit={{
            rotateY: -95,
            x: "-12%",
            transition: doorTransition,
          }}
          style={{ transformOrigin: "left" }}
          // CHANGED: Widened from w-[75%] to w-[88%] for massive feel
          className="relative w-[88%] h-[92%] bg-[#121416] border-[6px] border-black shadow-[35px_0_70px_rgba(0,0,0,1)]
            /* CHANGED: Massive Planks, not fine ribs. Only ~6 total panels. */
            bg-[linear-gradient(transparent_0%,transparent_calc(100%-6px),rgba(0,0,0,0.7)_calc(100%-6px),rgba(0,0,0,0.9)_100%)]
            bg-[length:100%_160px]
            flex flex-col items-center justify-center"
        >
          {/* TOP STATUS MODULE: Emergency State */}
          <div className="absolute top-8 left-8 flex items-center gap-4 bg-black/40 p-3 border-2 border-black/20 shadow-inner">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_red]" />
            <span className="font-mono text-[9px] text-white/40 font-bold uppercase tracking-widest">
              Cell_Protocol_666
            </span>
          </div>

          {/* Peephole Cover: Simplified circular plate */}
          <div className="absolute top-[35%] right-16 w-16 h-16 rounded-full bg-black border-[6px] border-[#0a0b0c] shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-900/20" />
          </div>

          {/* CHANGED: Massive Grab Handle // Wider and Fuller */}
          <div className="absolute bottom-24 left-16 flex flex-col items-center z-10 group/handle">
            <div
              className="w-6 h-96 bg-[#1f2937] border-x-[4px] border-black rounded-full relative shadow-[8px_0_15px_rgba(0,0,0,0.6)]
               hover:bg-zinc-800 transition-colors"
            >
              {/* Thick End Caps */}
              <div className="absolute -inset-x-2.5 top-0 h-6 bg-black rounded-t-full border-b-2 border-zinc-700" />
              <div className="absolute -inset-x-2.5 bottom-0 h-6 bg-black rounded-b-full border-t-2 border-zinc-700" />
            </div>
            <span className="font-mono text-[8px] mt-4 opacity-10 group-hover/handle:opacity-40 transition-opacity uppercase">
              HKI_CORRECTIVE
            </span>
          </div>

          {/* INTERACTION UNIT: The Manual Override */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="flex flex-col items-center gap-8 mt-20"
          >
            <h4 className="font-sans font-black text-white text-5xl uppercase tracking-tighter leading-none select-none opacity-80">
              CONTAINMENT
              <br />
              666
            </h4>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="bg-cell-mustard text-black px-12 py-6 border-[6px] border-black font-black uppercase shadow-[15px_15px_0px_black] hover:bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[10px_10px_0px_black] transition-all cursor-pointer z-50 text-sm tracking-[0.2em] font-black"
            >
              Disengage_Hydraulics
            </motion.button>
          </motion.div>

          {/* HINGE SLOTS: Left Edge Hardware */}
          <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around py-16">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 w-full bg-black/60 border-r border-white/5"
              />
            ))}
          </div>
        </motion.div>

        {/* BACKGROUND ROOM: Glimpse into the terminal */}
        <div className="absolute inset-0 z-[-1] bg-[#050505] flex items-center justify-center">
          <div className="w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/poured-concrete.png')]" />
          <div className="text-red-950 font-mono text-xl md:text-3xl animate-pulse font-black uppercase tracking-tighter opacity-10">
            Handshake_Active... // handShake_active... // handShake_active...
          </div>
        </div>
      </div>
    </div>
  );
}
