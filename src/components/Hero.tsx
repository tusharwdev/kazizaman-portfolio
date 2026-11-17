"use client";

import { ArrowRight, Mail, MessageSquare, Smartphone, Globe, Sparkles, FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Hero() {
  const { portfolioData } = usePortfolio();
  const { developer } = portfolioData;

  const displayName = developer.name_en || developer.name || "Kazi Zaman";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{developer.statusBadge || "Available for Freelance & Android Projects"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block py-1">
                {displayName}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Smartphone className="w-6 h-6" /> {developer.title ? developer.title.split("&")[0] : "Android Specialist"}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-purple-400">
                <Globe className="w-6 h-6" /> {developer.title && developer.title.includes("&") ? developer.title.split("&")[1] : "Full-Stack Web"}
              </span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {developer.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="/jibon-brittanto"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>জীবন বৃত্তান্ত</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>View Portfolio</span>
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
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <a href={developer.github || "https://github.com"} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="GitHub">
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

          {/* Graphic / Photo Avatar Card */}
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
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                  <img
                    src="/gallery/photo-1.jpg"
                    alt={displayName}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 font-bold backdrop-blur-sm">
                      ● Online
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-indigo-300 border border-slate-700 font-bold backdrop-blur-sm">
                      Android &amp; Web
                    </span>
                  </div>
                </div>

                {/* User Info Footer */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <img
                      src="/gallery/photo-3.jpg"
                      alt={displayName}
                      className="w-10 h-10 rounded-xl object-cover border-2 border-indigo-500 shadow-md"
                    />
                    <div>
                      <h3 className="font-bold text-white text-sm leading-tight">{displayName}</h3>
                      <p className="text-[11px] text-indigo-400 font-mono">{developer.title || "Software Developer"}</p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-mono">Based in {developer.location || "Bangladesh"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
