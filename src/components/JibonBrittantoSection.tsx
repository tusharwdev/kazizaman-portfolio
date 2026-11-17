"use client";

import {
  Phone,
  MessageCircle,
  ExternalLink,
  Calendar,
  Ruler,
  UserCheck,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  ShieldCheck,
  Printer,
  FileCheck,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import Link from "next/link";

export default function JibonBrittantoSection() {
  const { portfolioData } = usePortfolio();
  const { developer, jibon_brittanto: jb } = portfolioData;

  const displayName = developer.name || "কাজী বদরুদ্দোজ জামান তুষার";

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="bio" className="py-12 bg-slate-100 text-slate-900 font-bengali min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* SECTION HEADER TITLE */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-800 bg-indigo-100 px-4 py-1.5 rounded-full border border-indigo-200 inline-block shadow-sm">
            জীবন বৃত্তান্ত (Bengali Bio &amp; Credentials)
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 bg-clip-text text-transparent inline-block py-1">
              {displayName}
            </span>
          </h2>

          <p className="text-slate-600 font-semibold text-base sm:text-lg max-w-2xl mx-auto">
            পেশাগত অভিজ্ঞতা, পোর্টফোলিও, শিক্ষাগত যোগ্যতা ও পারিবারিক পরিচিতি বিবরণী।
          </p>
        </div>

        {/* ACTION TOOLBAR (PRINT / ADMIN EDIT) */}
        <div className="no-print bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>প্রফেশনাল জীবন বৃত্তান্ত বায়োডাটা নথি (kazizaman.online)</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>পিডিএফ / প্রিন্ট নামান</span>
            </button>

            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 font-semibold text-xs sm:text-sm transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-indigo-600" />
              <span>তথ্য এডিট করুন</span>
            </Link>
          </div>
        </div>

        {/* MAIN CV WHITE DOCUMENT CONTAINER */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-xl shadow-slate-200/60 space-y-10">

          {/* 1. HERO HEADER CARD */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>ব্যক্তিগত ও পেশাগত তথ্য</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight pt-1">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                    {displayName}
                  </span>
                </h1>

                <p className="text-indigo-200 font-semibold text-base sm:text-lg">
                  {developer.title || "প্রফেশনাল ফ্রিল্যান্সার ও ফুল-স্ট্যাক ওয়েব ডেভেলপার"}
                </p>
              </div>

              {/* Direct Actions */}
              <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${developer.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>{developer.phone || "০১৭৮৬২৪২০৪৬"}</span>
                </a>

                <a
                  href={developer.whatsapp || "https://wa.me/8801786242046"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-indigo-800/60 text-xs">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <span className="text-indigo-200 block text-[11px] font-semibold">জন্ম তারিখ</span>
                <span className="font-bold text-white text-sm">{developer.birth_date || "২২/০১/১৯৯৮"}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <span className="text-indigo-200 block text-[11px] font-semibold">উচ্চতা</span>
                <span className="font-bold text-white text-sm">{developer.height || "5'6\""}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <span className="text-indigo-200 block text-[11px] font-semibold">অবস্থান</span>
                <span className="font-bold text-white text-sm">{developer.location || "বাংলাদেশ"}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <span className="text-indigo-200 block text-[11px] font-semibold">ওয়েবসাইট ডোমেইন</span>
                <span className="font-bold text-indigo-300 text-sm font-mono">{developer.domain || "kazizaman.online"}</span>
              </div>
            </div>
          </div>

          {/* 2. SUMMARY / BIO BRIEF */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>সংক্ষিপ্ত সারসংক্ষেপ (Professional Summary)</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {developer.bio}
            </p>
          </div>

          {/* 3. TWO COLUMN DETAILED SECTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* COLUMN 1: PORTFOLIO & WORK EXPERIENCE */}
            <div className="space-y-8">

              {/* Online Portfolio */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
                  <Award className="w-5 h-5 text-indigo-700" />
                  <h2 className="text-lg font-bold text-slate-900">অনলাইন পোর্টফোলিও লিংকসমূহ</h2>
                </div>

                <div className="space-y-3">
                  {jb.portfolio.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 hover:border-indigo-300 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</div>
                        {item.role && <div className="text-xs font-semibold text-indigo-800">{item.role}</div>}
                        {item.status && <div className="text-xs font-semibold text-emerald-700">{item.status}</div>}
                      </div>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs flex items-center gap-1 shadow-sm no-print"
                        >
                          <span>লিংক দেখুন</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
                  <Briefcase className="w-5 h-5 text-indigo-700" />
                  <h2 className="text-lg font-bold text-slate-900">পেশাগত অভিজ্ঞতা ও কর্মসংস্থান</h2>
                </div>

                <div className="space-y-3">
                  {jb.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-indigo-300 transition-colors"
                    >
                      <div className="font-bold text-slate-900 text-sm sm:text-base">{exp.role}</div>
                      <div className="text-xs text-slate-600 font-medium">{exp.company}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLUMN 2: EDUCATION, COURSES & FAMILY */}
            <div className="space-y-8">

              {/* Education & Courses */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
                  <GraduationCap className="w-5 h-5 text-indigo-700" />
                  <h2 className="text-lg font-bold text-slate-900">শিক্ষাগত যোগ্যতা ও পেশাগত কোর্স</h2>
                </div>

                <div className="space-y-4">
                  {/* Latest Education */}
                  <div className="p-4 rounded-xl bg-indigo-900 text-white space-y-1 shadow-sm">
                    <div className="text-xs text-indigo-200 font-medium">সর্বশেষ শিক্ষা:</div>
                    <div className="font-bold text-sm sm:text-base">{jb.education}</div>
                  </div>

                  {/* Completed Courses */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">সম্পন্নকৃত কোর্সসমূহ:</div>
                    <div className="space-y-2">
                      {jb.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 font-semibold"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Background */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
                  <Users className="w-5 h-5 text-indigo-700" />
                  <h2 className="text-lg font-bold text-slate-900">পারিবারিক পরিচিতি</h2>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block">পিতা:</span>
                    <span className="font-semibold text-slate-900">{jb.family.father}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block">মাতা:</span>
                    <span className="font-semibold text-slate-900">{jb.family.mother}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block">মামা:</span>
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{jb.family.uncle}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-slate-500 block">ভাই ও বোনসমূহ:</span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-semibold">
                      {jb.family.siblings.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* DECLARATION FOOTER */}
          <div className="pt-8 border-t-2 border-slate-200 space-y-6 text-slate-700">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs sm:text-sm text-center font-semibold italic">
              &quot;উপরে উল্লেখিত সমস্ত তথ্য আমার জ্ঞান ও বিশ্বাস মতে সম্পূর্ণ সত্য এবং সঠিক।&quot;
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 pt-2">
              <div className="space-y-1 text-xs">
                <span className="font-bold text-slate-900 block">অফিশিয়াল ওয়েবসাইট ডোমেইন:</span>
                <span className="font-mono text-indigo-700 font-bold text-sm block">{developer.domain || "kazizaman.online"}</span>
                <span className="text-slate-500 font-medium block">ইমেইল: {developer.email || "contact@kazizaman.online"}</span>
              </div>

              <div className="text-right space-y-1">
                <div className="w-36 h-0.5 bg-slate-900 ml-auto" />
                <span className="font-bold text-slate-900 text-sm block">{displayName}</span>
                <span className="text-xs text-slate-500 font-medium block">স্বাক্ষর / প্রত্যায়নকারী</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
