"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { ChevronLeft, Code2, Terminal, Globe, ShieldCheck, BarChart3, Cpu } from "lucide-react";
import Link from "next/link";
import { GuideItem } from "@/data/guides-data";

const IconMap: { [key: string]: React.ReactNode } = {
  Code2: <Code2 size={32} />,
  Terminal: <Terminal size={32} />,
  Globe: <Globe size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  BarChart3: <BarChart3 size={32} />,
  Cpu: <Cpu size={32} />,
};

export const GuideDetailClient = ({ guide }: { guide: GuideItem }) => {
  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <GridBackground />
      <Navbar />

      <section className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-2 text-accent-primary hover:text-foreground-light dark:hover:text-white transition-colors mb-12 font-bold group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Guides
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-16 w-16 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                  {IconMap[guide.icon] || <Code2 size={32} />}
               </div>
               <div>
                 <span className="text-accent-primary font-bold text-sm tracking-widest uppercase mb-1 block">
                   {guide.category} Guide
                 </span>
                 <h1 className="text-4xl md:text-6xl font-black text-foreground-light dark:text-foreground-dark tracking-tight">
                   {guide.title}
                 </h1>
               </div>
            </div>

            <div className="prose prose-invert prose-emerald lg:prose-xl max-w-none">
              <div className="space-y-8 text-foreground-light/70 dark:text-white/70 leading-relaxed">
                {guide.content.split('\n\n').map((block, i) => {
                  if (block.startsWith('# ')) return <h1 key={i} className="hidden">{block.replace('# ', '')}</h1>;
                  if (block.startsWith('## ')) return <h2 key={i} className="text-2xl md:text-3xl font-black text-foreground-light dark:text-white pt-8 border-t border-white/5">{block.replace('## ', '')}</h2>;
                  if (block.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-accent-primary pt-4">{block.replace('### ', '')}</h3>;
                  if (block.startsWith('- **')) {
                    return (
                      <ul key={i} className="space-y-4">
                        {block.split('\n').map((li, j) => (
                           <li key={j} className="flex items-start gap-3">
                              <span className="h-2 w-2 rounded-full bg-accent-primary mt-2.5 flex-shrink-0" />
                              <span>{li.replace('- ', '')}</span>
                           </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.match(/^\d+\./)) {
                    return (
                      <div key={i} className="space-y-4">
                        {block.split('\n').map((line, j) => {
                           if (line.match(/^\d+\./)) return <h3 key={j} className="text-2xl font-black text-foreground-light dark:text-white mt-8">{line}</h3>;
                           return <p key={j}>{line}</p>;
                        })}
                      </div>
                    );
                  }
                  return <p key={i} className="text-lg md:text-xl">{block}</p>;
                })}
              </div>
            </div>

            <div className="mt-20 p-12 rounded-[2rem] bg-accent-primary text-background-dark text-center">
               <h2 className="text-3xl font-black mb-4">Ready to implement this?</h2>
               <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto font-medium">
                 Join our community of fearless engineers and share your progress.
               </p>
               <Link 
                 href="/community" 
                 className="inline-block px-10 py-5 bg-background-dark text-accent-primary font-black rounded-xl hover:scale-105 transition-transform"
               >
                 Join the Community
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
