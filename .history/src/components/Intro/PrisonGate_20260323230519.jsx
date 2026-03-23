// src/components/Intro/PrisonGate.tsx
import { motion } from 'framer-motion';

interface PrisonGateProps {
  onComplete: () => void;
}

export const PrisonGate = ({ onComplete }: PrisonGateProps) => {
  const bars = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden pointer-events-none">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            delay: i * 0.08,
            ease: [0.45, 0, 0.55, 1],
          }}
          // Using your custom Tailwind colors
          className="flex-1 bg-prison-lead border-x border-zinc-800"
          onAnimationComplete={i === bars.length - 1 ? onComplete : undefined}
        />
      ))}
    </div>
  );
};