import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function WebProjects() {
  return (
    <Projects
      title="Web Projects"
      subtitle="Full-stack web applications built with React, the MERN stack, and modern tooling."
      projects={portfolioData.projects.web}
    />
  );
}
