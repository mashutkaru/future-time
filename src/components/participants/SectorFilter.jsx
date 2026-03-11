import { Building2, GraduationCap, Heart, Landmark, LayoutGrid, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = [
  { key: "all", label: "All Sectors", icon: LayoutGrid },
  { key: "Central Government", label: "Central Government", icon: Landmark },
  { key: "Local Government", label: "Local Government", icon: Building2 },
  { key: "Health System", label: "Health System", icon: Heart },
  { key: "Civil Society", label: "Civil Society", icon: Users },
  { key: "Academia & Research", label: "Academia & Research", icon: GraduationCap },
];

export default function SectorFilter({ selected, onSelect, counts }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sectors.map((sector) => {
        const Icon = sector.icon;
        const count =
          sector.key === "all"
            ? Object.values(counts).reduce((a, b) => a + b, 0)
            : counts[sector.key] || 0;

        const active = selected === sector.key;

        return (
          <button
            key={sector.key}
            onClick={() => onSelect(sector.key)}
            className={cn(
              "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition",
              active
                ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{sector.label}</span>
            <span
              className={cn(
                "min-w-[20px] rounded-full px-1.5 py-0.5 text-center text-xs",
                active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
