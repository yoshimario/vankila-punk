import { motion } from "framer-motion";

export const PrisonBars = ({ onComplete }: { onComplete: () => void }) => {
  const bars = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 z-50 flex pointer-events-none overflow-hidden">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            delay: i * 0.05,
            ease: [0.45, 0, 0.55, 1],
          }}
          className="flex-1 bg-vhl-lead border-x border-zinc-800"
          onAnimationComplete={i === bars.length - 1 ? onComplete : undefined}
        />
      ))}
    </div>
  );
};
