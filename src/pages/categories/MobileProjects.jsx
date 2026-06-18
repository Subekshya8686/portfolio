import portfolioData from "../../data/portfolioData.json";
import Projects from "../Projects";

export default function MobileProjects() {
  return (
    <Projects
      title="Mobile Projects"
      subtitle="Cross-platform mobile apps crafted with React Native and Flutter."
      projects={portfolioData.projects.mobile}
    />
  );
}
