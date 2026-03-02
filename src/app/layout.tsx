// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";

export const metadata = {
  title: "The Second Mistake",
  description:
    "Sports are not simply about winning. Sometimes its simply about learning. And so is life.",
};

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <div
          className="border-b"
          style={{
            background: "rgb(var(--accent))",
            borderColor: "rgba(255,255,255,0.18)",
          }}
        >
          <div className="container-page flex items-center justify-between py-4">
            <div className="flex items-baseline gap-3">
              <Link href="/" className="text-[15px] font-semibold tracking-tight text-white">
                The Second Mistake
              </Link>
              <span className="hidden text-sm text-white/70 md:inline">
                Process over outcome.
              </span>
            </div>

            <nav className="flex items-center gap-5 text-sm text-white/80">
              {/* MLB dropdown */}
              <div className="relative group">
                <Link
                  href="/section/mlb"
                  className="inline-flex items-center gap-1 text-white/85 hover:text-white hover:underline decoration-white/70 decoration-2 underline-offset-[6px]"
                >
                  MLB
                  <svg
                    className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div
                  className="
                    invisible opacity-0 translate-y-1
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                    absolute left-0 top-full z-50 mt-2 w-44
                    rounded-xl border border-neutral-200 bg-white p-1 shadow-sm
                    transition
                  "
                  role="menu"
                  aria-label="MLB submenu"
                >
                  <Link
                    href="/section/mlb"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                    role="menuitem"
                  >
                    All MLB
                  </Link>
                  <Link
                    href="/tags/yankees"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                    role="menuitem"
                  >
                    Yankees
                  </Link>
                </div>
              </div>

              {/* NFL dropdown */}
              <div className="relative group">
                <Link
                  href="/section/nfl"
                  className="inline-flex items-center gap-1 text-white/85 hover:text-white hover:underline decoration-white/70 decoration-2 underline-offset-[6px]"
                >
                  NFL
                  <svg
                    className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div
                  className="
                    invisible opacity-0 translate-y-1
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                    absolute left-0 top-full z-50 mt-2 w-44
                    rounded-xl border border-neutral-200 bg-white p-1 shadow-sm
                    transition
                  "
                  role="menu"
                  aria-label="NFL submenu"
                >
                  <Link
                    href="/section/nfl"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                    role="menuitem"
                  >
                    All NFL
                  </Link>
                  <Link
                    href="/tags/giants"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                    role="menuitem"
                  >
                    Giants
                  </Link>
                </div>
              </div>

              {/* Subscribe pill */}
              <Link
                href="/"
                className="ml-1 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/15"
              >
                Subscribe
              </Link>
            </nav>
          </div>
        </div>

        {children}

        <footer className="mt-14 border-t border-neutral-200">
          <div className="container-page py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} The Second Mistake
          </div>
        </footer>
      </body>
    </html>
  );
}
