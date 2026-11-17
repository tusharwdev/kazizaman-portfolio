"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePortfolio } from "@/context/PortfolioContext";
import { Camera, Download, Eye, X, ArrowLeft, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PhotoGalleryPage() {
  const { portfolioData } = usePortfolio();
  const { photo_gallery } = portfolioData;

  const [activeFilter, setActiveFilter] = useState<"all" | "formal" | "casual">("formal");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);

  const galleryList = photo_gallery || [];

  const filteredPhotos =
    activeFilter === "all"
      ? galleryList
      : galleryList.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-indigo-400" />
                <h3 className="text-white font-bold text-base sm:text-lg">{selectedImage.title}</h3>
                <span className="text-[11px] font-mono capitalize px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {selectedImage.category}
                </span>
              </div>
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
                download={`${selectedImage.title}.jpg`}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Original Quality</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-12">
        {/* Back Link Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all text-xs sm:text-sm font-bold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Back to Home (kazizaman.online)</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-mono font-bold">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>OFFICIAL PHOTO GALLERY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Photo Gallery
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            High-resolution professional formal photographs and casual lifestyle gallery.
          </p>
        </div>

        {/* Sub-Nav / Category Filter Options */}
        <div className="flex justify-center items-center gap-3">
          {[
            { id: "formal", label: "Formal Photos" },
            { id: "casual", label: "Casual Photos" },
            { id: "all", label: "All Photos" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-indigo-600/30 scale-105"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-5 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Photo Thumbnail */}
                <div
                  onClick={() =>
                    setSelectedImage({ url: photo.imageUrl, title: photo.title, category: photo.category })
                  }
                  className="relative h-72 sm:h-80 w-full bg-slate-950 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 group-hover:border-indigo-500/50 transition-colors"
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2 backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-indigo-400" />
                    <span>View Full Size</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono capitalize px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/80 font-bold">
                    {photo.category} Photo
                  </span>

                  <h3 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors">
                    {photo.title}
                  </h3>

                  {photo.description && (
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {photo.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() =>
                    setSelectedImage({ url: photo.imageUrl, title: photo.title, category: photo.category })
                  }
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4 text-indigo-400" />
                  <span>Preview</span>
                </button>

                <a
                  href={photo.imageUrl}
                  download={`${photo.title}.jpg`}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-indigo-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
