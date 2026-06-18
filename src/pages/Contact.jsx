import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import portfolioData from "../data/portfolioData.json";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <div className="w-full py-16 sm:py-20">
      <SectionTitle
        eyebrow={personalInfo.status}
        title="Get In Touch"
        subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you. Reach out through any of the channels below."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3 text-left">
        {channels.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-800/60 text-emerald-400">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {label}
                </p>
                <p className="mt-1 break-words text-sm text-zinc-200">{value}</p>
              </div>
            </div>
          );

          return href ? (
            <a key={label} href={href} className="block">
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-zinc-950/20 transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
        >
          Send an Email
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-700 hover:text-zinc-100 active:scale-[0.98]"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.02] hover:border-zinc-700 hover:text-zinc-100 active:scale-[0.98]"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
