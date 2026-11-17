"use client";

import { Phone, MessageCircle, ExternalLink, Calendar, Ruler, UserCheck, Briefcase, GraduationCap, Award, Users, HeartHandshake, ShieldCheck } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function JibonBrittantoSection() {
  const { portfolioData } = usePortfolio();
  const { developer, jibon_brittanto: jb } = portfolioData;

  const displayName = developer.name || developer.name_en || "কাজী বদরুদ্দোজ জামান তুষার";

  return (
    <section id="bio" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-4 py-1.5 rounded-full border border-indigo-800/60 shadow-md inline-block">
            জীবন বৃত্তান্ত (Bengali Bio &amp; Credentials)
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent inline-block py-1">
              {displayName}
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl font-medium max-w-2xl mx-auto">
            পেশাগত অভিজ্ঞতা, পোর্টফোলিও, শিক্ষাগত যোগ্যতা ও পারিবারিক পরিচিতি বিবরণী।
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-800/40 p-6 sm:p-10 shadow-2xl shadow-indigo-950/40">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>ব্যক্তিগত ও পেশাগত তথ্য</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                    {displayName}
                  </span>
                </h3>

                <p className="text-indigo-300 font-semibold text-base sm:text-lg">
                  {developer.title || "প্রফেশনাল ফ্রিল্যান্সার ও ফুল-স্ট্যাক ওয়েব ডেভেলপার"}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${developer.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-indigo-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>{developer.phone || "০১৭৮৬২৪২০৪৬"}</span>
                </a>

                <a
                  href={developer.whatsapp || "https://wa.me/8801786242046"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-emerald-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="/jibon-brittanto"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-indigo-500/40 text-indigo-300 hover:text-white hover:border-indigo-500 font-semibold text-xs sm:text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>পূর্ণাঙ্গ জীবন বৃত্তান্ত পেইজ</span>
                </a>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-indigo-900/40">
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">জন্ম তারিখ</div>
                  <div className="text-sm font-bold text-white">{developer.birth_date || "২২/০১/১৯৯৮"}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/50">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">উচ্চতা</div>
                  <div className="text-sm font-bold text-white">{developer.height || "5'6\""}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-pink-950 text-pink-400 border border-pink-800/50">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">ওয়েবসাইট লিঙ্ক</div>
                  <div className="text-sm font-bold text-indigo-300">{developer.domain || "kazizaman.online"}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">ইমেইল ঠিকানা</div>
                  <div className="text-xs font-mono font-bold text-slate-200">{developer.email || "contact@kazizaman.online"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Column 1: Portfolio & Experience */}
          <div className="space-y-8">

            {/* Portfolio Links */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">পোর্টফোলিও লিংক (অনলাইন)</h3>
              </div>

              <div className="space-y-3">
                {jb.portfolio.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-white text-sm">{item.title}</div>
                      {item.role && <div className="text-xs text-indigo-300 font-mono">{item.role}</div>}
                      {item.status && <div className="text-xs text-emerald-400 font-mono">{item.status}</div>}
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-indigo-950 hover:bg-indigo-900 text-indigo-300 border border-indigo-800/60 text-xs font-mono flex items-center gap-1"
                      >
                        <span>ভিজিট করুন</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-800">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">পেশাগত কাজের অভিজ্ঞতা</h3>
              </div>

              <div className="space-y-3">
                {jb.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-white text-sm">{exp.role}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{exp.company}</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Education & Family */}
          <div className="space-y-8">

            {/* Education & Courses */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-pink-950 text-pink-400 border border-pink-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">শিক্ষাগত যোগ্যতা ও প্রশিক্ষণ</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60 space-y-1">
                  <div className="text-xs text-indigo-400 font-mono">সর্বশেষ শিক্ষা:</div>
                  <div className="font-bold text-white text-sm sm:text-base">{jb.education}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">সম্পন্নকৃত কোর্সসমূহ:</div>
                  <div className="space-y-2">
                    {jb.courses.map((course, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Family Background */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">পারিবারিক পরিচিতি</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-xs text-slate-400">পিতা:</div>
                  <div className="font-semibold text-white">{jb.family.father}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-xs text-slate-400">মাতা:</div>
                  <div className="font-semibold text-white">{jb.family.mother}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-xs text-slate-400">মামা:</div>
                  <div className="text-xs text-slate-300 leading-relaxed">{jb.family.uncle}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="text-xs text-slate-400">ভাই ও বোনসমূহ:</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {jb.family.siblings.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
