import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { getCvContent, type Language } from "../../data/cv";

type ProjectsProps = {
  language: Language;
};

export default function Projects({ language }: ProjectsProps) {
  const content = getCvContent(language);
  return (
    <section id="projects" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={content.projectsSection.eyebrow}
          title={content.projectsSection.title}
          subtitle={content.projectsSection.subtitle}
        />

        <div className="space-y-8">
          {content.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
