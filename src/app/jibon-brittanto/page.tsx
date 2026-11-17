"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JibonBrittantoSection from "@/components/JibonBrittantoSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function JibonBrittantoPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-bengali flex flex-col selection:bg-indigo-600 selection:text-white">
      <Navbar />

      <div className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        {/* Back Link Button */}
        <div className="no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:text-indigo-700 hover:border-indigo-300 transition-all text-sm font-bold shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-indigo-600" />
            <span>হোম পেইজে ফিরে যান (kazizaman.online)</span>
          </Link>
        </div>

        <JibonBrittantoSection />
      </div>

      <Footer />
    </main>
  );
}
