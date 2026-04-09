interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center md:mb-14">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500"></div>
    </div>
  );
}
