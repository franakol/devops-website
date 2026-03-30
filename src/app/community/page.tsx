import { CommunityClient } from "@/components/CommunityClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description: "Join thousands of fearless developers. Share your Friday deployment wins, connect on Discord, and follow the movement.",
};

export default function Community() {
  return <CommunityClient />;
}
