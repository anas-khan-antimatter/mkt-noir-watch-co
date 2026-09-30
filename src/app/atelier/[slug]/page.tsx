import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterBySlug, atelierChapters } from "@/data/atelier";

export function generateStaticParams() {
  return atelierChapters.map((c) => ({ slug: c.slug }));
}

export default function AtelierChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) notFound();

  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Chapter hero */}
      <section className="py-20 bg-noir-800 border-b border-noir-700/50">
        <div className="section-container">
          <Link
            href="/atelier"
            className="inline-flex items-center gap-2 text-noir-500 hover:text-gold-500 text-xs tracking-widest uppercase mb-8 transition-colors"
          >
            ← All Chapters
          </Link>
          <p className="section-subtitle mb-2">
            Chapter {chapter.number} &middot; {chapter.duration}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.08em] text-noir-50 mb-3">
            {chapter.title}
          </h1>
          <p className="text-gold-500 text-xl font-light tracking-wider">
            &ldquo;{chapter.subtitle}&rdquo;
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-noir-200 text-lg leading-relaxed mb-10">
              {chapter.description}
            </p>

            {/* Process */}
            <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-4">
              The Process
            </h2>
            <div className="bg-noir-800/30 border border-noir-700/30 p-6 mb-10">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gold-500"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-gold-500 text-xs uppercase tracking-widest">
                  Step by Step
                </span>
              </div>
              <p className="text-noir-300 leading-relaxed">
                {chapter.processDescription}
              </p>
            </div>

            {/* Materials */}
            <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-4">
              Materials &amp; Tools
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {chapter.materials.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-3 p-3 border border-noir-700/30"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
                  <span className="text-noir-300 text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Visual */}
              <div className="aspect-square bg-noir-800 border border-noir-700/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-gold-500 text-6xl font-serif">
                    {chapter.number}
                  </span>
                  <p className="text-noir-500 text-xs uppercase tracking-widest mt-2">
                    Chapter
                  </p>
                </div>
              </div>

              {/* Chapter nav */}
              <nav className="border border-noir-700/30 divide-y divide-noir-700/30">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-500 px-4 py-3">
                  Chapters
                </p>
                {atelierChapters.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/atelier/${c.slug}`}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      c.slug === chapter.slug
                        ? "text-gold-500 bg-gold-500/5"
                        : "text-noir-400 hover:text-noir-50"
                    }`}
                  >
                    {c.number}. {c.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-10 border-t border-noir-700/30">
        <div className="section-container flex justify-between">
          {chapter.number > 1 ? (
            <Link
              href={`/atelier/${atelierChapters[chapter.number - 2].slug}`}
              className="text-noir-400 hover:text-gold-500 text-sm tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              ← {atelierChapters[chapter.number - 2].title}
            </Link>
          ) : (
            <div />
          )}
          {chapter.number < atelierChapters.length ? (
            <Link
              href={`/atelier/${atelierChapters[chapter.number].slug}`}
              className="text-noir-400 hover:text-gold-500 text-sm tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              {atelierChapters[chapter.number].title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
}