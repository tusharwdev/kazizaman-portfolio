"use client";

import { Globe, Newspaper, Video, Target, Zap, ShieldCheck } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Services() {
  const { portfolioData } = usePortfolio();
  if (portfolioData.theme?.showServices === false) return null;
  const { services: customServices } = portfolioData;

  const defaultMultidisciplinaryServices = [
    {
      title: "Website & Full-Stack Engineering",
      description:
        "Building modern, high-performance websites, native Android applications, and enterprise web portals with Next.js, Kotlin & Laravel.",
      color: "from-blue-500 to-indigo-600",
      icon: Globe,
      pillars: "Website Specialist + Full-Stack Developer",
    },
    {
      title: "Journalism & Investigative Reporting",
      description:
        "Professional news writing, media ethics, fact-checking, primary source research, and crafting objective investigative reports for digital press.",
      color: "from-amber-500 to-orange-600",
      icon: Newspaper,
      pillars: "Journalist + Investigative Research",
    },
    {
      title: "Video Creation & Media Production",
      description:
        "End-to-end visual storytelling, video scripting, digital editing, and producing high-impact video content across digital and social channels.",
      color: "from-purple-500 to-pink-600",
      icon: Video,
      pillars: "Video Creator + Creative Ideation",
    },
    {
      title: "Strategic Analysis & Focused Execution",
      description:
        "Uncovering system flaws through keen observation, applying critical thinking for risk evaluation, and driving projects to flawless completion.",
      color: "from-emerald-500 to-teal-600",
      icon: Target,
      pillars: "Keen Observation + Critical Thinking + High-Focus",
    },
  ];

  const servicesToRender = defaultMultidisciplinaryServices;

  return (
    <section id="services" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Services &amp; Multidisciplinary Solutions
          </h2>
          <p className="text-slate-300 text-base font-bengali">
            সরকারি ও বেসরকারি প্রতিষ্ঠান, ব্যবসা এবং আইটি প্রজেক্টের জন্য উচ্চমানের পেশাদার সেবা।
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesToRender.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">{service.title}</h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800 space-y-2">
                  <div className="flex items-center text-xs text-indigo-400 font-semibold gap-1">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Equal Priority Solution</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded-lg border border-slate-800">
                    {service.pillars}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
