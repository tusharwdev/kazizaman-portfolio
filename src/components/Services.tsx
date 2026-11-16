import { Smartphone, Globe, Code, Layers, Zap, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Native Android App Development",
      description:
        "Building custom Android apps using Kotlin, Jetpack Compose, Material 3, and Clean Architecture. Complete with offline storage, FCM push notifications, and payment gateways.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "Designing responsive, fast-loading SPA websites and web applications using Next.js, React, TypeScript, Tailwind CSS, and PHP/Laravel backends.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Code,
      title: "RESTful API Engineering",
      description:
        "Designing secure, scalable REST APIs, authentication endpoints (JWT/OAuth), database schemas, and webhooks for seamless mobile-to-cloud communication.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Layers,
      title: "UI/UX & App Modernization",
      description:
        "Refactoring legacy Android XML views to modern Jetpack Compose code, fixing UI jank, optimizing app performance, and enhancing user experience.",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Services & Solutions
          </h2>
          <p className="text-slate-400 text-base">
            High-quality software engineering services tailored for startups, businesses, and personal projects.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">{service.title}</h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center text-xs text-indigo-400 font-semibold gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
