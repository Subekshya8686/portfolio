import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function OtherProjects() {
  return (
    <Projects
      title="Other Projects"
      projects={portfolioData.projects.other}
    />
  );
}