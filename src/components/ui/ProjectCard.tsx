import { Calendar, Users, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  techStack: string;
  achievements: string[];
  teamSize?: string;
  github?: string; 
}

export default function ProjectCard({
  title,
  subtitle,
  duration,
  description,
  techStack,
  achievements,
  teamSize,
  github, 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
            {teamSize && (
              <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                {teamSize}
              </span>
            )}

            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-blue-700">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
          </div>
        </div>

        {/* Subtitle + Description */}
        <p className="text-sm font-medium text-gray-500 mb-3">{subtitle}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

        {/* Tech stack */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-700">Tech Stack: </span>
          <span className="text-sm text-gray-600">{techStack}</span>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-200"
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