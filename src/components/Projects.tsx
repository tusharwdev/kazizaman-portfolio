"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const projects = [
    {
      id: "biyebari",
      title: "Biyebari Android Application",
      category: "mobile",
      description:
        "A full-featured matrimony and matchmaking mobile application built natively for Android. Features real-time profile search, secure auth, push notifications (FCM), custom webview payment gateway integration, and bottom sheet navigation.",
      image: "📱",
      tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Retrofit", "REST API", "FCM"],
      liveUrl: "https://biyebari.online",
      githubUrl: "https://github.com",
    },
    {
      id: "kazizaman-portfolio",
      title: "Kazi Zaman Personal Portfolio Website",
      category: "web",
      description:
        "Modern single-page web portfolio for kazizaman.online crafted with Next.js 16 (App Router), React, TypeScript, and Tailwind CSS. Features sleek dark glassmorphism design, responsive layouts, and smooth section scrolling.",
      image: "💻",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      liveUrl: "https://kazizaman.online",
      githubUrl: "https://github.com",
    },
    {
      id: "matrimonial-web-api",
      title: "Matrimonial Backend & API Service",
      category: "web",
      description:
        "Robust RESTful API backend handling user profiles, match algorithms, notification triggers, image processing, and payment status callbacks for mobile applications.",
      image: "🌐",
      tags: ["Laravel", "PHP", "MySQL", "REST API", "JWT Auth"],
      liveUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      id: "task-manager-app",
      title: "Smart Task & Habit Tracker (Android)",
      category: "mobile",
      description:
        "Native Android app using Room Database and WorkManager for offline task tracking, local notifications, custom reminder scheduling, and progress charts.",
      image: "⚡",
      tags: ["Kotlin", "Room DB", "WorkManager", "LiveData", "Material 3"],
      liveUrl: "#",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Work
          </h2>
          <p className="text-slate-400 text-base">
            Here are some of the key Android mobile applications and web systems I have designed and engineered.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {(["all", "mobile", "web"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold capitalize transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "mobile" ? "Mobile Apps" : "Web Apps"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-4">

                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-2xl shadow-inner">
                    {project.image}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {project.category === "mobile" ? "Android App" : "Web Application"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Visit Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-400 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code Repo</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
