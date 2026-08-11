interface SkillBadgeProps {
  skill: string;
  category?:
    | "frontend"
    | "backend"
    | "tools"
    | "concepts"
    | "uiux"
    | "programming"
    | "database"
    | "engineering";
}

const categoryColors = {
  programming: "bg-sky-50 text-sky-700 border-sky-100",
  frontend: "bg-indigo-50 text-indigo-700 border-indigo-100",
  backend: "bg-emerald-50 text-emerald-700 border-emerald-100",
  database: "bg-cyan-50 text-cyan-700 border-cyan-100",
  engineering: "bg-purple-50 text-purple-700 border-purple-100",
  tools: "bg-amber-50 text-amber-700 border-amber-100",
  concepts: "bg-slate-50 text-slate-700 border-slate-200",
  uiux: "bg-purple-50 text-purple-700 border-purple-100",
};

export default function SkillBadge({
  skill,
  category = "frontend",
}: SkillBadgeProps) {
  return (
    <span
      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${
        categoryColors[category] || categoryColors.frontend
      }`}
    >
      {skill}
    </span>
  );
}


