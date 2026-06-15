import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuthorBySlug, getAllAuthorSlugs } from "@/lib/authors";
import { articles } from "@/lib/articles";
import { AuthorPageClient } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {};
  }

  return {
    title: `${author.name} - Author`,
    description: author.bio,
    alternates: {
      canonical: `/about/authors/${author.slug}`,
    },
    openGraph: {
      url: `https://tangison.com/about/authors/${author.slug}`,
    },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorArticles = articles.filter(
    (a) => a.slug !== undefined // All articles are by Tangison currently
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": author.slug === "tangison" ? "Organization" : "Person",
    name: author.name,
    description: author.bio,
    url: `https://tangison.com/about/authors/${author.slug}`,
    image: author.avatarUrl,
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={generateBreadcrumb(`/about/authors/${author.slug}`)} />
      <AuthorPageClient author={author} articles={authorArticles} />
    </>
  );
}
