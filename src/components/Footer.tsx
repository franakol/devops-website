"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground-light/5 dark:border-white/5 px-6 py-12 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-4 block">
            Deploy on <span className="text-accent-primary">Fridays</span>
          </span>
          <p className="text-sm text-foreground-light/40 dark:text-white/40">
            &copy; {new Date().getFullYear()} Deploy on Fridays. Built for the fearless.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12">
          <FooterColumn 
            title="Brand" 
            links={[
              { label: 'About', href: '/' }, 
              { label: 'Philosophy', href: '/philosophy' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' }
            ]}
          />
          <FooterColumn 
            title="Content" 
            links={[
              { label: 'Guides', href: '/guides' }, 
              { label: 'Talks', href: '/talks' }
            ]}
          />
          <FooterColumn 
            title="Community" 
            links={[
              { label: 'Twitter', href: '#' }, 
              { label: 'GitHub', href: '#' }
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string, links: {label: string, href: string}[] }) => (
  <div className="text-center md:text-left">
    <h4 className="font-black text-foreground-light dark:text-white mb-4 uppercase tracking-widest text-xs">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-sm text-foreground-light/40 dark:text-white/40 hover:text-accent-primary transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
