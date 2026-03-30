import { guidesData } from "@/data/guides-data";
import { GuideDetailClient } from "@/components/GuideDetailClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.slug === slug);
  
  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: `${guide.title} | Engineering Guides`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuideDetailClient guide={guide} />;
}
