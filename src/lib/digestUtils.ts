export type DigestLink = {
  title: string;
  url: string;
  description?: string;
};

export type DigestSection = {
  title: string;
  links: DigestLink[];
};

export type DigestIssue = {
  slug: string;
  number: number;
  title: string;
  date: string;
  description?: string;
  sections: DigestSection[];
};

type DigestIndexEntry = Pick<
  DigestIssue,
  "slug" | "number" | "title" | "date" | "description"
>;

export async function fetchIssues(): Promise<DigestIndexEntry[]> {
  const res = await fetch("/digest/index.json");
  const data: DigestIndexEntry[] = await res.json();
  return data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function fetchIssue(slug: string): Promise<DigestIssue | null> {
  try {
    const res = await fetch(`/digest/${slug}.json`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
