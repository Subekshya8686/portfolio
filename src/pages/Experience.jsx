import portfolioData from "../data/portfolioData.json";
import SectionTitle from "../components/SectionTitle";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";

export default function Experience() {
  const { experience, skills } = portfolioData;

  return (
    <div className="w-full py-16 sm:py-20">
      <SectionTitle
        eyebrow="Career"
        title="Experience & Skills"
        subtitle="A snapshot of my professional engineering work and the tools I use to build modern web and mobile apps."
      />

      <div className="mx-auto mt-12 max-w-3xl text-left">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Work History
        </h2>
        <ExperienceTimeline experience={experience} />
      </div>

      <div className="mt-14 text-left">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Toolkit & Achievements
        </h2>
        <SkillsGrid skills={skills} />
      </div>
    </div>
  );
}
