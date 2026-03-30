"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <GridBackground />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border border-accent-primary/20">
          Under Construction
        </span>
        <h1 className="text-4xl sm:text-6xl font-black mb-6 text-foreground-light dark:text-white">{title}</h1>
        <p className="text-foreground-light/40 dark:text-white/40 max-w-md mx-auto mb-10 text-lg">
          We're currently documenting the best engineering practices. Join the movement to get notified when we launch this section.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-accent-primary font-bold hover:text-foreground-light dark:hover:text-white transition-colors group text-base"
        >
          <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Movement
        </Link>
      </motion.div>
    </main>
  );
}
