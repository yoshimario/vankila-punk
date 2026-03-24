import { motion } from "framer-motion";

export const PrisonBars = ({ onComplete }: { onComplete: () => void }) => {
  // Fewer, thicker bars feel more "heavy duty" than many thin ones
  const bars = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-50 flex pointer-events-none overflow-hidden bg-transparent">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            // Use Spring for "Weight"
            type: "spring",
            stiffness: 40, // Lower stiffness = heavier feel
            damping: 15, // Controls the "bounce"
            mass: 2, // Makes the bars feel like solid iron
            delay: i * 0.12, // Slow, deliberate staggered start
          }}
          className="relative flex-1 bg-vhl-lead border-x-4 border-black/20"
          onAnimationComplete={i === bars.length - 1 ? onComplete : undefined}
        >
          {/* A "Cylindrical" highlight to make them look round/3D */}
          <div className="absolute inset-y-0 left-1/2 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Mechanical "Rust/Wear" detail at the bottom of each bar */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
};
