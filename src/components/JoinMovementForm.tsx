"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const JoinMovementForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // ConvertKit integration placeholder
    // In a real scenario, this would be:
    // const FORM_ID = 'your_id'
    // const res = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, { ... })
    
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div id="newsletter" className="mx-auto max-w-md">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-6 text-center"
        >
          <h3 className="mb-2 text-xl font-bold text-accent-primary">You're in! 🚀</h3>
          <p className="text-sm text-white/60">
            Welcome to the movement. Check your inbox for the philosophy briefing.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary opacity-10 dark:opacity-20 blur group-focus-within:opacity-30 dark:group-focus-within:opacity-40 transition duration-1000"></div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your developer email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 rounded-lg border border-foreground-light/10 dark:border-white/10 bg-background-light dark:bg-black/20 px-4 py-3 text-foreground-light dark:text-white placeholder:text-foreground-light/30 dark:placeholder:text-white/40 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all shadow-sm"
            />
            <button
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 rounded-lg bg-accent-primary dark:bg-background-dark px-6 py-3 font-bold text-background-dark dark:text-accent-primary hover:bg-foreground-light hover:text-white dark:hover:bg-foreground-dark dark:hover:text-white transition-all disabled:opacity-50 shadow-lg"
            >
              {status === "loading" ? "Joining..." : (
                <>
                  Join <Send size={18} />
                </>
              )}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-foreground-light/40 dark:text-background-dark/60">
            Zero spam. Just pure engineering excellence.
          </p>
        </form>
      )}
    </div>
  );
};
