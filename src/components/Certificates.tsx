"use client";

import React, { useState } from "react";
import { ShieldCheck, Download, Eye, X, FileText, ExternalLink } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Certificates() {
  const { portfolioData } = usePortfolio();
  if (portfolioData.theme?.showCertificates === false) return null;
  const { jibon_brittanto } = portfolioData;

  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const certificatesList = jibon_brittanto.certificates || [];

  if (!certificatesList || certificatesList.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-20 relative bg-slate-900/40">
      {/* Lightbox / Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-800 space-y-4 shadow-2xl">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Credentials & Attachments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Official Certificates & Recognition
          </h2>
          <p className="text-slate-400 text-base">
            Official Scouting achievements, government participation certificates, and citizenship credentials.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-5 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image Thumbnail */}
                <div
                  onClick={() => setSelectedImage({ url: cert.imageUrl, title: cert.title })}
                  className="relative h-52 sm:h-56 w-full bg-slate-950 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 group-hover:border-indigo-500/50 transition-colors"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2 backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-indigo-400" />
                    <span>প্রিভিউ দেখুন</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {cert.category}
                  </span>

                  <h3 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <span className="text-indigo-400 font-semibold">{cert.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedImage({ url: cert.imageUrl, title: cert.title })}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4 text-indigo-400" />
                  <span>প্রিভিউ</span>
                </button>

                <a
                  href={cert.imageUrl}
                  download={`${cert.title}.jpg`}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-indigo-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>ডাউনলোড</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
