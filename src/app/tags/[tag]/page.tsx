import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: rawTag } = await params;
  const tag = decodeURIComponent(rawTag).toLowerCase();

  const posts = getAllPosts().filter((p) => p.tags.includes(tag));

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Tag: {tag}</h1>

      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-5">
            <div className="text-xs uppercase tracking-wide text-neutral-500">{p.section}</div>
            <h2 className="mt-2 text-base font-semibold">
              <Link href={`/posts/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-neutral-600">{p.excerpt}</p>
            <div className="mt-3 text-xs text-neutral-500">
              {p.date} • {p.readingMinutes} min
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
