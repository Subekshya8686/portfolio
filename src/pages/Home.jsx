import Hero from "../components/Hero";
import ProjectCategoryCard from "../components/ProjectCategoryCard";

export default function Home() {
  return (
    <div className="w-full py-6">
      <Hero />

      <section className="mt-6">
        <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Project Categories
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          <ProjectCategoryCard
            title="Web Projects"
            description="React, MERN and full-stack web applications."
            link="/projects/web"
          />
          <ProjectCategoryCard
            title="Mobile Apps"
            description="Cross-platform apps with React Native and Flutter."
            link="/projects/mobile"
          />
          <ProjectCategoryCard
            title="Other Projects"
            description="Core programming fundamentals in Java and Python."
            link="/projects/other"
          />
        </div>
      </section>
    </div>
  );
}
