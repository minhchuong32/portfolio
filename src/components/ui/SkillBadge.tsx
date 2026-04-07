interface SkillBadgeProps {
  skill: string;
  category?: 'frontend' | 'backend' | 'tools' | 'concepts';
}

const categoryColors = {
  frontend: 'bg-blue-50 text-blue-700 border-blue-200',
  backend: 'bg-green-50 text-green-700 border-green-200',
  tools: 'bg-orange-50 text-orange-700 border-orange-200',
  concepts: 'bg-slate-50 text-slate-700 border-slate-200',
};

export default function SkillBadge({ skill, category = 'frontend' }: SkillBadgeProps) {
  return (
    <span
      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${categoryColors[category]}`}
    >
      {skill}
    </span>
  );
}
