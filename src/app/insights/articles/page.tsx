import type { Metadata } from "next";
import { ArticlesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Articles | Tangison Labs",
  description: "Technical articles on AI, automation, and systems engineering",
  alternates: { canonical: "/insights/articles" },
};

export default function Page() {
  return <ArticlesPage />;
}
