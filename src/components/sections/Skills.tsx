import SectionTitle from '../ui/SectionTitle';
import SkillBadge from '../ui/SkillBadge';
import { Code, Database, Wrench, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'TailwindCSS', 'Sass', 'Bootstrap'],
      category: 'frontend' as const,
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: ['Node.js (Express)', 'Java Servlet', '.NET (C#)', 'SQL Server', 'MySQL'],
      category: 'backend' as const,
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: ['Git/GitHub', 'Postman', 'Figma', 'VS Code', 'Docker (Basic)', 'GCP/Azure'],
      category: 'tools' as const,
    },
    {
      icon: Lightbulb,
      title: 'Concepts',
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
      skills: ['RESTful API', 'MVC', '3-tier Architecture', 'OOP', 'SOLID', 'CI/CD'],
      category: 'concepts' as const,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.bgColor} p-3 rounded-lg`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} skill={skill} category={category.category} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
