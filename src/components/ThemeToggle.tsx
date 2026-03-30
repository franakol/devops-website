"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { id: "light", icon: <Sun size={16} />, label: "Light" },
    { id: "dark", icon: <Moon size={16} />, label: "Dark" },
    { id: "system", icon: <Monitor size={16} />, label: "System" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground-light/10 dark:border-white/10 bg-foreground-light/5 dark:bg-white/5 text-foreground-light/60 dark:text-white/60 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
      >
        {theme === "light" ? <Sun size={20} /> : theme === "dark" ? <Moon size={20} /> : <Monitor size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 z-50 w-36 overflow-hidden rounded-xl border border-foreground-light/10 dark:border-white/10 bg-background-light/90 dark:bg-[#0D1117]/80 backdrop-blur-xl p-1 shadow-2xl"
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    theme === t.id 
                      ? "bg-accent-primary/10 text-accent-primary" 
                      : "text-foreground-light/60 dark:text-white/60 hover:bg-foreground-light/5 dark:hover:bg-white/5 hover:text-foreground-light dark:hover:text-white"
                  }`}
                >
                  {t.icon}
                  {t.label}
                  {theme === t.id && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-primary" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
