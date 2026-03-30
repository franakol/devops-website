import { TalksClient } from "@/components/TalksClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Talks",
  description: "Watch our community speakers share insights on engineering excellence, CI/CD, and fearless production at conferences around the world.",
};

export default function Talks() {
  return <TalksClient />;
}
