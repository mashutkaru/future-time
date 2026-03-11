import { Building2, GraduationCap, Heart, Landmark, Users } from "lucide-react";

const stats = [
  { key: "Central Government", icon: Landmark, color: "text-blue-600", bg: "bg-blue-50" },
  { key: "Local Government", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { key: "Health System", icon: Heart, color: "text-rose-600", bg: "bg-rose-50" },
  { key: "Civil Society", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
  { key: "Academia & Research", icon: GraduationCap, color: "text-violet-600", bg: "bg-violet-50" },
];

export default function StatsBar({ counts, total }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
          <Users className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">{total}</p>
          <p className="text-xs text-slate-500">Total</p>
        </div>
      </div>

      {stats.map(({ key, icon: Icon, color, bg }) => (
        <div key={key} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{counts[key] || 0}</p>
            <p className="truncate text-xs text-slate-500">{key.split(" ")[0]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
