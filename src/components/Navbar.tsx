"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Rocket, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-12 py-5">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-background transition-all duration-300 shadow-lg shadow-accent-primary/5">
            <Rocket size={22} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground-light dark:text-foreground-dark">
            Deploy on <span className="text-accent-primary">Fridays</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:gap-14 md:flex">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/philosophy" active={pathname === "/philosophy"}>Philosophy</NavLink>
          <NavLink href="/guides" active={pathname === "/guides"}>Guides</NavLink>
          <NavLink href="/talks" active={pathname === "/talks"}>Talks</NavLink>
          <NavLink href="/community" active={pathname === "/community"}>Community</NavLink>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="h-6 w-px bg-foreground-light/10 dark:bg-white/10 mx-2" />
          <LanguageToggle />
          <ThemeToggle />
          <Link 
            href="#newsletter"
            className="rounded-full bg-accent-primary px-8 py-3 text-base font-black text-background-dark hover:bg-foreground-light hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-accent-primary/20 whitespace-nowrap"
          >
            Join Movement
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground-light dark:text-foreground-dark p-2 rounded-lg hover:bg-foreground-light/5 dark:hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-foreground-light/5 dark:border-white/5 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <MobileNavLink href="/" active={pathname === "/"} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/philosophy" active={pathname === "/philosophy"} onClick={() => setIsMenuOpen(false)}>Philosophy</MobileNavLink>
              <MobileNavLink href="/guides" active={pathname === "/guides"} onClick={() => setIsMenuOpen(false)}>Guides</MobileNavLink>
              <MobileNavLink href="/talks" active={pathname === "/talks"} onClick={() => setIsMenuOpen(false)}>Talks</MobileNavLink>
              <MobileNavLink href="/community" active={pathname === "/community"} onClick={() => setIsMenuOpen(false)}>Community</MobileNavLink>
              <div className="flex items-center justify-between py-4 border-t border-foreground-light/10 dark:border-white/10 mt-2">
                <span className="text-sm text-foreground-light/60 dark:text-foreground-dark/60 font-medium">Language</span>
                <LanguageToggle />
              </div>
              <Link 
                href="#newsletter"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center rounded-xl bg-accent-primary py-4 text-base font-bold text-background-dark shadow-xl"
              >
                Join the Movement
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className={`text-base font-bold transition-all duration-300 relative group overflow-hidden ${
      active 
        ? "text-accent-primary" 
        : "text-foreground-light/60 dark:text-foreground-dark/60 hover:text-accent-primary dark:hover:text-accent-primary"
    }`}
  >
    {children}
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
        initial={false}
      />
    )}
  </Link>
);

const MobileNavLink = ({ href, active, children, onClick }: { href: string; active?: boolean; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className={`text-lg font-bold transition-colors ${
      active ? "text-accent-primary" : "text-foreground-light dark:text-foreground-dark hover:text-accent-primary"
    }`}
  >
    {children}
  </Link>
);
