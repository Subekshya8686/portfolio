import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

export default function Projects({ title, subtitle, projects }) {
  return (
    <div className="w-full py-16 sm:py-20">
      <SectionTitle eyebrow="Portfolio" title={title} subtitle={subtitle} />

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
