interface SkillBadgeProps {
  skill: string;
  category?: "frontend" | "backend" | "tools" | "concepts";
}

const categoryColors = {
  frontend: "bg-sky-50 text-sky-700 border-sky-100",
  backend: "bg-emerald-50 text-emerald-700 border-emerald-100",
  tools: "bg-amber-50 text-amber-700 border-amber-100",
  concepts: "bg-slate-50 text-slate-700 border-slate-200",
};

export default function SkillBadge({
  skill,
  category = "frontend",
}: SkillBadgeProps) {
  return (
    <span
      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${categoryColors[category]}`}
    >
      {skill}
    </span>
  );
}
