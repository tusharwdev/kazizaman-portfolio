"use client";

import React from "react";
import {
  Globe,
  Code2,
  Newspaper,
  Video,
  Lightbulb,
  Eye,
  BrainCircuit,
  SearchCheck,
  Target,
  CheckCircle2,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Competencies() {
  const { portfolioData } = usePortfolio();
  if (portfolioData.theme?.showCompetencies === false) return null;
  const { competencies: customCompetencies } = portfolioData;

  const defaultCompetencies = [
    {
      id: "website-specialist",
      title: "Website Specialist",
      title_bn: "ওয়েবসাইট স্পেশালিস্ট",
      category: "tech",
      icon: Globe,
      color: "from-blue-500 via-indigo-500 to-purple-600",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      description:
        "Expertise in crafting modern, high-performance web systems, responsive portals, UI/UX optimization, and domain deployment tailored for enterprise & personal branding.",
      description_bn:
        "আধুনিক, উচ্চগতিসম্পন্ন ও রেসপন্সিভ ওয়েবসাইট তৈরি, এসইও-বান্ধব আর্কিটেকচার এবং সরকারি ও কর্পোরেট ব্রান্ডিং উপযোগী পোর্টাল নির্মাণে বিশেষ দক্ষতা।",
      highlights: [
        "Modern Responsive Web Architecture",
        "High Performance & SEO Optimization",
        "Enterprise Portal & Domain Deployment",
      ],
      tag: "Technical Core Pillar",
    },
    {
      id: "fullstack-developer",
      title: "Full-Stack Software Developer",
      title_bn: "ফুল-স্ট্যাক সফটওয়্যার ডেভেলপার",
      category: "tech",
      icon: Code2,
      color: "from-emerald-500 via-teal-500 to-indigo-600",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      description:
        "End-to-end native Android apps (Kotlin, Jetpack Compose), full-stack web platforms (Next.js, React), and secure RESTful backend APIs (Laravel, MySQL).",
      description_bn:
        "নেটিভ অ্যান্ড্রয়েড মোবাইল অ্যাপ (Kotlin, Jetpack Compose) এবং আধুনিক ব্যাকএন্ড ও ফ্রন্টএন্ড ওয়েবসাইটের (Next.js, Laravel) এন্ড-টু-এন্ড সফটওয়্যার সমাধান।",
      highlights: [
        "Native Android Mobile Apps (Kotlin)",
        "Next.js, React & Tailwind Web Apps",
        "REST API, Database & Security Engineering",
      ],
      tag: "Engineering Core Pillar",
    },
    {
      id: "journalist",
      title: "Journalist",
      title_bn: "সাংবাদিক ও সম্পাদকীয় বিশ্লেষক",
      category: "media",
      icon: Newspaper,
      color: "from-amber-500 via-orange-500 to-red-600",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      description:
        "Professional news writing, editorial curation, ethical journalism, public communication, and objective reporting for mainstream online media.",
      description_bn:
        "বস্তুনিষ্ঠ সংবাদ পরিবেশন, মিডিয়া এথিক্স, সম্পাদনা, পাবলিক ডিজিটাল কমিউনিকেশন এবং দায়িত্বশীল সাংবাদিকতায় অভিজ্ঞতা।",
      highlights: [
        "Professional News & Editorial Writing",
        "Media Ethics & Public Communication",
        "Mainstream Online News Management",
      ],
      tag: "Media & Editorial Pillar",
    },
    {
      id: "video-creator",
      title: "Video Creator",
      title_bn: "ভিডিও ক্রিয়েটর ও কন্টেন্ট প্রডিউসার",
      category: "media",
      icon: Video,
      color: "from-purple-500 via-pink-500 to-rose-600",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      description:
        "Conceptualizing, scripting, video editing, storytelling, and broadcasting visual media content across digital platforms and social networks.",
      description_bn:
        "ভিজ্যুয়াল স্টোরিটেলিং, ভিডিও স্ক্রিপ্টিং, এডিটিং এবং ডিজিটাল প্ল্যাটফর্ম ও সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় ভিডিও কন্টেন্ট প্রযোজনা।",
      highlights: [
        "Visual Storytelling & Video Editing",
        "Scriptwriting & Content Strategy",
        "Multi-platform Digital Content Creation",
      ],
      tag: "Visual Production Pillar",
    },
    {
      id: "creative-ideation",
      title: "Creative Ideation",
      title_bn: "সৃজনশীল ধারণায়ন ও প্রবলেম সলভিং",
      category: "cognitive",
      icon: Lightbulb,
      color: "from-yellow-400 via-amber-500 to-orange-500",
      badgeColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
      description:
        "Generating innovative project concepts, out-of-the-box product strategies, and creative solutions to solve complex organizational & technical challenges.",
      description_bn:
        "নতুন প্রজেক্টের সৃষ্টিশীল কনসেপ্ট তৈরি, অভিনব আইডিয়া জেনারেশন এবং জটিল চ্যালেঞ্জের উদ্ভাবনী সমাধান তৈরি।",
      highlights: [
        "Innovative Product Concept Design",
        "Out-of-the-Box Problem Solving",
        "Strategic Campaign & Project Planning",
      ],
      tag: "Innovation Pillar",
    },
    {
      id: "keen-observation",
      title: "Keen Observation",
      title_bn: "সূক্ষ্ম পর্যবেক্ষণ ক্ষমতা",
      category: "cognitive",
      icon: Eye,
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      description:
        "Sharp attention to detail, identifying underlying operational patterns, field realities, subtle UI/UX inconsistencies, and system anomalies.",
      description_bn:
        "যেকোনো প্রজেক্ট, ক্ষেত্র বা সিস্টেমে সূক্ষ্ম বিষয় ও ত্রুটিগুলো নিবিড়ভাবে পর্যবেক্ষণ ও মূল্যায়ন করার বিশেষ সামর্থ্য।",
      highlights: [
        "High Attention to Detail & Quality",
        "Identifying System & Operational Flaws",
        "Field Reality & User Pattern Analysis",
      ],
      tag: "Analytical Precision Pillar",
    },
    {
      id: "critical-thinking",
      title: "Critical Thinking",
      title_bn: "ক্রিটিক্যাল থিংকিং ও নিরপেক্ষ মূল্যায়ন",
      category: "cognitive",
      icon: BrainCircuit,
      color: "from-pink-500 via-rose-500 to-red-600",
      badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      description:
        "Rigorous logical analysis, objective data synthesis, evaluating risks unbiasedly, and arriving at data-backed strategic decisions.",
      description_bn:
        "যুক্তিযুক্ত চিন্তা, অবজেক্টিভ তথ্য বিশ্লেষণ, ঝুঁকি পর্যালোচনা এবং তথ্য-ভিত্তিক কৌশলগত সিদ্ধান্ত গ্রহণ।",
      highlights: [
        "Data-Driven Objective Analysis",
        "Root Cause Identification",
        "Strategic Risk Evaluation",
      ],
      tag: "Strategic Cognitive Pillar",
    },
    {
      id: "investigative-research",
      title: "Investigative Research",
      title_bn: "অনুসন্ধানী গবেষণা ও তথ্য যাচাই",
      category: "media",
      icon: SearchCheck,
      color: "from-indigo-500 via-purple-500 to-pink-600",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      description:
        "Deep-dive primary research, fact-checking, evidence gathering, cross-verification, and crafting authoritative investigative reports.",
      description_bn:
        "তথ্য অনুসন্ধান, সত্যতা যাচাই (Fact-checking), মূল উৎস থেকে ডেটা সংগ্রহ এবং নির্ভরযোগ্য অনুসন্ধানী গবেষণা প্রতিবেদন প্রস্তুত।",
      highlights: [
        "Deep-Dive Primary & Secondary Research",
        "Rigorous Fact-Checking & Verification",
        "Comprehensive Report Curation",
      ],
      tag: "Research & Fact-finding Pillar",
    },
    {
      id: "highfocus-execution",
      title: "High-Focus Execution",
      title_bn: "উচ্চ-মনোযোগ নির্ভর বাস্তবায়ন",
      category: "execution",
      icon: Target,
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      description:
        "Laser-focused execution discipline, meeting strict deadlines, driving projects from initial draft to complete high-quality execution without distraction.",
      description_bn:
        "একগ্র মনোযোগে কাজ সম্পাদন, নির্ধারিত সময়ের মধ্যে শতভাগ লক্ষ্য অর্জন এবং অত্যন্ত সুসংগঠিতভাবে কাজ সম্পন্ন করার দৃঢ়তা।",
      highlights: [
        "Laser-Focused Task Completion",
        "Strict Deadline Discipline",
        "High Quality Standards & Reliability",
      ],
      tag: "Execution Discipline Pillar",
    },
  ];

  const competenciesToRender = defaultCompetencies;

  return (
    <section id="competencies" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>৯টি সম-গুরুত্বসম্পন্ন প্রধান যোগ্যতা ও সক্ষমতা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            9 Core Competencies of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kazi Zaman
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            আমার প্রযুক্তিগত দক্ষতা, সাংবাদিকতা, সৃজনশীল ধারণা, গবেষণা এবং বাস্তবায়ন সক্ষমতা - প্রতিটি যোগ্যতাই সমান গুরুত্বের সাথে উপস্থাপিত। সরকারি ও বেসরকারি চাকরি, সিভি এবং আন্তর্জাতিক প্ল্যাটফর্মে বহুমুখী পেশাদার হিসেবে প্রস্তুত।
          </p>
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competenciesToRender.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient Border Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="space-y-5">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                        <IconComponent className="w-7 h-7 text-indigo-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      Pillar #{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 font-bengali mt-0.5">
                      {item.title_bn}
                    </p>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                    <p className="font-medium text-slate-200">{item.description}</p>
                    <p className="text-xs text-slate-400 font-bengali bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      {item.description_bn}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 block font-semibold">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Footer Ribbon */}
                <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-indigo-300 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {item.tag}
                  </span>
                  <span className="text-[10px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-400 border border-slate-800 font-semibold">
                    সমান গুরুত্বের প্রধান স্তম্ভ
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Applicability Callout */}
        <div className="bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900 border border-indigo-800/60 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-xl font-extrabold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Award className="w-6 h-6 text-yellow-400 shrink-0" />
              <span>সরকারী ও বেসরকারি চাকরির আবেদন, সিভি এবং সোশ্যাল মিডিয়া উপযোগী প্রোফাইল</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-bengali">
              উপরোক্ত ৯টি যোগ্যতা এককভাবে বা যৌথভাবে যেকোনো পেশাগত দায়িত্ব, নির্বাহী পদ, আইটি প্রজেক্ট কিংবা গভর্ন্যান্সের কাজে শতভাগ সাফল্য নিশ্চিত করতে সক্ষম।
            </p>
          </div>

          <a
            href="/jibon-brittanto"
            className="shrink-0 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            অফিসিয়াল জীবন বৃত্তান্ত দেখুন
          </a>
        </div>

      </div>
    </section>
  );
}
