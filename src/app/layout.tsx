import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "The Second Mistake",
  description:
    "Sports are not simply about winning. Sometimes its simply about learning. And so is life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="border-b">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              The Second Mistake
            </Link>
            <nav className="flex items-center gap-4 text-sm text-neutral-600">
              <Link href="/section/mlb" className="hover:text-neutral-900">
                MLB
              </Link>
              <Link href="/section/nfl" className="hover:text-neutral-900">
                NFL
              </Link>
              <Link href="/tags/yankees" className="hover:text-neutral-900">
                Yankees
              </Link>
            </nav>
          </div>
        </div>

        {children}

        <footer className="mt-14 border-t">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} The Second Mistake
          </div>
        </footer>
      </body>
    </html>
  );
}
