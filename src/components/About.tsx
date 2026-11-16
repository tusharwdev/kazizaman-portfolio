import { Code2, Smartphone, Cpu, CheckCircle2, Award, Users, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Completed", value: "15+", icon: Rocket },
    { label: "Satisfied Clients", value: "100%", icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Passionate Developer Driven by Innovation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging the gap between robust backend APIs, native mobile experiences, and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Stats & Cards Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
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

            {/* Core Focus Card */}
            <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/40 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>My Core Engineering Philosophy</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture & MVVM:</strong> Scalable, maintainable Kotlin & React codebases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>User-Centric UI/UX:</strong> Fluid animations with Jetpack Compose & Tailwind CSS.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Performance Optimization:</strong> Fast load times, memory safety, and minimal latency.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Description Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Hello! I&apos;m Kazi Zaman, a Software Developer based in Bangladesh.
            </h3>

            <p className="text-slate-300 leading-relaxed">
              I specialize in developing high-quality **Android Applications** and **Full-Stack Web Systems**. Over the years, I have built production-grade apps like <strong>Biyebari</strong> (a full matrimonial application with real-time messaging, notification service, and payment integration) as well as modern websites for various clients.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Whether building native Android apps with <strong>Kotlin, Jetpack Compose, Coroutines, Retrofit, Room</strong>, or designing full-stack web solutions with <strong>Next.js, React, Tailwind CSS, and Laravel</strong>, I ensure high performance, security, and exceptional user experience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-500 font-mono block">Domain:</span>
                <span className="text-sm font-semibold text-indigo-300">kazizaman.online</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Primary Stack:</span>
                <span className="text-sm font-semibold text-purple-300">Android (Kotlin) + Next.js</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
