import { Link } from "react-router-dom";

export default function ProjectCategoryCard({
  title,
  description,
  link,
}) {
  return (
    <Link
      to={link}
      className="
      p-8
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      hover:border-blue-500
      transition
      block
    "
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

      <span className="mt-5 inline-block text-blue-400">
        View Projects →
      </span>
    </Link>
  );
}