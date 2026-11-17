"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, PhoneCall, FileText } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-indigo-950/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              Kazi Zaman
            </span>
            <span className="text-[10px] text-indigo-400 font-mono -mt-1 tracking-widest uppercase">
              kazizaman.online
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/jibon-brittanto"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-indigo-300 bg-indigo-950/80 border border-indigo-800/60 rounded-full hover:bg-indigo-900/60 transition-all"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>জীবন বৃত্তান্ত</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/jibon-brittanto"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-800 rounded-xl"
          >
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>জীবন বৃত্তান্ত</span>
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold text-white bg-indigo-600 rounded-xl"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </div>
      )}
    </header>
  );
}
