"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";

export const TermsClient = () => {
  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <GridBackground />
      <Navbar />

      <section className="container mx-auto px-6 pt-32 pb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-foreground-light dark:text-foreground-dark leading-tight">
            Terms of <span className="text-accent-primary">Service</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground-light/60 dark:text-white/60 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Deploy on Fridays website, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">2. Use of Information</h2>
              <p>
                The information provided on this website is for educational and community purposes only. While we strive for excellence in our technical guides, we provide them "as is" without any warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">3. Limitation of Liability</h2>
              <p>
                Deploy on Fridays and its contributors are not liable for any damages resulting from your use of the site or the implementation of any techniques described in our guides. Software engineering involves risk; always test your pipelines thoroughly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">4. Intellectual Property</h2>
              <p>
                The content, design, and philosophy of Deploy on Fridays are protected by intellectual property laws. You are welcome to share our ideas, but please provide proper attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">5. Community Rules</h2>
              <p>
                We promote a culture of confidence and mutual respect. Any interaction within our community should be constructive and inclusive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">6. Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Your continued use of the site after such changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
