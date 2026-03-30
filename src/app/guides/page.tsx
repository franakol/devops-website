import { GuidesClient } from "@/components/GuidesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Guides",
  description: "Technical deep dives into CI/CD, deployment strategies, and DevOps excellence. Master the tools and patterns of fearless engineering.",
};

export default function Guides() {
  return <GuidesClient />;
}
