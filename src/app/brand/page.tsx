import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines | Tangison Labs",
  description:
    "The visual identity, typography, colour system, and design principles of Tangison Labs.",
  alternates: {
    canonical: "/brand",
  },
};

import { BrandPage } from "./page-client";

export default function Page() {
  return <BrandPage />;
}
