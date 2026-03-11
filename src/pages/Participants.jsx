import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";
import ParticipantCard from "@/components/participants/ParticipantCard";
import SearchBar from "@/components/participants/SearchBar";
import SectorFilter from "@/components/participants/SectorFilter";
import StatsBar from "@/components/participants/StatsBar";
import { participants as participantData } from "@/data/participants";

export default function Participants() {
  const [sector, setSector] = useState("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    const c = {};
    participantData.forEach((p) => {
      c[p.sector_english] = (c[p.sector_english] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(() => {
    let list = participantData;

    if (sector !== "all") {
      list = list.filter((p) => p.sector_english === sector);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name_english?.toLowerCase().includes(q) ||
          p.name_hebrew?.includes(search) ||
          p.organization_english?.toLowerCase().includes(q) ||
          p.organization_hebrew?.includes(search) ||
          p.role_english?.toLowerCase().includes(q) ||
          p.email?.toLowerCase().includes(q)
      );
    }

    return list;
  }, [search, sector]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-purple-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Participants Directory
              </h1>
              <p className="mt-1 text-sm text-indigo-200 md:text-base">
                Browse and search all program participants across sectors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <StatsBar counts={counts} total={participantData.length} />

        <div className="mt-8 space-y-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <SectorFilter selected={sector} onSelect={setSector} counts={counts} />
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-700">{filtered.length}</span> participant{filtered.length !== 1 ? "s" : ""}
            {sector !== "all" ? (
              <span> in <span className="font-medium text-indigo-600">{sector}</span></span>
            ) : null}
          </p>
        </div>

        <div className="mt-6 pb-16">
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Users className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-700">No participants found</h3>
              <p className="mt-1 text-slate-500">Try adjusting your search or filter</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((participant, i) => (
                  <ParticipantCard key={participant.id} participant={participant} index={i} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
