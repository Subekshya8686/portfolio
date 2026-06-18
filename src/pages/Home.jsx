import Hero from "../components/Hero";
import ProjectCategoryCard from "../components/ProjectCategoryCard";

export default function Home() {
  return (
    <>
      {/* Added relative block to ensure it occupies normal layout stream */}
      <div className="w-full block relative">
        <Hero />
      </div>

      {/* Added relative block clear-both so it is forced underneath and respects padding */}
      <section className="pb-24 relative block clear-both float-none w-full">
        <h2 className="text-4xl font-bold mb-8">Project Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCategoryCard
            title="Web Projects"
            description="React, MERN and full-stack apps."
            link="/projects/web"
          />

          <ProjectCategoryCard
            title="Mobile Apps"
            description="Flutter and React Native apps."
            link="/projects/mobile"
          />

          <ProjectCategoryCard
            title="Other Projects"
            description="Java, Python and university work."
            link="/projects/other"
          />
        </div>
      </section>
    </>
  );
}
