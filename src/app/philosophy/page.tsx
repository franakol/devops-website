import { PhilosophyClient } from "@/components/PhilosophyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "Why we believe in shipping on Fridays. Explore the engineering culture of confidence, CI/CD maturity, and the 'Known Good' principle.",
};

export default function Philosophy() {
  return <PhilosophyClient />;
}
