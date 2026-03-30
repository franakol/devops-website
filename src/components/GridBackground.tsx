"use client";

import { motion } from "framer-motion";

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 grid-pattern opacity-[0.25]"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)',
        }}
      />
      
      {/* Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-accent-primary/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-accent-secondary/20 blur-[120px]"
      />
    </div>
  );
};
