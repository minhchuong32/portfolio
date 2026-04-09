import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import { Blocks, Code2, Database, Lightbulb, Wrench } from "lucide-react";
import { getCvContent, type Language } from "../../data/cv";

type SkillsProps = {
  language: Language;
};

const iconMap = {
  core: Code2,
  frameworks: Blocks,
  state: Database,
  backend: Database,
  tools: Wrench,
  concepts: Lightbulb,
};

const cardTone = {
  core: "from-sky-50 to-white border-sky-100",
  frameworks: "from-indigo-50 to-white border-indigo-100",
  state: "from-cyan-50 to-white border-cyan-100",
  backend: "from-emerald-50 to-white border-emerald-100",
  tools: "from-amber-50 to-white border-amber-100",
  concepts: "from-slate-50 to-white border-slate-200",
};

export default function Skills({ language }: SkillsProps) {
  const content = getCvContent(language);
  return (
    <section id="skills" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={content.skillsSection.eyebrow}
          title={content.skillsSection.title}
          subtitle={content.skillsSection.subtitle}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.skills.map((category) => {
            const Icon = iconMap[category.key as keyof typeof iconMap];

            return (
              <div
                key={category.title}
                className={`rounded-[1.75rem] border bg-gradient-to-br ${cardTone[category.key as keyof typeof cardTone]} p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-950">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      category={
                        category.key === "backend"
                          ? "backend"
                          : category.key === "tools"
                            ? "tools"
                            : category.key === "concepts"
                              ? "concepts"
                              : "frontend"
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
