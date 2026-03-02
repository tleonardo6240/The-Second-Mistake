import Link from "next/link";
import { getPostsBySection, type Section } from "@/lib/posts";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section: rawSection } = await params;
  const section = rawSection.toLowerCase() as Section;

  const posts = getPostsBySection(section);
  const title = section === "mlb" ? "MLB" : section === "nfl" ? "NFL" : rawSection;

  return (
    <main className="container-page py-10">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {section === "MLB" && (
        <div className="mt-3 text-sm text-neutral-600">
          Subsection:{" "}
          <Link
            href="/tags/Yankees"
            className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
          >
            Yankees
          </Link>
        </div>
      )}

      {section === "NFL" && (
        <div className="mt-3 text-sm text-neutral-600">
          Subsection:{" "}
          <Link
            href="/tags/Giants"
            className="hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
          >
            Giants
          </Link>
        </div>
      )}

      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="card card-hover p-5">
            <h2 className="text-base font-semibold">
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
