"use client";

import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Contact() {
  const { portfolioData } = usePortfolio();
  const { developer } = portfolioData;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base">
            Have a project idea, mobile app requirement, or want to say hello? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${developer.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Email Me</span>
                    <span className="font-semibold text-slate-200 group-hover:text-indigo-400">
                      {developer.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Location & Phone</span>
                    <span className="font-semibold text-slate-200 block">{developer.location}</span>
                    <span className="text-xs font-mono text-slate-400">{developer.phone}</span>
                  </div>
                </div>

                <a
                  href={developer.whatsapp || "https://wa.me/8801786242046"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-900/60 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-900 border border-emerald-700 flex items-center justify-center text-emerald-300 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 font-mono block">WhatsApp Direct</span>
                    <span className="font-semibold text-white group-hover:underline">
                      Chat on WhatsApp ({developer.phone})
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
                Official Website Domain: <strong className="text-indigo-400">{developer.domain}</strong>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Android App Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder={`Hi ${developer.name_en}, I would like to discuss...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
