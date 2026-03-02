import Link from "next/link";
import { getAllPosts, getPostsBySection, getAllTags } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const mlb = getPostsBySection("mlb").slice(0, 3);
  const nfl = getPostsBySection("nfl").slice(0, 3);
  const tags = getAllTags().slice(0, 12);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">The Second Mistake</h1>
        <p className="max-w-2xl text-neutral-600">
          Sports are not simply about winning. Sometimes its simply about learning. And so is life.
        </p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <div className="text-xs uppercase tracking-wide text-neutral-500">MLB</div>
          <h2 className="mt-2 text-lg font-semibold">Latest in baseball</h2>
          <ul className="mt-4 space-y-3">
            {mlb.map((p) => (
              <li key={p.slug} className="text-sm">
                <Link className="font-medium hover:underline" href={`/posts/${p.slug}`}>
                  {p.title}
                </Link>
                <div className="text-xs text-neutral-500">
                  {p.date} • {p.readingMinutes} min
                </div>
              </li>
            ))}
          </ul>
          <Link href="/section/mlb" className="mt-4 inline-block text-sm hover:underline">
            View MLB →
          </Link>
        </div>

        <div className="rounded-2xl border p-6">
          <div className="text-xs uppercase tracking-wide text-neutral-500">NFL</div>
          <h2 className="mt-2 text-lg font-semibold">Latest in football</h2>
          <ul className="mt-4 space-y-3">
            {nfl.map((p) => (
              <li key={p.slug} className="text-sm">
                <Link className="font-medium hover:underline" href={`/posts/${p.slug}`}>
                  {p.title}
                </Link>
                <div className="text-xs text-neutral-500">
                  {p.date} • {p.readingMinutes} min
                </div>
              </li>
            ))}
          </ul>
          <Link href="/section/nfl" className="mt-4 inline-block text-sm hover:underline">
            View NFL →
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold">Newest posts</h3>
        <ul className="mt-4 space-y-4">
          {posts.slice(0, 8).map((p) => (
            <li key={p.slug} className="rounded-2xl border p-5">
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                {p.section}
                {p.tags.includes("yankees") ? " • yankees" : ""}
              </div>
              <h4 className="mt-2 text-base font-semibold">
                <Link href={`/posts/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h4>
              <p className="mt-1 text-sm text-neutral-600">{p.excerpt}</p>
              <div className="mt-3 text-xs text-neutral-500">
                {p.date} • {p.readingMinutes} min •{" "}
                {p.tags.map((t) => (
                  <Link key={t} href={`/tags/${t}`} className="hover:underline">
                    {t}
                  </Link>
                )).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, " · ", el]), [] as any)}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-full border px-3 py-1 text-sm hover:bg-black/5"
            >
              {tag} <span className="text-neutral-500">({count})</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
