"use client";

import { useState, useMemo } from "react";
import { Globe, Search, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "rw", name: "Kinyarwanda", native: "Ikinyarwanda" },
  { code: "af", name: "Afrikaans", native: "Afrikaans" },
  { code: "ak", name: "Twi (Akan)", native: "Twi" },
  { code: "am", name: "Amharic", native: "አማርኛ" },
  { code: "bm", name: "Bambara", native: "Bamanankan" },
  { code: "be", name: "Bemba", native: "Ichibemba" },
  { code: "kg", name: "Kiga", native: "Rukiga" },
  { code: "din", name: "Dinka", native: "Thuoŋjäŋ" },
];

export const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLanguages = useMemo(() => {
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(search.toLowerCase()) ||
        lang.native.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const selectedLang = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground-light/10 dark:border-white/10 bg-foreground-light/5 dark:bg-white/5 px-3 text-foreground-light/60 dark:text-white/60 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
      >
        <Globe size={20} />
        <span className="hidden text-sm font-medium lg:inline-block">
          {selectedLang?.name}
        </span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 z-50 w-64 overflow-hidden rounded-xl border border-foreground-light/10 dark:border-white/10 bg-background-light/95 dark:bg-[#0D1117]/95 backdrop-blur-xl p-2 shadow-2xl"
            >
              <div className="relative mb-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-light/20 dark:text-white/20" size={14} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search language..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg bg-foreground-light/5 dark:bg-white/5 py-2 pl-9 pr-3 text-sm text-foreground-light dark:text-white placeholder:text-foreground-light/20 dark:placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-primary"
                />
              </div>

              <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-foreground-light/10 dark:scrollbar-thumb-white/10">
                {filteredLanguages.length > 0 ? (
                  filteredLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        currentLang === lang.code 
                          ? "bg-accent-primary text-background-dark font-bold" 
                          : "text-foreground-light/60 dark:text-white/60 hover:bg-foreground-light/5 dark:hover:bg-white/5 hover:text-foreground-light dark:hover:text-white"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-sm">{lang.name}</span>
                        <span className={`text-[10px] ${currentLang === lang.code ? "text-background-dark/60" : "text-foreground-light/20 dark:text-white/20"}`}>
                          {lang.native}
                        </span>
                      </div>
                      {currentLang === lang.code && <Check size={14} />}
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-foreground-light/20 dark:text-white/20">No languages found</div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
