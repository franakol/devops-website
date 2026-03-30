import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F8FAFC", // Slightly off-white for better depth
          dark: "#0D1117",
        },
        foreground: {
          light: "#0F172A", // Darker for better readability on light bg
          dark: "#E6EDF3",
        },
        accent: {
          primary: "#00D1FF",
          secondary: "#4F46E5",
        },
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25rem' }], // Default 0.75rem -> 0.875rem
        'sm': ['1rem', { lineHeight: '1.5rem' }],    // Default 0.875rem -> 1rem
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // Default 1rem -> 1.125rem
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "Fira Code", "IBM Plex Mono", "Source Code Pro", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
