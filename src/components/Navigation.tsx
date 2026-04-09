import { useEffect, useState } from "react";
import { Download, Languages, Menu, X } from "lucide-react";
import { cvUrl, getCvContent, type Language } from "../data/cv";

type NavigationProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Navigation({
  language,
  onLanguageChange,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = getCvContent(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] border-b border-white/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 text-slate-900 transition-colors hover:text-sky-700"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold tracking-[0.35em] text-white shadow-lg shadow-slate-900/15">
              PH
            </span>
            <span className="hidden sm:block">
              <span className="block text-xs uppercase tracking-[0.35em] text-slate-500">
                Portfolio
              </span>
              <span className="block text-sm font-semibold">
                {content.hero.role}
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            {content.navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-sky-700 ${
                  isScrolled ? "text-slate-700" : "text-slate-800"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => onLanguageChange(language === "en" ? "vi" : "en")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Languages className="h-4 w-4" />
              {language === "en" ? "VI" : "EN"}
            </button>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {content.hero.viewCv}
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 transition-colors hover:text-sky-700"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              {content.navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="rounded-2xl px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() =>
                  onLanguageChange(language === "en" ? "vi" : "en")
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 font-semibold text-slate-800"
              >
                <Languages className="h-4 w-4" />
                {language === "en" ? "Switch to VI" : "Switch to EN"}
              </button>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 py-2 font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                {content.hero.viewCv}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
