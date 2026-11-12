export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-heading text-sm tracking-tight text-zinc-300">
          in the shadow<span className="text-signal">.</span>
        </p>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
          2026 · Zbudowane w Next.js i Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
