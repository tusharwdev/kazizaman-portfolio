"use client";

import { Smartphone, Globe, Newspaper, BrainCircuit, Target, Video, SearchCheck, Code2, Wrench } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Skills() {
  const { portfolioData } = usePortfolio();
  const { skills: skillCategories } = portfolioData;

  const defaultMultidisciplinaryCategories = [
    {
      category: "Software & Web Engineering",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      items: [
        { name: "Website Architecture & UX (Website Specialist)", level: 95 },
        { name: "Kotlin & Android Jetpack Compose", level: 90 },
        { name: "Next.js, React.js & TypeScript", level: 92 },
        { name: "PHP & Laravel RESTful APIs", level: 88 },
        { name: "Tailwind CSS & Responsive Layouts", level: 95 },
      ],
    },
    {
      category: "Journalism & Media Production",
      icon: Newspaper,
      color: "from-amber-500 to-red-600",
      items: [
        { name: "Journalism & News Writing", level: 92 },
        { name: "Digital Video Creation & Editing", level: 88 },
        { name: "Editorial Management & Curation", level: 90 },
        { name: "Media Communication & Broadcasting", level: 85 },
        { name: "Public Content Strategy", level: 90 },
      ],
    },
    {
      category: "Analytical & Cognitive Mastery",
      icon: BrainCircuit,
      color: "from-purple-500 to-pink-600",
      items: [
        { name: "Investigative Research & Fact-Checking", level: 94 },
        { name: "Keen Observation & Detail Analysis", level: 96 },
        { name: "Critical Thinking & Decision Making", level: 92 },
        { name: "Creative Ideation & Concept Design", level: 95 },
        { name: "Strategic Problem Solving", level: 90 },
      ],
    },
    {
      category: "Execution & Engineering Tools",
      icon: Target,
      color: "from-emerald-500 to-teal-600",
      items: [
        { name: "High-Focus Deadline Execution", level: 98 },
        { name: "Git, GitHub & Version Control", level: 90 },
        { name: "Android Studio & VS Code", level: 95 },
        { name: "Clean Architecture & System Design", level: 88 },
        { name: "Laragon & Local Dev Servers", level: 92 },
      ],
    },
  ];

  const categoriesToRender = skillCategories && skillCategories.length >= 4 ? skillCategories : defaultMultidisciplinaryCategories;

  const categoryIcons: Record<string, typeof Smartphone> = {
    "Android & Mobile": Smartphone,
    "Web Development": Globe,
    "Backend & Database": Code2,
    "Tools & Architecture": Wrench,
    "Software & Web Engineering": Code2,
    "Journalism & Media Production": Newspaper,
    "Analytical & Cognitive Mastery": BrainCircuit,
    "Execution & Engineering Tools": Target,
  };

  const categoryColors = [
    "from-blue-500 to-indigo-600",
    "from-amber-500 to-red-600",
    "from-purple-500 to-pink-600",
    "from-emerald-500 to-teal-600",
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Skills & Competency Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical &amp; Professional Skills
          </h2>
          <p className="text-slate-300 text-base font-bengali">
            সফটওয়্যার ডেভেলপমেন্ট, সাংবাদিকতা, ভিডিও তৈরি, রিচার্জ এবং এক্সিকিউশন - সকল বিষয়ের উপর ভারসাম্যপূর্ণ দক্ষতা।
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoriesToRender.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Wrench;
            const colorClass = categoryColors[idx % categoryColors.length];
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-r ${colorClass} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
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
