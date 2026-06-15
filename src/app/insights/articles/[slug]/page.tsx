import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { ArticlePageClient } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: {
      canonical: `/insights/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://tangison.com/insights/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      authors: ["https://tangison.com/about"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    author: {
      "@type": "Organization",
      name: "Tangison",
    },
    publisher: {
      "@type": "Organization",
      name: "TANGISON",
      logo: {
        "@type": "ImageObject",
        url: "https://tangison.com/images/logo.png",
      },
    },
    url: `https://tangison.com/insights/articles/${article.slug}`,
    mainEntityOfPage: `https://tangison.com/insights/articles/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={generateBreadcrumb(`/insights/articles/${article.slug}`)} />
      <ArticlePageClient article={article} />
    </>
  );
}
