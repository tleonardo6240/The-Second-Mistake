// src/app/page.tsx
import Link from "next/link";
import { getAllPosts, getPostsBySection, getAllTags } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const mlb = getPostsBySection("mlb").slice(0, 3);
  const nfl = getPostsBySection("nfl").slice(0, 3);
  const tags = getAllTags().slice(0, 12);

  return (
    <main className="container-page py-10">
      <div className="grid gap-10 lg:grid-cols-[56px_1fr_280px] lg:gap-12">
        {/* Left rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 flex flex-col items-center gap-5 text-xs text-neutral-500">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white font-semibold text-[rgb(var(--accent))]">
              TSM
            </div>

            <nav className="flex flex-col items-center gap-3">
              <Link
                href="/section/mlb"
                className="hover:text-neutral-900 hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                MLB
              </Link>
              <Link
                href="/tags/yankees"
                className="hover:text-neutral-900 hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                Yanks
              </Link>
              <Link
                href="/section/nfl"
                className="hover:text-neutral-900 hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                NFL
              </Link>
              <Link
                href="/tags/giants"
                className="hover:text-neutral-900 hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                NYG
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main column */}
        <div>
          <header className="space-y-3">
            <div className="kicker">MLB • NFL • Yankees • Giants</div>
            <h1 className="text-4xl font-semibold tracking-tight">The Second Mistake</h1>
            <div className="h-[2px] w-12 rounded" style={{ background: "rgb(var(--accent))" }} />
            <p className="max-w-2xl text-neutral-600">
              Sports are not always about winning. Sometimes its simply about learning. And so is
              life.
            </p>
          </header>

          <section className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="card card-hover p-6">
              <div className="kicker">MLB</div>
              <h2 className="mt-2 text-lg font-semibold">Latest in Baseball</h2>
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

            <div className="card card-hover p-6">
              <div className="kicker">NFL</div>
              <h2 className="mt-2 text-lg font-semibold">Latest in Football</h2>
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
                <li key={p.slug} className="card card-hover p-5">
                  <div className="kicker">
                    {p.section}
                    {p.tags.includes("yankees") ? " • yankees" : ""}
                    {p.tags.includes("giants") ? " • giants" : ""}
                  </div>

                  <h4 className="mt-2 text-base font-semibold">
                    <Link href={`/posts/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h4>

                  <p className="mt-1 text-sm text-neutral-600">{p.excerpt}</p>

                  <div className="mt-3 text-xs text-neutral-500">
                    {p.date} • {p.readingMinutes} min •{" "}
                    {p.tags
                      .map((t) => (
                        <Link key={t} href={`/tags/${t}`} className="hover:underline">
                          {t}
                        </Link>
                      ))
                      .reduce((acc, el, i) => (i === 0 ? [el] : [...acc, " · ", el]), [] as any)}
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
                  className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm hover:border-neutral-400"
                >
                  {tag} <span className="text-neutral-500">({count})</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right rail */}
        <aside className="hidden lg:block border-l border-neutral-200 pl-8">
          <div className="sticky top-6 space-y-6">
            <div className="card p-5">
              <div className="kicker">Yankees</div>
              <p className="mt-2 text-sm text-neutral-600">
                What we're focused on this week.
              </p>
              <Link
                href="/tags/yankees"
                className="mt-3 inline-block text-sm hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                Read Yankees →
              </Link>
            </div>

            {/* Giants card (new) */}
            <div className="card p-5">
              <div className="kicker">Giants</div>
              <p className="mt-2 text-sm text-neutral-600">
                Navigating the offseason.
              </p>
              <Link
                href="/tags/giants"
                className="mt-3 inline-block text-sm hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                Read Giants →
              </Link>
            </div>

            <div className="card p-5">
              <div className="kicker">Newsletter</div>
              <p className="mt-2 text-sm text-neutral-600">
                Catch up in an email.
              </p>
              <button
                className="mt-4 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:border-neutral-400"
                type="button"
              >
                Subscribe (soon)
              </button>
              <p className="mt-2 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
            </div>

            <div className="card p-5">
              <div className="kicker">Sections</div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link
                  className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
                  href="/section/mlb"
                >
                  MLB →
                </Link>
                <Link
                  className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
                  href="/section/nfl"
                >
                  NFL →
                </Link>
                <Link
                  className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
                  href="/tags/yankees"
                >
                  Yankees →
                </Link>
                <Link
                  className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
                  href="/tags/giants"
                >
                  Giants →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
