import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectCategoryCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-left transition-colors hover:border-emerald-500/50"
    >
      <h3 className="text-xl font-bold text-zinc-100">{title}</h3>

      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{description}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
        View Projects
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
