import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        overflow-hidden
        hover:-translate-y-2
        transition-all
      "
    >
      <div className="h-52 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{project.title}</h3>

          <a href={project.github} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p className="mt-4 text-zinc-400">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-zinc-800
                text-xs
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
