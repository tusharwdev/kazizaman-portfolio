import { ArrowRight, Mail, MessageSquare, Smartphone, Globe, Sparkles, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
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
              <span>Available for Freelance & Android Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kazi Zaman
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-3">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Smartphone className="w-6 h-6" /> Android Specialist
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-purple-400">
                <Globe className="w-6 h-6" /> Full-Stack Web
              </span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Crafting high-performance native Android applications with Kotlin & Jetpack Compose, and modern responsive web systems with Next.js, React & Laravel. Passionate about clean code and user experience.
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
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="mailto:contact@kazizaman.online" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Graphic / Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-30 blur-lg animate-pulse" />

              {/* Card Container */}
              <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">kazizaman.online</span>
                </div>

                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      KZ
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Kazi Zaman</h3>
                      <p className="text-xs text-indigo-400 font-mono">Software Engineer</p>
                      <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        ● Online
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1">
                    <p className="text-indigo-400">&gt; const developer = &#123;</p>
                    <p className="pl-4 text-slate-400">role: <span className="text-emerald-400">&quot;Android & Web&quot;</span>,</p>
                    <p className="pl-4 text-slate-400">tech: [<span className="text-purple-400">&quot;Kotlin&quot;</span>, <span className="text-purple-400">&quot;Compose&quot;</span>, <span className="text-purple-400">&quot;React&quot;</span>],</p>
                    <p className="pl-4 text-slate-400">status: <span className="text-amber-400">&quot;Building awesome apps&quot;</span></p>
                    <p className="text-indigo-400">&#125;;</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Based in Bangladesh</span>
                  <span className="text-indigo-400 font-mono">v2.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
