"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Share2 } from "lucide-react";

export const CommandGenerator = () => {
  const [day, setDay] = useState("friday");
  const [copied, setCopied] = useState(false);

  const command = `$ deploy --day ${day}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-24 bg-foreground-light/[0.03] dark:bg-white/[0.02]">
      <div className="container mx-auto max-w-4xl border border-foreground-light/10 dark:border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden bg-background-light/50 dark:bg-transparent transition-colors">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Share2 size={120} className="text-accent-primary" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-foreground-light dark:text-white">Commit it. Ship it. Share it.</h2>
          <p className="text-foreground-light/40 dark:text-white/40 mb-8 max-w-md">
            Generate your deployment snippet and let the world know you trust your pipelines.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {["monday", "wednesday", "friday"].map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`px-4 py-2 rounded-lg font-mono text-base border transition-all ${
                  day === d 
                    ? "bg-accent-primary border-accent-primary text-background-dark font-bold" 
                    : "bg-foreground-light/5 dark:bg-white/5 border-foreground-light/10 dark:border-white/10 text-foreground-light/60 dark:text-white/60 hover:border-foreground-light/20 dark:hover:border-white/20"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="relative group">
            <div className="bg-[#0D1117] border border-white/10 rounded-xl p-6 font-mono text-lg flex items-center justify-between overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-accent-primary font-bold">$</span>
                <span className="text-[#E6EDF3]">deploy --day</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={day}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="text-accent-primary font-bold"
                  >
                    {day}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-accent-primary hover:bg-white/10 transition-all active:scale-90"
                title="Copy command"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              </button>
            </div>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 right-0 text-sm font-bold text-accent-primary"
              >
                Snippet copied to clipboard!
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
