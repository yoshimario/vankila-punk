import { motion } from 'framer-motion';

export const PrisonBars = ({ onComplete }: { onComplete: () => void }) => {
  // 15 bars for a dense, high-security look
  const bars = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 z-50 flex pointer-events-none overflow-hidden bg-transparent">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1.4,
            delay: i * 0.04, // Staggered "wave" effect
            ease: [0.22, 1, 0.36, 1], // "Heavy Hydraulic" easing
          }}
          // Dark lead color with a 'shine' border on the right to look like a bar
          className="flex-1 bg-vhl-lead border-r-4 border-white/5 relative"
          onAnimationComplete={i === bars.length - 1 ? onComplete : undefined}
        >
          {/* Subtle metallic reflection detail */}
          <div className="absolute inset-y-0 left-1 w-1 bg-white/5" />
        </motion.div>
      ))}
    </div>
  );
};