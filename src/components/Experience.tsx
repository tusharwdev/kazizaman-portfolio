"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Experience() {
  const { portfolioData } = usePortfolio();
  const { work_experiences: experiences, education_list: education } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Journey & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-slate-400 text-base">
            My professional path as a developer and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-900">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                    </div>

                    <p className="text-sm text-slate-300">{exp.description}</p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-900">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {edu.location}</span>
                    </div>

                    <p className="text-sm text-slate-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
