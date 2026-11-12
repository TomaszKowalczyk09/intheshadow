type SectionIntroProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionIntro({ index, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.2em] text-signal">{index}</span>
        <span className="h-px w-12 bg-white/20" />
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
