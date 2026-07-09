import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function OtherProjects() {
  return (
    <Projects
      title="Other Projects"
      subtitle="Core programming fundamentals and university work in Java and Python."
      projects={portfolioData.projects.other}
    />
  );
}
