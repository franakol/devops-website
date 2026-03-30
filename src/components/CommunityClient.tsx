"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { X, MessageSquare, Globe, Heart, Share2, Rocket } from "lucide-react";

export const CommunityClient = () => {
  const socialPosts = [
    { user: "@dev_musa", text: "Just deployed my first production feature on a Friday! 🚀 Thanks to the #DeployOnFridays philosophy, our CI/CD caught 3 bugs before they hit prod. Confidence is high!", likes: 124 },
    { user: "@kigali_engineer", text: "CI green on a Friday afternoon. Usually I'd be nervous, but today we merged and shipped. The movement is real. #DeployOnFridays", likes: 89 },
    { user: "@frontend_queen", text: "Reliable systems = Peace of mind. Shipping to production at 4 PM on a Friday with zero stress. Best feeling ever. #DeployOnFridays", likes: 210 },
  ];

  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <GridBackground />
      <Navbar />

      <section className="container mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-7xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold mb-8 border border-accent-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            Join the Force
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-foreground-light dark:text-foreground-dark">
            The <span className="text-accent-primary">Community</span>
          </h1>
          <p className="text-xl text-foreground-light/60 dark:text-white/60 mb-12">
            Join thousands of developers who are reclaiming their Fridays. Scale your confidence and share your success stories.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20 text-foreground-light/80 dark:text-white/80">
            <SocialLink icon={<X fill="currentColor" />} label="Follow on X" />
            <SocialLink icon={<Globe />} label="Instagram" />
            <SocialLink icon={<MessageSquare />} label="Discord" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
            {socialPosts.map((post, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-foreground-light/5 dark:border-white/5 bg-background-light/50 dark:bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent-primary/20 flex items-center justify-center font-bold text-accent-primary text-xs">
                    {post.user.substring(1, 3).toUpperCase()}
                  </div>
                  <span className="font-bold text-foreground-light dark:text-white text-sm">{post.user}</span>
                </div>
                <p className="text-sm text-foreground-light/60 dark:text-white/60 mb-6 leading-relaxed">
                  {post.text}
                </p>
                <div className="flex items-center gap-4 text-xs text-foreground-light/20 dark:text-white/20">
                  <span className="flex items-center gap-1"><Heart size={14} /> {post.likes}</span>
                  <span className="flex items-center gap-1"><Share2 size={14} /> Share</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-3xl border-2 border-dashed border-accent-primary/20 bg-accent-primary/5">
            <Rocket className="mx-auto mb-6 text-accent-primary" size={48} />
            <h2 className="text-3xl font-bold mb-4 text-foreground-light dark:text-white">Share Your Win</h2>
            <p className="text-foreground-light/60 dark:text-white/60 mb-8">
              Post your "CI Green" screenshots and Friday deployment successes with <span className="text-accent-primary font-bold">#DeployOnFridays</span>
            </p>
            <button className="rounded-xl bg-accent-primary px-8 py-4 text-base font-bold text-background-dark hover:scale-105 transition-transform shadow-xl">
              Post on X
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

const SocialLink = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground-light/10 dark:border-white/10 hover:bg-foreground-light/5 dark:hover:bg-white/5 transition-colors font-bold text-sm">
    {icon} {label}
  </a>
);
