"use client";

import { useState, useEffect } from "react";
import { Code2, ArrowUp, Lock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-lg block">Kazi Zaman</span>
              <span className="text-xs text-indigo-400 font-mono">kazizaman.online</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center font-mono flex items-center gap-4 flex-wrap justify-center">
            <span>&copy; {year} Kazi Zaman. All rights reserved.</span>
            <Link href="/admin" className="text-indigo-400 hover:underline inline-flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>এডমিন প্যানেল</span>
            </Link>
          </div>

          {/* Scroll to Top */}
          <a
            href="#"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>

        </div>
      </div>
    </footer>
  );
}
