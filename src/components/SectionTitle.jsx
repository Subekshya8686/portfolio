export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {eyebrow}
        </span>
      )}

      <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">
        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
