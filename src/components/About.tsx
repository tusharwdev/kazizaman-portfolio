"use client";

import { Cpu, CheckCircle2, Award, Users, Rocket, Sparkles, BookOpen, Newspaper } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function About() {
  const { portfolioData } = usePortfolio();
  const { developer, stats: dataStats } = portfolioData;

  const displayName = developer.name_en || developer.name || "Kazi Zaman";

  const statsList = [
    { label: "Years Experience", value: dataStats.experience_years || "3+", icon: Award },
    { label: "Projects Completed", value: dataStats.projects_completed || "15+", icon: Rocket },
    { label: "Satisfied Clients", value: dataStats.satisfied_clients || "100%", icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            About Me &amp; Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Multidisciplinary Specialist Driven by Analytical &amp; Technical Excellence
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-bengali">
            সফটওয়্যার ইঞ্জিনিয়ারিং, অনলাইন সাংবাদিকতা, ভিডিও কন্টেন্ট ক্রিয়েশন ও গবেষণা সক্ষমতার এক অনন্য মেলবন্ধন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Stats & Cards Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {statsList.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center hover:border-indigo-500/50 transition-all hover:scale-105"
                  >
                    <Icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Core Pillars Overview Card */}
            <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/40 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Multidisciplinary Expertise</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Website &amp; Full-Stack Dev:</strong> Scalable Next.js, React, Kotlin Android &amp; Laravel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Journalism &amp; Video Production:</strong> News reporting, editorial writing &amp; video creation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Strategic &amp; Cognitive Skills:</strong> Ideation, Observation, Critical Thinking &amp; Execution.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Description Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Hello! I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {displayName}
              </span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              {developer.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-400 font-mono block font-semibold">Degree (শিক্ষা):</span>
                <span className="text-sm font-semibold text-amber-300">B.S.S. Honours (Social Work)</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block font-semibold">University:</span>
                <span className="text-sm font-semibold text-indigo-300">National University (৩য় বর্ষ)</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block font-semibold">Scope:</span>
                <span className="text-sm font-semibold text-purple-300">Software + Journalism</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block font-semibold">Purpose:</span>
                <span className="text-sm font-semibold text-emerald-300">Govt/Private Job &amp; CV</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
