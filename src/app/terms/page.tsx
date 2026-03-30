import { TermsClient } from "@/components/TermsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The rules of the movement. Understanding our community standards and the use of our technical guides.",
};

export default function TermsOfService() {
  return <TermsClient />;
}
