import { MapPin } from "lucide-react";

export default function ExperienceTimeline({ experience }) {
  return (
    <ol className="relative border-l border-zinc-800 ml-3 space-y-8">
      {experience.map((item) => (
        <li key={`${item.company}-${item.period}`} className="ml-6">
          {/* Timeline node */}
          <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center">
            {item.current ? (
              <>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-zinc-950" />
              </>
            ) : (
              <span className="h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
            )}
          </span>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 transition-colors hover:border-zinc-700">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
              {item.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Recent
                </span>
              )}
            </div>

            <p className="mt-1 text-sm font-medium text-zinc-300">{item.company}</p>

            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
              <span>{item.period}</span>
              {item.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  {item.location}
                </span>
              )}
            </div>

            {item.highlights && (
              <ul className="mt-4 space-y-2">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.details && (
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{item.details}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
