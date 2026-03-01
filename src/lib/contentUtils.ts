import yaml from "js-yaml";
import { marked } from "marked";

// --- Frontmatter parser (browser-safe replacement for gray-matter) ---
function parseFrontmatter(raw: string): {
  data: Record<string, any>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = (yaml.load(match[1]) as Record<string, any>) ?? {};
  return { data, content: match[2] };
}

// --- Article types ---
export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  external?: boolean;
  url?: string;
};

export type Article = ArticleMeta & {
  html: string;
};

// --- Digest types (kept from digestUtils) ---
export type DigestLink = {
  title: string;
  url: string;
  description?: string;
};

export type DigestSection = {
  title: string;
  links: DigestLink[];
};

export type DigestMeta = {
  slug: string;
  number: number;
  title: string;
  date: string;
  description?: string;
};

export type DigestIssue = DigestMeta & {
  sections: DigestSection[];
  html?: string;
};

// --- Static glob imports ---
// Vite will resolve these at build time — no runtime fetch needed

const articleFiles = import.meta.glob("/src/content/articles/*.md", {
  query: "?raw",
  eager: true
}) as Record<string, { default: string }>;

const digestFiles = import.meta.glob("/src/content/digest/*.md", {
  query: "?raw",
  eager: true
}) as Record<string, { default: string }>;

// --- Article helpers ---

function parseArticle(filePath: string, raw: string): Article {
  const { data, content } = parseFrontmatter(raw);
  const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
  const html = marked.parse(content) as string;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description,
    external: data.external,
    url: data.url,
    html
  };
}

export function getArticles(): ArticleMeta[] {
  return Object.entries(articleFiles)
    .map(([path, mod]) => {
      const { html: _, ...meta } = parseArticle(path, mod.default);
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(slug: string): Article | null {
  const entry = Object.entries(articleFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`)
  );
  if (!entry) return null;
  return parseArticle(entry[0], entry[1].default);
}

// --- Digest helpers ---

function parseDigest(filePath: string, raw: string): DigestIssue {
  const { data, content } = parseFrontmatter(raw);
  const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
  const html = content.trim() ? (marked.parse(content) as string) : undefined;

  return {
    slug,
    number: data.number ?? 0,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description,
    sections: data.sections ?? [],
    html
  };
}

export function getDigestIssues(): DigestMeta[] {
  return Object.entries(digestFiles)
    .map(([path, mod]) => {
      const { sections: _, html: __, ...meta } = parseDigest(path, mod.default);
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDigestIssue(slug: string): DigestIssue | null {
  const entry = Object.entries(digestFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`)
  );
  if (!entry) return null;
  return parseDigest(entry[0], entry[1].default);
}
