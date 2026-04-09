import SectionTitle from "../ui/SectionTitle";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { contactLinks, getCvContent, type Language } from "../../data/cv";

type ContactProps = {
  language: Language;
};

export default function Contact({ language }: ContactProps) {
  const content = getCvContent(language);
  return (
    <section id="contact" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={content.contactSection.eyebrow}
          title={content.contactSection.title}
          subtitle={content.contactSection.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              {content.contact.title}
            </p>
            <h3 className="mt-4 text-3xl font-display font-bold">
              {content.contact.subtitle}
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              {content.contact.overview}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${contactLinks.email}`}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1 hover:bg-white/10"
              >
                <Mail className="h-6 w-6 text-sky-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  Email
                </p>
                <p className="mt-2 break-all text-sm font-medium leading-6 text-white">
                  {contactLinks.email}
                </p>
              </a>

              <a
                href={`tel:${contactLinks.phone.replace(/\s/g, "")}`}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone className="h-6 w-6 text-emerald-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  Phone
                </p>
                <p className="mt-2 break-words text-sm font-medium leading-6 text-white">
                  {contactLinks.phone}
                </p>
              </a>

              <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5">
                <MapPin className="h-6 w-6 text-amber-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 break-words text-sm font-medium leading-6 text-white">
                  {contactLinks.location}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={contactLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1877F2]/20 transition-transform hover:-translate-y-0.5"
              >
                <Facebook className="h-4 w-4" />
                Facebook
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={contactLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-full bg-[#FF0000] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF0000]/20 transition-transform hover:-translate-y-0.5"
              >
                <Youtube className="h-4 w-4" />
                YouTube
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              {language === "en" ? "Profile summary" : "Tóm tắt hồ sơ"}
            </p>
            <h3 className="mt-4 text-3xl font-display font-bold text-slate-950">
              {content.contact.profileSummary}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              {content.contact.overview}
            </p>

            <div className="mt-8 space-y-4">
              {content.contact.points.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
