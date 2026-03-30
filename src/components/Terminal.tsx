"use client";

import React from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  commands: { text: string; delay: number; color?: string }[];
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ commands, className }) => {
  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 bg-[#0D1117]/80 backdrop-blur-md shadow-2xl ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <div className="ml-2 text-xs font-medium text-white/40">zsh</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm sm:text-base">
        {commands.map((cmd, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: cmd.delay, duration: 0.3 }}
            className="mb-1.5 flex gap-3"
          >
            <span className="text-accent-primary shrink-0">$</span>
            <span style={{ color: cmd.color || "inherit" }}>{cmd.text}</span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-[1.5rem] mt-1 h-5 w-2 bg-accent-primary"
        />
      </div>
    </div>
  );
};
