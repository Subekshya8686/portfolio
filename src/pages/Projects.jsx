import ProjectCard from "../components/ProjectCard";

export default function Projects({
  title,
  projects,
}) {
  return (
    <div className="py-24">
      <h1 className="text-5xl font-black mb-10">
        {title}
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}