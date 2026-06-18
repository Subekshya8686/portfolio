import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function WebProjects() {
  return (
    <Projects
      title="Web Projects"
      projects={portfolioData.projects.web}
    />
  );
}