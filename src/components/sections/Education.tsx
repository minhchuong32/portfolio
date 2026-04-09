import SectionTitle from "../ui/SectionTitle";
import {
  CalendarDays,
  BookOpenCheck,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { educationMedia, getCvContent, type Language } from "../../data/cv";

type EducationProps = {
  language: Language;
};

export default function Education({ language }: EducationProps) {
  const content = getCvContent(language);
  return (
    <section id="education" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={content.educationSection.eyebrow}
          title={content.educationSection.title}
          subtitle={content.educationSection.subtitle}
        />

        <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1fr_1.05fr] md:p-8">
          <div className="overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-lg md:min-h-[420px]">
            <img
              src={educationMedia.portrait}
              alt="HCMUTE campus"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img
                src={educationMedia.logo}
                alt="HCMUTE logo"
                className="h-14 w-14 rounded-2xl bg-white object-contain p-2 shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                  {language === "en" ? "University" : "Trường đại học"}
                </p>
                <h3 className="mt-2 text-2xl font-display font-bold text-slate-950">
                  {content.education.school}
                </h3>
                <p className="mt-2 text-slate-600">
                  {content.education.degree}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <CalendarDays className="h-5 w-5 text-sky-700" />
                  <span className="text-sm font-medium">
                    {content.education.duration}
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <BookOpenCheck className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium">
                    GPA {content.education.gpa}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3 text-slate-700">
                <GraduationCap className="h-5 w-5 text-slate-900" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                  {language === "en"
                    ? "Relevant Coursework"
                    : "Học phần liên quan"}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.education.courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-4">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="h-5 w-5 text-sky-700" />
                <span className="text-sm font-medium">
                  {content.education.location}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {content.education.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
