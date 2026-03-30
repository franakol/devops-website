"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { JoinMovementForm } from "@/components/JoinMovementForm";
import { CommandGenerator } from "@/components/CommandGenerator";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { ShieldCheck, Zap, BarChart3, Users, ChevronRight, Rocket } from "lucide-react";
import Link from "next/link";

export const HomeClient = () => {
  const terminalCommands = [
    { text: "deploy --day friday", delay: 1 },
    { text: "✔ tests passed", delay: 1.8, color: "#00FF9C" },
    { text: "✔ environments healthy", delay: 2.5, color: "#00FF9C" },
    { text: "ship production --fearless", delay: 3.5 },
    { text: "🚀 DEPLOYMENT SUCCESSFUL", delay: 4.5, color: "#00FF9C", bold: true },
  ];

  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <GridBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary text-xs font-bold mb-8 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </span>
              The Movement is Live
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-foreground-light dark:text-foreground-dark">
              Ship with <br />
              <span className="text-accent-primary italic">Absolute</span> <br />
              Confidence.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground-light/60 dark:text-white/60 mb-12 max-w-xl leading-relaxed">
              Deploying on Fridays shouldn't be a nightmare. We're building a culture where your systems are so robust, you can ship anytime.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="rounded-xl bg-accent-primary px-8 py-4 text-lg font-black text-background-dark hover:scale-105 transition-transform shadow-2xl shadow-accent-primary/20">
                Join the Movement
              </button>
              <button className="rounded-xl border border-foreground-light/10 dark:border-white/10 px-8 py-4 text-lg font-bold text-foreground-light dark:text-white hover:bg-foreground-light/5 dark:hover:bg-white/5 transition-all">
                Read the Philosophy
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl"
          >
            <Terminal commands={terminalCommands} />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShieldCheck size={32} />}
            title="Deployment Safety"
            description="Built-in guardrails and automated safety checks that prevent broken code from ever reaching production."
          />
          <FeatureCard 
            icon={<Zap size={32} />}
            title="CI/CD Excellence"
            description="Master the patterns that allow top-tier engineering teams to deploy 50+ times a day without fear."
          />
          <FeatureCard 
            icon={<BarChart3 size={32} />}
            title="Full Observability"
            description="Real-time insights into your systems so you can detect, diagnose, and fix issues before users notice."
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-y border-foreground-light/5 dark:border-white/5 py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-foreground-light dark:text-foreground-dark">
              Why <span className="text-accent-primary">Fridays?</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground-light/60 dark:text-white/60 mb-16 leading-relaxed">
              The "No Deploy Friday" rule is a symptom of broken engineering culture. We believe in building systems so reliable that Friday at 4 PM is the best time to ship your latest feature.
            </p>
            <div className="p-8 rounded-3xl bg-foreground-light/5 dark:bg-white/5 border border-foreground-light/5 dark:border-white/5">
              <CommandGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Numbers */}
      <section className="container mx-auto px-6 py-32 text-center relative z-10">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-5xl font-black text-accent-primary mb-2">10k+</div>
            <div className="text-sm uppercase tracking-widest font-black text-foreground-light/40 dark:text-white/40">Fearless Devs</div>
          </div>
          <div>
            <div className="text-5xl font-black text-accent-primary mb-2">50M+</div>
            <div className="text-sm uppercase tracking-widest font-black text-foreground-light/40 dark:text-white/40">Safe Deploys</div>
          </div>
          <div>
            <div className="text-5xl font-black text-accent-primary mb-2">0</div>
            <div className="text-sm uppercase tracking-widest font-black text-foreground-light/40 dark:text-white/40">Friday Incidents</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32 relative z-10">
        <div className="bg-foreground-light px-8 py-20 dark:bg-accent-primary rounded-[3rem] text-background-light dark:text-background-dark text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full gap-4">
              {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="border-r border-background-dark/20 h-full" />
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to Ship?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-80 relative z-10 font-medium">
            Join the community of developers who have reclaimed their weekends. Sign up for engineering insights and community updates.
          </p>
          
          <JoinMovementForm />
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="group rounded-2xl border border-foreground-light/5 dark:border-white/5 bg-foreground-light/5 dark:bg-white/5 p-8 transition-all hover:bg-foreground-light/10 dark:hover:bg-white/10 hover:-translate-y-1">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background-light dark:bg-background-dark border border-foreground-light/5 dark:border-white/5 text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-background-dark transition-all duration-300">
      {icon}
    </div>
    <h3 className="mb-3 text-2xl font-black text-foreground-light dark:text-white">{title}</h3>
    <p className="text-base leading-relaxed text-foreground-light/40 dark:text-white/40">{description}</p>
  </div>
);
