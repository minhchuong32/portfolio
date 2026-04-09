import { Calendar, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  projectType: string;
  duration: string;
  description: string;
  techStack: string[];
  achievements: string[];
  github?: string;
}

export default function ProjectCard({
  title,
  projectType,
  duration,
  description,
  techStack,
  achievements,
  github,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="p-6 md:p-8">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <h3 className="text-2xl font-display font-bold text-slate-950 transition-colors group-hover:text-sky-700">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
              {projectType}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
          </div>
        </div>

        <p className="mb-4 leading-7 text-slate-600">{description}</p>

        <div className="mb-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Highlights
          </h4>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {github && (
          <div className="mt-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
