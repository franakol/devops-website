import { PrivacyClient } from "@/components/PrivacyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we handle your data at Deploy on Fridays. Simple, transparent, and developer-focused privacy rules.",
};

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}
