import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import type { Language } from "./data/cv";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
