"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Code2, Terminal as TerminalIcon, ShieldCheck, Cpu, Globe, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";
import { guidesData } from "@/data/guides-data";

const IconMap: { [key: string]: React.ReactNode } = {
  Code2: <Code2 />,
  Terminal: <TerminalIcon />,
  Globe: <Globe />,
  ShieldCheck: <ShieldCheck />,
  BarChart3: <BarChart3 />,
  Cpu: <Cpu />,
};

export const GuidesClient = () => {
  const categories = ["CI/CD", "Deployment", "DevOps"];

  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <GridBackground />
      <Navbar />

      <section className="container mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold mb-8 border border-accent-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            Technical Mastery
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-foreground-light dark:text-foreground-dark tracking-tighter">
            Engineering <br />
            <span className="text-accent-primary italic">Guides</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-light/60 dark:text-white/60 leading-relaxed font-medium">
            Deep dives into the technical foundations of fearless deployments and reliable systems. Build your engineering maturity.
          </p>
        </motion.div>

        <div className="grid gap-20">
          {categories.map((category, idx) => {
            const items = guidesData.filter(g => g.category === category);
            if (items.length === 0) return null;
            
            return (
              <div key={idx}>
                <h2 className="text-sm font-black mb-8 text-accent-primary uppercase tracking-[0.2em] flex items-center gap-4">
                  {category}
                  <div className="h-px flex-1 bg-accent-primary/20" />
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {items.map((guide, gIdx) => (
                    <GuideCard key={gIdx} {...guide} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

const GuideCard = ({ title, description, icon, slug }: { title: string; description: string; icon: string; slug: string }) => (
  <Link href={`/guides/${slug}`} className="group block">
    <div className="p-8 rounded-3xl border border-foreground-light/5 dark:border-white/5 bg-background-light/50 dark:bg-white/5 hover:bg-foreground-light/5 dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <ChevronRight size={24} className="text-accent-primary" />
      </div>
      
      <div className="flex flex-col h-full">
        <div className="h-16 w-16 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-background-dark transition-all duration-500 mb-8">
          {IconMap[icon] || <Code2 />}
        </div>
        <div>
          <h3 className="text-2xl font-black mb-3 text-foreground-light dark:text-white group-hover:text-accent-primary transition-colors tracking-tight">{title}</h3>
          <p className="text-lg text-foreground-light/40 dark:text-white/40 leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </div>
  </Link>
);
