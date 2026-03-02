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
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {section === "mlb" && (
        <div className="mt-3 text-sm text-neutral-600">
          Subsection:{" "}
          <Link href="/tags/yankees" className="hover:underline">
            Yankees
          </Link>
        </div>
      )}

      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-5">
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
