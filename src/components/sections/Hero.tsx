import {
  ArrowRight,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cvUrl, getCvContent, heroProfile, type Language } from "../../data/cv";

type HeroProps = {
  language: Language;
};

export default function Hero({ language }: HeroProps) {
  const content = getCvContent(language);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-8%] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm backdrop-blur">
            <Briefcase className="h-4 w-4 text-sky-700" />
            {content.hero.badge}
          </div>

          <h1 className="font-display max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {content.hero.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-sky-800 sm:text-3xl">
            {content.hero.role} · {content.hero.level}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {content.hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.hero.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {content.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <p className="text-2xl font-bold text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-slate-600">
            <a
              href={`mailto:${heroProfile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-transform hover:-translate-y-0.5 hover:text-sky-700"
            >
              <Mail className="h-4 w-4" />
              {heroProfile.email}
            </a>
            <a
              href={`tel:${heroProfile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-transform hover:-translate-y-0.5 hover:text-sky-700"
            >
              <Phone className="h-4 w-4" />
              {heroProfile.phone}
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm">
              <MapPin className="h-4 w-4" />
              {heroProfile.location}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-transform hover:-translate-y-0.5"
            >
              {content.hero.viewProjects}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              {content.hero.contactMe}
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              <Download className="h-4 w-4" />
              {content.hero.viewCv}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-white/60 to-indigo-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img
                src={heroProfile.portrait}
                alt="Pham Han Minh Chuong portrait"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-200">
                  {content.hero.targetRoleLabel}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  {content.hero.targetRole}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {content.hero.level}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {content.hero.focusLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {content.hero.focus}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Component-based architecture
                </p>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {content.hero.primaryStackLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">
                  {content.hero.primaryStack}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {content.hero.experienceLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">
                  {content.hero.experience}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={heroProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={heroProfile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
