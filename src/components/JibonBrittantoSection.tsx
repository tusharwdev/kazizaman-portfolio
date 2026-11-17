"use client";

import React, { useState, useEffect } from "react";
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
  Download,
  Eye,
  X,
  FileText,
  MapPin,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import Link from "next/link";
import Image from "next/image";

export default function JibonBrittantoSection() {
  const { portfolioData } = usePortfolio();
  const { developer, jibon_brittanto: jb } = portfolioData;

  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayName = mounted
    ? (developer.name || developer.name_en || "কাজী বদরুদ্দোজ জামান তুষার")
    : (developer.name || "কাজী বদরুদ্দোজ জামান তুষার");

  const certificatesList = jb.certificates || [];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="bio" className="py-12 bg-slate-100 text-slate-900 font-bengali min-h-screen">
      {/* Lightbox / Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center no-print">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-4 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-2">
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span>{selectedImage.title}</span>
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative max-h-[75vh] overflow-auto rounded-2xl flex justify-center bg-slate-950 p-2 border border-slate-800">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <a
                href={selectedImage.url}
                download
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>হাই-রেজোলিউশন অরিজিনাল ডাউনলোড করুন</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* SECTION HEADER TITLE */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-widest text-indigo-900 bg-indigo-100 px-5 py-2 rounded-full border border-indigo-200 inline-block shadow-sm">
            জীবন বৃত্তান্ত (Bengali Bio &amp; Credentials)
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-slate-900">
            <span className="bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-950 bg-clip-text text-transparent inline-block py-1">
              {displayName}
            </span>
          </h2>

          <p className="text-slate-700 font-bold text-lg sm:text-2xl max-w-3xl mx-auto">
            পেশাগত অভিজ্ঞতা, পোর্টফোলিও, শিক্ষাগত যোগ্যতা ও পারিবারিক পরিচিতি বিবরণী।
          </p>
        </div>

        {/* ACTION TOOLBAR (PRINT / ADMIN EDIT) */}
        <div className="no-print bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm sm:text-base font-extrabold text-slate-800">
            <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>প্রফেশনাল জীবন বৃত্তান্ত বায়োডাটা নথি (kazizaman.online)</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105"
            >
              <Printer className="w-5 h-5 text-indigo-400" />
              <span>পিডিএফ / প্রিন্ট নামান</span>
            </button>

            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 font-bold text-sm sm:text-base transition-all"
            >
              <Lock className="w-4 h-4 text-indigo-600" />
              <span>তথ্য এডিট করুন</span>
            </Link>
          </div>
        </div>

        {/* MAIN CV WHITE DOCUMENT CONTAINER */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-slate-200/60 space-y-12">

          {/* 1. HERO HEADER CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 shadow-xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold">
                  <UserCheck className="w-4 h-4" />
                  <span>ব্যক্তিগত ও পেশাগত তথ্য</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                    {displayName}
                  </span>
                </h1>

                <p className="text-indigo-200 font-bold text-lg sm:text-2xl">
                  {developer.title || "প্রফেশনাল ফ্রিল্যান্সার ও ফুল-স্ট্যাক ওয়েব ডেভেলপার"}
                </p>
              </div>

              {/* Direct Actions */}
              <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${developer.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-indigo-600/30 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>{developer.phone || "০১৭৮৬২৪২০৪৬"}</span>
                </a>

                <a
                  href={developer.whatsapp || "https://wa.me/8801786242046"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/30 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-indigo-800/60">
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-indigo-200 block text-xs sm:text-sm font-bold">জন্ম তারিখ</span>
                <span className="font-extrabold text-white text-base sm:text-xl block">{developer.birth_date || "২২/০১/১৯৯৮"}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-indigo-200 block text-xs sm:text-sm font-bold">উচ্চতা</span>
                <span className="font-extrabold text-white text-base sm:text-xl block">{developer.height || "5'6\""}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-indigo-200 block text-xs sm:text-sm font-bold">অবস্থান</span>
                <span className="font-extrabold text-white text-base sm:text-xl block">{developer.location || "বাংলাদেশ"}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-indigo-200 block text-xs sm:text-sm font-bold">ওয়েবসাইট ডোমেইন</span>
                <span className="font-extrabold text-indigo-300 text-base sm:text-xl font-mono block">{developer.domain || "kazizaman.online"}</span>
              </div>
            </div>
          </div>

          {/* 2. SUMMARY / BIO BRIEF */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-700" />
              <span>সংক্ষিপ্ত সারসংক্ষেপ (Professional Summary)</span>
            </h2>
            <p className="text-slate-800 text-base sm:text-xl leading-relaxed font-semibold">
              {developer.bio}
            </p>
          </div>

          {/* 3. TWO COLUMN DETAILED SECTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* COLUMN 1: PORTFOLIO & WORK EXPERIENCE */}
            <div className="space-y-10">

              {/* Online Portfolio */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-3">
                  <Award className="w-7 h-7 text-indigo-700 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">অনলাইন পোর্টফোলিও লিংকসমূহ</h2>
                </div>

                <div className="space-y-4">
                  {jb.portfolio.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 hover:border-indigo-400 transition-colors shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="font-extrabold text-slate-900 text-lg sm:text-xl">{item.title}</div>
                        {item.role && <div className="text-sm sm:text-base font-bold text-indigo-800">{item.role}</div>}
                        {item.status && <div className="text-sm sm:text-base font-bold text-emerald-700">{item.status}</div>}
                      </div>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md no-print hover:scale-105 transition-all"
                        >
                          <span>লিংক দেখুন</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-3">
                  <Briefcase className="w-7 h-7 text-indigo-700 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">পেশাগত অভিজ্ঞতা ও কর্মসংস্থান</h2>
                </div>

                <div className="space-y-4">
                  {jb.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 hover:border-indigo-400 transition-colors shadow-sm"
                    >
                      <div className="font-extrabold text-slate-900 text-lg sm:text-xl">{exp.role}</div>
                      <div className="text-sm sm:text-base text-slate-700 font-bold">{exp.company}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLUMN 2: EDUCATION, COURSES & FAMILY */}
            <div className="space-y-10">

              {/* Education & Courses */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-3">
                  <GraduationCap className="w-7 h-7 text-indigo-700 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">শিক্ষাগত যোগ্যতা ও কোর্স</h2>
                </div>

                <div className="space-y-5">
                  {/* Latest Education */}
                  <div className="p-6 rounded-2xl bg-indigo-900 text-white space-y-2 shadow-md">
                    <div className="text-xs sm:text-sm text-indigo-200 font-bold">সর্বশেষ শিক্ষা:</div>
                    <div className="font-extrabold text-base sm:text-xl leading-snug">{jb.education}</div>
                  </div>

                  {/* Completed Courses */}
                  <div className="space-y-3">
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">সম্পন্নকৃত কোর্সসমূহ:</div>
                    <div className="space-y-3">
                      {jb.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 flex items-start gap-3 font-bold shadow-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Background */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-3">
                  <Users className="w-7 h-7 text-indigo-700 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">পারিবারিক পরিচিতি ও ঠিকানা</h2>
                </div>

                <div className="space-y-4 text-base">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 block">পিতা:</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg">{jb.family.father}</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 block">মাতা:</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg">{jb.family.mother}</span>
                  </div>

                  {jb.family.permanent_address && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                      <span className="text-xs sm:text-sm font-bold text-indigo-900 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-indigo-700" />
                        <span>স্থায়ী ঠিকানা (Permanent Address):</span>
                      </span>
                      <span className="font-extrabold text-slate-900 text-base block pt-0.5">{jb.family.permanent_address}</span>
                    </div>
                  )}

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 block">মামা:</span>
                    <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold block pt-1">{jb.family.uncle}</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 block">ভাই ও বোনসমূহ:</span>
                    <ul className="space-y-2 text-sm sm:text-base text-slate-900 font-bold">
                      {jb.family.siblings.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4. OFFICIAL DOCUMENTS & CERTIFICATES ATTACHMENT SECTION */}
          {certificatesList.length > 0 && (
            <div className="space-y-6 pt-6 border-t-2 border-slate-200">
              <div className="flex items-center justify-between gap-4 border-b-2 border-indigo-600 pb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-emerald-600 shrink-0" />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      অফিসিয়াল চারিত্রিক ও নাগরিকত্ব সনদ এবং কৃতি সার্টিফিকেটসমূহ
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 font-bold">
                      অরিজিনাল কোয়ালিটিতে দেখুন এবং উচ্চ রেজোলিউশনে ডাউনলোড করুন।
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-3.5 py-1.5 rounded-full">
                  {certificatesList.length} টি নথি সংযুক্ত
                </span>
              </div>

              {/* Certificates Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificatesList.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all space-y-3 flex flex-col justify-between group"
                  >
                    <div className="space-y-3 p-4">
                      {/* Image Thumbnail with Overlay Preview */}
                      <div
                        onClick={() => setSelectedImage({ url: cert.imageUrl, title: cert.title })}
                        className="relative h-48 sm:h-52 w-full bg-slate-900 rounded-xl overflow-hidden cursor-pointer group-hover:opacity-95 transition-opacity border border-slate-200"
                      >
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                          <Eye className="w-5 h-5 text-indigo-300" />
                          <span>বড় করে দেখুন</span>
                        </div>
                      </div>

                      {/* Info & Badges */}
                      <div className="space-y-1.5">
                        <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900 border border-indigo-200">
                          {cert.category}
                        </span>

                        <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                          {cert.description}
                        </p>

                        <div className="text-[11px] font-bold text-slate-500 pt-1 border-t border-slate-200">
                          <span>ইস্যুকারী: {cert.issuer}</span> • <span>{cert.issueDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 pt-0 flex items-center gap-2 no-print">
                      <button
                        onClick={() => setSelectedImage({ url: cert.imageUrl, title: cert.title })}
                        className="flex-1 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-slate-700" />
                        <span>প্রিভিউ</span>
                      </button>

                      <a
                        href={cert.imageUrl}
                        download={`${cert.title}.jpg`}
                        className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>ডাউনলোড</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DECLARATION FOOTER */}
          <div className="pt-10 border-t-2 border-slate-200 space-y-8 text-slate-800">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-base sm:text-xl text-center font-extrabold italic text-slate-900">
              &quot;উপরে উল্লেখিত সমস্ত তথ্য আমার জ্ঞান ও বিশ্বাস মতে সম্পূর্ণ সত্য এবং সঠিক।&quot;
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 pt-2">
              <div className="space-y-1 text-sm sm:text-base">
                <span className="font-bold text-slate-900 block">অফিশিয়াল ওয়েবসাইট ডোমেইন:</span>
                <span className="font-mono text-indigo-800 font-extrabold text-base sm:text-lg block">{developer.domain || "kazizaman.online"}</span>
                <span className="text-slate-600 font-semibold block">ইমেইল: {developer.email || "contact@kazizaman.online"}</span>
              </div>

              <div className="text-right space-y-2">
                <div className="w-44 h-0.5 bg-slate-900 ml-auto" />
                <span className="font-black text-slate-900 text-lg sm:text-xl block">{displayName}</span>
                <span className="text-sm text-slate-600 font-bold block">স্বাক্ষর / প্রত্যায়নকারী</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
