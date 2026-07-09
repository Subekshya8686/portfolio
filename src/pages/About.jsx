import { GraduationCap } from "lucide-react";
import portfolioData from "../data/portfolioData.json";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  const { personalInfo, education } = portfolioData;

  return (
    <div className="w-full py-16 sm:py-20">
      <SectionTitle eyebrow={personalInfo.status} title="About Me" />

      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center">
        <p className="text-lg text-zinc-300 leading-relaxed text-pretty">
          {"I'm "}
          {personalInfo.name}, an Associate Mobile &amp; Frontend App Developer with
          roughly 5 months of professional engineering experience.
        </p>
        <p className="text-base text-zinc-400 leading-relaxed text-pretty">
          {
            "I'm highly focused on building modern web and mobile apps using React, React Native, and TypeScript, with a passion for crafting refined digital experiences. I hold a BSc (Hons) in Computing with First Class Honours."
          }
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl text-left">
        <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          <GraduationCap size={16} className="text-emerald-400" />
          Education
        </h2>

        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-100">{item.degree}</h3>
                <span className="text-xs text-zinc-500">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-300">{item.institution}</p>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
