import { Briefcase, Building2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const sectorColors = {
  "Central Government":  { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500", cardBorder: "border-blue-300", headerAccent: "border-b-blue-400" },
  "Local Government":    { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500", cardBorder: "border-emerald-300", headerAccent: "border-b-emerald-400" },
  "Health System":       { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", dot: "bg-rose-500", cardBorder: "border-rose-300", headerAccent: "border-b-rose-400" },
  "Civil Society":       { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500", cardBorder: "border-amber-300", headerAccent: "border-b-amber-400" },
  "Academia & Research": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500", cardBorder: "border-violet-300", headerAccent: "border-b-violet-400" }
};

function initials(name) {
  return (name || "?")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ParticipantCard({ participant, index }) {
  const colors = sectorColors[participant.sector_english] || sectorColors["Central Government"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className={`overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-xl ${colors.cardBorder}`}
    >
      <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 text-4xl font-bold text-white">
        {initials(participant.name_english)}
      </div>

      <div className={`border-t-4 p-4 ${colors.headerAccent}`}>
        <div className="mb-3 text-center">
          <h3 className="text-base font-semibold leading-tight text-slate-900">
            {participant.name_english}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-slate-500" dir="rtl">
            {participant.name_hebrew}
          </p>
        </div>

        <div className="mb-3 flex justify-center">
          <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium ${colors.bg} ${colors.text} ${colors.border}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
            {participant.sector_english}
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5">
            <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div className="min-w-0">
              <p className="truncate text-sm leading-tight text-slate-700">{participant.organization_english}</p>
              <p className="mt-0.5 truncate text-xs text-slate-400" dir="rtl">{participant.organization_hebrew}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div className="min-w-0">
              <p className="text-sm leading-tight text-slate-700">{participant.role_english}</p>
              <p className="mt-0.5 text-xs text-slate-400" dir="rtl">{participant.role_hebrew}</p>
            </div>
          </div>

          {participant.email ? (
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-slate-400" />
              <a href={`mailto:${participant.email}`} className="truncate text-sm text-indigo-600 transition-colors hover:text-indigo-800">
                {participant.email}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
