"use client";

import { Smartphone, Globe, Database, Wrench } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Skills() {
  const { portfolioData } = usePortfolio();
  const { skills: skillCategories } = portfolioData;

  const categoryIcons: Record<string, typeof Smartphone> = {
    "Android & Mobile": Smartphone,
    "Web Development": Globe,
    "Backend & Database": Database,
    "Tools & Architecture": Wrench,
  };

  const categoryColors = [
    "from-emerald-500 to-teal-600",
    "from-indigo-500 to-purple-600",
    "from-purple-500 to-pink-600",
    "from-blue-500 to-indigo-600",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Skills & Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technologies I Excel At
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set across native mobile app development, modern front-end web frameworks, and backend services.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Wrench;
            const colorClass = categoryColors[idx % categoryColors.length];
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
