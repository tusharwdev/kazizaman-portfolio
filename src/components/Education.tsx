"use client";

import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Calendar } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Education() {
  const { portfolioData } = usePortfolio();
  const { education_list: education, jibon_brittanto: jb } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-purple-800/50">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-base">
            Academic degrees, software engineering training, and professional development courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Academic Degree Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Academic Degree</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-purple-500/50 transition-all shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-purple-950 text-purple-300 border border-purple-900 font-bold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
                    <span className="text-purple-300 font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {edu.location}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Courses & Certifications Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Courses</h3>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Completed Training & Certifications:
              </div>

              <div className="space-y-3">
                {jb.courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm sm:text-base text-slate-200 flex items-start gap-3 font-medium hover:border-indigo-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
