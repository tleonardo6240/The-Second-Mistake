import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

const postsDir = path.join(process.cwd(), "content", "posts");

export default async function PostPage({ params }: { params: { slug: string } }) {
  const file = path.join(postsDir, `${params.slug}.mdx`);
  if (!fs.existsSync(file)) return notFound();

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const section = String(data.section ?? "");

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Home
        </Link>{" "}
        /{" "}
        <Link className="hover:underline" href={`/section/${section}`}>
          {section.toUpperCase()}
        </Link>
      </div>

      <article className="prose prose-neutral max-w-none">
        <h1>{String(data.title ?? params.slug)}</h1>
        <p className="text-sm text-neutral-500">
          {String(data.date ?? "")}
          {tags.length ? ` • ${tags.join(" · ")}` : ""}
        </p>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
