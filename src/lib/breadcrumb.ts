export function generateBreadcrumb(path: string): Record<string, unknown> {
  const baseUrl = "https://tangison.com";
  const segments = path.split("/").filter(Boolean);
  const items = [
    { name: "Home", url: baseUrl },
    ...segments.map((segment, i) => ({
      name: formatSegment(segment),
      url: `${baseUrl}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
