"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";

export const PrivacyClient = () => {
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
            Privacy <span className="text-accent-primary">Policy</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground-light/60 dark:text-white/60 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">1. Introduction</h2>
              <p>
                At Deploy on Fridays, we value your privacy. This policy explains how we collect, use, and protect your information when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">2. Data We Collect</h2>
              <p>
                We only collect minimal data required to provide our services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Address:</strong> Collected when you sign up for our "Join the Movement" newsletter.</li>
                <li><strong>Usage Data:</strong> Anonymous technical data like browser type and page visits to improve our site experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">3. How We Use Your Data</h2>
              <p>
                Your data is used specifically for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending you engineering insights, CI/CD guides, and community updates.</li>
                <li>Analyzing website performance to ensure a smooth developer experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">4. Data Storage and Third Parties</h2>
              <p>
                We use industry-standard services to store your information securely. For our newsletter, your email address is stored with our email service provider (e.g., ConvertKit). We do not sell or share your personal data with any other third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">5. Your Rights and Unsubscribing</h2>
              <p>
                You have the right to access, update, or delete your information at any time. You can unsubscribe from our newsletter by clicking the "Unsubscribe" link at the bottom of any email we send you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to our community handles.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
