import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-20">
      <div className="max-w-xl text-center">
        <p className="eyebrow text-clay">Not found</p>
        <h1 className="mt-5 font-serif text-6xl text-ink">
          This route is not part of Casa Quilla yet.
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">
          Try the English launch page and continue from there.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-full bg-clay px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream"
        >
          Go to /en
        </Link>
      </div>
    </main>
  );
}
