import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-left transition-colors hover:border-emerald-500/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-zinc-100">{project.title}</h3>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} source`}
          className="shrink-0 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-emerald-400"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <p className="mt-3 flex-1 text-sm text-zinc-400 leading-relaxed">{project.desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-800 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
