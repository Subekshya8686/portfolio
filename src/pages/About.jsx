import portfolioData from "../data/portfolioData.json";

export default function About() {
  const { personalInfo, education } =
    portfolioData;

  return (
    <div className="py-24">
      <h1 className="text-5xl font-black">
        About Me
      </h1>

      <p className="mt-6 text-xl text-zinc-400">
        {personalInfo.title}
      </p>

      <div className="mt-16 space-y-6">
        {education.map((item) => (
          <div
            key={item.degree}
            className="border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="font-bold text-xl">
              {item.degree}
            </h3>

            <p className="text-zinc-400">
              {item.institution}
            </p>

            <p className="text-sm mt-2">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}