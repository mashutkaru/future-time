import { motion } from "framer-motion";

const goals = [
  {
    title: "Shared Ecosystem Language",
    description: "Develop a common professional language across the aging ecosystem.",
    icon: "💬"
  },
  {
    title: "Shared Future Vision",
    description: "Build a collective vision for the future of aging in Israel.",
    icon: "🔭"
  },
  {
    title: "Cross-Sector Collaboration",
    description: "Strengthen collaboration between organizations and systems.",
    icon: "🤝"
  },
  {
    title: "Joint Initiatives",
    description: "Develop and lead collaborative initiatives that advance optimal aging in Israel.",
    icon: "🚀"
  }
];

const partners = [
  "Prime Minister's Office",
  "Ministry of Welfare and Social Security",
  "Ministry of Health",
  "Ministry for Social Equality",
  "Ministry of Finance",
  "National Insurance Institute",
  "Local Government",
  "JDC Israel (Eshel and Elka)"
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a2980] to-[#0d1560]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-[#f5b800] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#4a90d9] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5b800]/30 bg-[#f5b800]/15 px-4 py-1.5 text-sm font-semibold text-[#f5b800]">
              Third Cohort · Tokyo, Japan · 2026
            </div>
            <h1 className="mb-4 text-5xl font-black tracking-tight text-white md:text-6xl">
              FUTURE<span className="text-[#f5b800]">TIME</span>
            </h1>
            <p className="text-xl font-medium text-blue-200">
              A Multi-System Leadership Program for Optimal Aging
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="overflow-hidden rounded-3xl bg-[#1a2980] shadow-xl">
            <div className="border-b border-white/10 px-8 py-6">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white">Background</h2>
            </div>
            <div className="space-y-5 p-8 text-lg leading-relaxed text-blue-100">
              <p>
                Preparing for an era in which people may live 100 years is one of the strategic challenges facing the State of Israel in the coming decades.
              </p>
              <p>
                Optimal preparation requires synergistic collaboration between systems and between people who share a common language, professional perspective, and a shared vision for the future.
              </p>
              <p>
                Future Time is part of the national program designed to build human capital reserves for Israel's public service sector.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="rounded-3xl border-2 border-[#1a2980] bg-white p-10 text-center shadow-lg">
            <div className="mb-4 text-5xl">🎯</div>
            <h2 className="mb-4 text-2xl font-bold text-[#1a2980]">Program Objective</h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
              To establish a network of <strong className="text-[#1a2980]">30 senior leaders</strong> from diverse sectors, working together to promote optimal aging in Israel.
            </p>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#1a2980]">Program Goals</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                style={{ borderLeft: "4px solid #f5b800" }}
              >
                <div className="mb-3 text-3xl">{goal.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#1a2980]">{goal.title}</h3>
                <p className="leading-relaxed text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#1a2980]">Program Partners</h2>
          <div className="rounded-3xl bg-[#1a2980] p-8 shadow-lg">
            <div className="grid gap-3 sm:grid-cols-2">
              {partners.map((partner) => (
                <div key={partner} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#f5b800]" />
                  <span className="text-sm font-medium text-blue-100">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
