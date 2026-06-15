export interface Author {
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export const authors: Author[] = [
  {
    name: "Tangison",
    slug: "tangison",
    role: "Applied AI Laboratory",
    bio: "TANGISON is an applied AI laboratory based in Windhoek, Namibia. We research, build, and deploy AI systems for organizations operating in African markets - with a focus on self-hosted infrastructure, offline-first architecture, and practical problem-solving. Our work spans applied AI services, infrastructure design, and strategic consulting.",
    avatarUrl: "/images/authors/tangison.jpg",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAllAuthorSlugs(): string[] {
  return authors.map((a) => a.slug);
}
