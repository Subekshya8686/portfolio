import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function MobileProjects() {
  return (
    <Projects
      title="Mobile Projects"
      projects={portfolioData.projects.mobile}
    />
  );
}