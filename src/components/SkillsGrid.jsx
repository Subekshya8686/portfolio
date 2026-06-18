import { Code2, Wrench, Trophy } from "lucide-react";

export default function SkillsGrid({ skills }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {/* Core skills */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <div className="flex items-center gap-2.5 text-zinc-100">
          <Code2 size={18} className="text-emerald-400" />
          <h3 className="text-sm font-semibold uppercase tracking-wide">Core</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.core.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & workflow */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <div className="flex items-center gap-2.5 text-zinc-100">
          <Wrench size={18} className="text-emerald-400" />
          <h3 className="text-sm font-semibold uppercase tracking-wide">Tools & Workflow</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.tools.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <div className="flex items-center gap-2.5 text-zinc-100">
          <Trophy size={18} className="text-emerald-400" />
          <h3 className="text-sm font-semibold uppercase tracking-wide">Achievements</h3>
        </div>
        <ul className="mt-4 space-y-3">
          {skills.achievements.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
