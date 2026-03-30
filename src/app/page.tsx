import { HomeClient } from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ship with Absolute Confidence",
  description: "Deploy on Fridays is a movement for engineering excellence. Build resilient systems, automate your pipelines, and reclaim your weekends.",
};

export default function Home() {
  return <HomeClient />;
}

