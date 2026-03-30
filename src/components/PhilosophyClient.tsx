"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { ShieldCheck, Cpu, Terminal as TerminalIcon, Rocket } from "lucide-react";

export const PhilosophyClient = () => {
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
            Engineering Excellence
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-foreground-light dark:text-foreground-dark leading-[0.9] tracking-tighter">
            The Philosophy of <br />
            <span className="text-accent-primary italic">Confidence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-light/60 dark:text-white/60 mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
            Deploying on a Friday isn't a dare; it's a testament to engineering excellence. 
            When your systems are resilient and your tests are exhaustive, 
            any day is a good day to deliver value.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto text-left">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <PhilosophyCard 
              icon={<TerminalIcon size={24} />}
              title="End the Fear"
              description="The fear of Friday deployments is a symptom of technical debt. We help you trust your code to run without supervision."
            />
            
            <PhilosophyCard 
              icon={<Cpu size={24} />}
              title="CI/CD Maturity"
              description="Confidence comes from automation. A mature pipeline validates environments and ensures performance consistency."
            />

            <PhilosophyCard 
              icon={<ShieldCheck size={24} />}
              title="Safe Recovery"
              description="Every deployment must be reversible. Zero-friction rollback strategies remove the risk of production downtime."
            />
          </div>

          <div className="mt-24 p-12 rounded-[2.5rem] border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm relative overflow-hidden group max-w-4xl mx-auto text-center">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Rocket size={120} className="text-accent-primary" />
            </div>
            <h2 className="text-3xl font-black mb-6 text-foreground-light dark:text-white relative z-10">Our Core Mantra</h2>
            <blockquote className="text-2xl md:text-3xl italic text-foreground-light/80 dark:text-white/80 border-l-4 border-accent-primary pl-8 relative z-10 leading-snug text-left">
              "If your tests pass, if your staging environment is green, and if your rollback strategy is ready—ship it. Reliability is a culture, not a schedule."
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

const PhilosophyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-8 rounded-3xl border border-foreground-light/5 dark:border-white/5 bg-background-light/50 dark:bg-white/5 hover:bg-foreground-light/10 dark:hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
    <div className="h-12 w-12 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-black mb-3 text-foreground-light dark:text-white">{title}</h3>
    <p className="text-foreground-light/50 dark:text-white/40 leading-relaxed font-medium">{description}</p>
  </div>
);
