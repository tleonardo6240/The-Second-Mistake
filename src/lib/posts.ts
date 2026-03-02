import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Section = "mlb" | "nfl";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  section: Section;
  readingMinutes: number;
};

const postsDir = path.join(process.cwd(), "content", "posts");

function normalizeTag(t: string) {
  return t.trim().toLowerCase();
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);

    const tags = Array.isArray(data.tags) ? data.tags.map(String).map(normalizeTag) : [];
    const section = (String(data.section ?? "") as Section) || "mlb";

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      tags,
      section,
      readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    } satisfies Post;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsBySection(section: Section): Post[] {
  return getAllPosts().filter((p) => p.section === section);
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const map = new Map<string, number>();
  for (const p of posts) for (const t of p.tags) map.set(t, (map.get(t) ?? 0) + 1);
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
