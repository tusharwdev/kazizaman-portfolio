"use client";

import { ArrowRight, Mail, MessageSquare, Globe, Sparkles, FileText, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Hero() {
  const { portfolioData } = usePortfolio();
  const { developer } = portfolioData;

  const displayName = developer.name_en || developer.name || "Kazi Zaman";

  const corePillars = [
    { title: "Website Specialist", color: "from-blue-500 to-indigo-500" },
    { title: "Full-Stack Software Developer", color: "from-emerald-500 to-teal-500" },
    { title: "Journalist", color: "from-amber-500 to-orange-500" },
    { title: "Video Creator", color: "from-purple-500 to-pink-500" },
    { title: "Creative Ideation", color: "from-yellow-400 to-amber-500" },
    { title: "Keen Observation", color: "from-cyan-400 to-blue-500" },
    { title: "Critical Thinking", color: "from-pink-500 to-rose-500" },
    { title: "Investigative Research", color: "from-indigo-500 to-purple-500" },
    { title: "High-Focus Execution", color: "from-emerald-400 to-cyan-500" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-purple-600/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Info Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-semibold shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Multidisciplinary Professional &amp; Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block py-1">
                {displayName}
              </span>
            </h1>

            {/* Role Title */}
            <p className="text-base sm:text-lg font-bold text-slate-200 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
              <span className="text-indigo-400">BSS (Honours) Social Work</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400">Web &amp; Software Developer</span>
              <span className="text-slate-600">•</span>
              <span className="text-pink-400">Video Creator &amp; Digital Marketer</span>
            </p>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mx-auto lg:mx-0">
              {developer.bio}
            </p>

            {/* 9 Pillars Badges Showcase */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>৯টি সম-গুরুত্বসম্পন্ন মূল স্তম্ভ (9 Equal Core Competencies):</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {corePillars.map((pillar, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-semibold hover:border-indigo-500/50 hover:text-white transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{pillar.title}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="/jibon-brittanto"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5 text-white" />
                <span>অফিসিয়াল জীবন বৃত্তান্ত (CV)</span>
              </a>

              <a
                href="#competencies"
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-indigo-500/50 text-indigo-300 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>৯টি প্রধান যোগ্যতা দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">Connect:</span>
              <a href={developer.github || "https://github.com/tusharwdev"} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={developer.fiverr || "https://fiverr.com"} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="Fiverr">
                <Globe className="w-5 h-5 text-emerald-400" />
              </a>
              <a href={`mailto:${developer.email || "contact@kazizaman.online"}`} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl rotate-3 opacity-30 blur-lg animate-pulse" />

              {/* Card Container */}
              <div className="relative w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-bold">{developer.domain || "kazizaman.online"}</span>
                </div>

                {/* Main Photo Frame */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                  style={{ height: `${developer.heroPhoto?.frameHeight || 320}px` }}
                >
                  <img
                    src={developer.heroPhoto?.url || "/gallery/hero-bike.jpg?v=20261119_v5"}
                    alt={displayName}
                    className="w-full h-full object-cover transition-transform duration-200"
                    style={{
                      objectPosition: `${developer.heroPhoto?.positionX ?? 50}% ${developer.heroPhoto?.positionY ?? 20}%`,
                      transform: `scale(${developer.heroPhoto?.scale ?? 1.05}) translate(${((developer.heroPhoto?.positionX ?? 50) - 50) * 1.2}%, ${((developer.heroPhoto?.positionY ?? 20) - 50) * 1.2}%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 font-bold backdrop-blur-sm">
                      {developer.heroPhoto?.badgeLeftText || "● Official Portfolio"}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-indigo-300 border border-slate-700 font-bold backdrop-blur-sm">
                      {developer.heroPhoto?.badgeRightText || "9 Core Pillars"}
                    </span>
                  </div>
                </div>

                {/* User Info Footer */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={developer.heroPhoto?.avatarUrl || developer.heroPhoto?.url || "/gallery/hero-bike.jpg?v=20261119_v5"}
                        alt={displayName}
                        className="w-10 h-10 rounded-xl object-cover border-2 border-indigo-500 shadow-md"
                        style={{
                          objectPosition: `${developer.heroPhoto?.positionX ?? 50}% ${(developer.heroPhoto?.positionY ?? 20) * 0.8}%`,
                          transform: `scale(${developer.heroPhoto?.scale ?? 1.05}) translate(${((developer.heroPhoto?.positionX ?? 50) - 50) * 0.5}%, ${((developer.heroPhoto?.positionY ?? 20) - 50) * 0.5}%)`,
                        }}
                      />
                      <div>
                        <h3 className="font-bold text-white text-sm leading-tight">{displayName}</h3>
                        <p className="text-[11px] text-indigo-400 font-mono">{developer.heroPhoto?.subtitle || "Multidisciplinary Professional"}</p>
                      </div>
                    </div>

                    <span className="text-xs text-slate-400 font-mono">{developer.heroPhoto?.locationText || developer.location || "Bangladesh"}</span>
                  </div>

                  {/* Verification Seal & Education Badge for Job Applications */}
                  <div className="space-y-2">
                    <div className="bg-indigo-950/80 border border-indigo-800/60 p-3 rounded-xl flex items-center gap-2.5 text-xs text-indigo-200 font-bengali shadow-md">
                      <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                      <div>
                        <span className="font-bold block text-white text-xs">{developer.heroPhoto?.degreeTitle || "শিক্ষা (Academic Degree):"}</span>
                        <span className="text-indigo-300 font-semibold text-[11px]">{developer.heroPhoto?.degreeText || "B.S.S. Honours in Social Work (৩য় বর্ষ), জাতীয় বিশ্ববিদ্যালয়"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
