"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Play, FileText, Calendar, MapPin } from "lucide-react";

const talks = [
  {
    title: "Why Elite Engineering Teams Deploy on Fridays",
    event: "DevOps Summit 2024",
    location: "Kigali, Rwanda",
    date: "Feb 15, 2024",
    description: "A deep dive into the cultural and technical shifts required to normalize Friday deployments.",
    video: "#",
    slides: "#",
  },
  {
    title: "The CI/CD Maturity Model",
    event: "Tech Africa Conference",
    location: "Nairobi, Kenya",
    date: "Dec 10, 2023",
    description: "How to assess and improve your team's deployment automation and reliability.",
    video: "#",
    slides: "#",
  },
  {
    title: "Fearless Production Systems",
    event: "Engineering Excellence webinar",
    location: "Remote",
    date: "Oct 22, 2023",
    description: "Strategies for building observability and rollback mechanisms that eliminate production anxiety.",
    video: "#",
    slides: "#",
  }
];

export const TalksClient = () => {
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
            Public Presence
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-foreground-light dark:text-foreground-dark">
            Public <span className="text-accent-primary">Talks</span>
          </h1>
          <p className="text-xl text-foreground-light/60 dark:text-white/60 mb-16 leading-relaxed">
            Sharing insights on engineering culture, CI/CD, and the systems that power fearless deployments at conferences and events around the world.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto text-left">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talks.map((talk, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-foreground-light/5 dark:border-white/5 bg-background-light/50 dark:bg-white/5 backdrop-blur-sm hover:border-accent-primary/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 flex flex-wrap gap-4 text-[10px] text-foreground-light/40 dark:text-white/40 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {talk.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {talk.location}</span>
                    <span className="text-accent-primary">{talk.event}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4 group-hover:text-accent-primary transition-colors leading-tight">
                    {talk.title}
                  </h2>
                  <p className="text-foreground-light/60 dark:text-white/60 leading-relaxed text-sm mb-8">
                    {talk.description}
                  </p>
                </div>
                <div className="flex gap-3 pt-6 border-t border-foreground-light/5 dark:border-white/5 mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent-primary text-background-dark font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent-primary/10">
                    <Play size={14} fill="currentColor" /> Watch Video
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-foreground-light/10 dark:border-white/10 text-foreground-light dark:text-white font-bold text-xs hover:bg-foreground-light/5 dark:hover:bg-white/5 transition-all">
                    <FileText size={14} /> Slides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
