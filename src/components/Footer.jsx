import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "../data/portfolioData.json";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-zinc-500">
          © {year} {personalInfo.name}
        </p>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-md text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
