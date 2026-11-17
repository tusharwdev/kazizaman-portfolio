"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JibonBrittantoSection from "@/components/JibonBrittantoSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function JibonBrittantoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Back Link Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>হোম পেইজে ফিরে যান</span>
          </Link>
        </div>

        <JibonBrittantoSection />
      </div>

      <Footer />
    </main>
  );
}
