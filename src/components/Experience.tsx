"use client";

import { Briefcase, MapPin, Building2, Calendar } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Experience() {
  const { portfolioData } = usePortfolio();
  const { work_experiences: experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3.5 py-1.5 rounded-full border border-indigo-800/50">
            Career & Industry Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base">
            My professional software engineering journey, mobile app development, and full-stack projects.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-indigo-400 transition-all shadow-md shadow-indigo-500/20" />

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-indigo-500/50 transition-all shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-400 shrink-0" />
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono flex-wrap">
                      <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/80 font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block">Key Responsibilities & Achievements:</span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
