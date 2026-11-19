"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { PortfolioData, ProjectItem, SkillCategory, WorkExperienceItem, ServiceItem, PhotoGalleryItem } from "@/types/portfolio";
import {
  Lock,
  LogOut,
  Save,
  Download,
  RotateCcw,
  Plus,
  Trash2,
  ExternalLink,
  Code2,
  User,
  Award,
  Briefcase,
  Wrench,
  FolderGit2,
  Zap,
  FileText,
  Check,
  AlertCircle,
  Eye,
  EyeOff,
  Mail,
  Key,
  Camera,
  Image as ImageIcon,
  Sliders,
  Upload,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const ADMIN_EMAIL = "tusharwdev@gmail.com";
const ADMIN_PASSWORD = "Tuu9900--";

export default function AdminPage() {
  const {
    portfolioData,
    savePortfolioData,
    resetPortfolioData,
    exportPortfolioJson,
    importPortfolioJson,
  } = usePortfolio();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<
    "developer" | "hero_card" | "stats" | "jibon" | "skills" | "projects" | "experience" | "services" | "gallery" | "raw"
  >("developer");

  const [formData, setFormData] = useState<PortfolioData>(portfolioData);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [rawJsonText, setRawJsonText] = useState("");

  useEffect(() => {
    const authStatus = sessionStorage.getItem("kazizaman_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setFormData(portfolioData);
    setRawJsonText(JSON.stringify(portfolioData, null, 2));
  }, [portfolioData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      emailInput.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      passwordInput === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem("kazizaman_admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে! সঠিক ইমেইল ও পাসওয়ার্ড দিন।");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("kazizaman_admin_auth");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveAll = () => {
    savePortfolioData(formData);
    showToast("সকল তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!");
  };

  const handleReset = () => {
    if (window.confirm("আপনি কি নিশ্চিত যে সকল ডেটা রিসেট করে ডিফল্ট অবস্থায় ফিরিয়ে আনবেন?")) {
      resetPortfolioData();
      showToast("তথ্য ডিফল্ট অবস্থায় রিসেট করা হয়েছে!");
    }
  };

  const handleHeroPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("ইমেজের সাইজ সর্বোচ্চ 5MB হতে পারবে!");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setFormData((prev) => ({
            ...prev,
            developer: {
              ...prev.developer,
              heroPhoto: {
                url: result,
                positionX: prev.developer.heroPhoto?.positionX ?? 50,
                positionY: prev.developer.heroPhoto?.positionY ?? 20,
                scale: prev.developer.heroPhoto?.scale ?? 1.05,
                frameHeight: prev.developer.heroPhoto?.frameHeight ?? 320,
                badgeLeftText: prev.developer.heroPhoto?.badgeLeftText ?? "● Official Portfolio",
                badgeRightText: prev.developer.heroPhoto?.badgeRightText ?? "9 Core Pillars",
                subtitle: prev.developer.heroPhoto?.subtitle ?? "Multidisciplinary Professional",
                locationText: prev.developer.heroPhoto?.locationText ?? "Bangladesh",
                degreeTitle: prev.developer.heroPhoto?.degreeTitle ?? "শিক্ষা (Academic Degree):",
                degreeText: prev.developer.heroPhoto?.degreeText ?? "B.S.S. Honours in Social Work (৩য় বর্ষ), জাতীয় বিশ্ববিদ্যালয়",
              },
            },
          }));
          showToast("নতুন হিরো ছবি আপলোড করা হয়েছে!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRawJsonSave = () => {
    const success = importPortfolioJson(rawJsonText);
    if (success) {
      showToast("JSON ডেটা সফলভাবে আপডেট করা হয়েছে!");
    } else {
      alert("অকার্যকর (Invalid) JSON ফরম্যাট! সঠিক JSON দিয়ে আবার চেষ্টা করুন।");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-indigo-600/30">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">kazizaman.online এডমিন প্যানেল</h1>
            <p className="text-xs text-slate-400 font-mono">
              এডমিন হিসেবে লগইন করার জন্য আপনার ইমেইল ও পাসওয়ার্ড দিন।
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">এডমিন ইমেইল (Email Address)</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="admin@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 font-mono text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">এডমিন পাসওয়ার্ড (Password)</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 font-mono text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01]"
            >
              <Lock className="w-4 h-4" />
              <span>লগইন করুন (Admin Login)</span>
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center">
            <Link href="/" className="text-xs text-indigo-400 hover:underline">
              ← মেইন সাইটে ফিরে যান (kazizaman.online)
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-bounce">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg">kazizaman.online এডমিন প্যানেল</h1>
              <span className="text-xs text-indigo-400 font-mono">Logged in as: {ADMIN_EMAIL}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span>লাইভ সাইট</span>
            </Link>

            <button
              onClick={handleSaveAll}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <Save className="w-4 h-4" />
              <span>সেভ করুন</span>
            </button>

            <button
              onClick={exportPortfolioJson}
              className="px-3.5 py-2 rounded-xl bg-indigo-950 border border-indigo-800/80 text-indigo-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
              title="portfolio_data.json ডাইনলোড করুন"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON ডাউনলোড</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-rose-400 text-xs font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>রিসেট</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-950/80 border border-rose-900 text-rose-300 hover:bg-rose-900 text-xs font-semibold flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>লগআউট</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar Tabs */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 px-3 py-1 block">
              মেনু সেকশন
            </span>

            {[
              { id: "developer", label: "👤 পরিচিতি ও সাধারণ তথ্য", icon: User },
              { id: "hero_card", label: "🖼️ পোর্টফোলিও কার্ড ও ছবি", icon: ImageIcon },
              { id: "stats", label: "📊 পরিসংখ্যান (Stats)", icon: Award },
              { id: "jibon", label: "📜 জীবন বৃত্তান্ত (Bio)", icon: FileText },
              { id: "skills", label: "🛠️ দক্ষতা (Skills)", icon: Wrench },
              { id: "projects", label: "💻 প্রজেক্টস (Projects)", icon: FolderGit2 },
              { id: "experience", label: "💼 কাজের অভিজ্ঞতা", icon: Briefcase },
              { id: "services", label: "⚡ সেবা (Services)", icon: Zap },
              { id: "gallery", label: "📸 ফটো গ্যালারি (Gallery)", icon: Camera },
              { id: "raw", label: "💾 Raw JSON এডিটর", icon: Code2 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2.5 transition-all ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30"
                      : "text-slate-300 hover:bg-slate-950 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          {/* TAB 1: DEVELOPER INFO */}
          {activeTab === "developer" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">👤 ডেভেলপার ও সাধারণ পরিচিতি তথ্য</h2>
                  <p className="text-xs text-slate-400">Hero Section, Domain & Contact details</p>
                </div>
                <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                  <Save className="w-3.5 h-3.5" /> সেভ
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">নাম (বাংলা)</label>
                  <input
                    type="text"
                    value={formData.developer.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, name: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Name (English)</label>
                  <input
                    type="text"
                    value={formData.developer.name_en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, name_en: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Domain Name</label>
                  <input
                    type="text"
                    value={formData.developer.domain}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, domain: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-indigo-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Professional Title</label>
                  <input
                    type="text"
                    value={formData.developer.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, title: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">মোবাইল নম্বর / Phone</label>
                  <input
                    type="text"
                    value={formData.developer.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, phone: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">ইমেইল / Email</label>
                  <input
                    type="email"
                    value={formData.developer.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, email: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">জন্ম তারিখ</label>
                  <input
                    type="text"
                    value={formData.developer.birth_date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, birth_date: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">উচ্চতা</label>
                  <input
                    type="text"
                    value={formData.developer.height}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, height: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">অবস্থান / Location</label>
                  <input
                    type="text"
                    value={formData.developer.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, location: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Status Badge Text</label>
                  <input
                    type="text"
                    value={formData.developer.statusBadge || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, statusBadge: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Fiverr Profile Link</label>
                  <input
                    type="text"
                    value={formData.developer.fiverr}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, fiverr: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-emerald-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">GitHub Profile Link</label>
                  <input
                    type="text"
                    value={formData.developer.github}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        developer: { ...formData.developer, github: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">WhatsApp Link</label>
                <input
                  type="text"
                  value={formData.developer.whatsapp}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      developer: { ...formData.developer, whatsapp: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-emerald-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Bio / সংক্ষিপ্ত বিবরণ</label>
                <textarea
                  rows={4}
                  value={formData.developer.bio}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      developer: { ...formData.developer, bio: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB: HERO CARD & IMAGE CROP/POSITION */}
          {activeTab === "hero_card" && (() => {
            const heroPhoto = formData.developer.heroPhoto || {
              url: "/gallery/hero-bike.jpg?v=20261119_v5",
              avatarUrl: "",
              positionX: 50,
              positionY: 20,
              scale: 1.05,
              frameHeight: 320,
              badgeLeftText: "● Official Portfolio",
              badgeRightText: "9 Core Pillars",
              subtitle: "Multidisciplinary Professional",
              locationText: "Bangladesh",
              degreeTitle: "শিক্ষা (Academic Degree):",
              degreeText: "B.S.S. Honours in Social Work (৩য় বর্ষ), জাতীয় বিশ্ববিদ্যালয়",
            };

            const updateHeroPhoto = (updates: Partial<typeof heroPhoto>) => {
              setFormData((prev) => ({
                ...prev,
                developer: {
                  ...prev.developer,
                  heroPhoto: {
                    ...(prev.developer.heroPhoto || heroPhoto),
                    ...updates,
                  },
                },
              }));
            };

            return (
              <div className="space-y-6">
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-indigo-400" />
                      <span>🖼️ পোর্টফোলিও কার্ড ও ইমেজ ক্রপ/পজিশন এডিটর</span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      হিরো সেকশনের ডানপাশের পোর্টফোলিও কার্ডটির ছবি আপলোড, ক্রপ, পজিশন, জুম ও টেক্সট সরাসরি পরিবর্তন করুন
                    </p>
                  </div>
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-md shadow-emerald-600/30 transition-all"
                  >
                    <Save className="w-3.5 h-3.5" /> সেভ করুন
                  </button>
                </div>

                {/* Two Column Layout: Left Controls, Right Live Preview */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                  {/* Left Controls Column */}
                  <div className="xl:col-span-7 space-y-6">

                    {/* 1. Image Selection & Upload */}
                    <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Upload className="w-4 h-4 text-indigo-400" />
                        <span>১. ছবি আপলোড ও ইমেজ ইউআরএল (Main Image)</span>
                      </h3>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-300 block">
                          নতুন ছবি আপলোড করুন (Upload Image File)
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleHeroPhotoUpload}
                          className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer bg-slate-900 border border-slate-800 rounded-xl p-1"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300 block">
                          অথবা গ্যালারি থেকে পছন্দের ছবি সিলেক্ট করুন
                        </label>
                        <select
                          value={heroPhoto.url}
                          onChange={(e) => updateHeroPhoto({ url: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono"
                        >
                          <option value="/gallery/hero-bike.jpg?v=20261119_v5">মেইন মোটরবাইক হিরো ছবি (/gallery/hero-bike.jpg)</option>
                          <option value="/gallery/photo-1.jpg">বাইক ও প্রকৃতি ১ (/gallery/photo-1.jpg)</option>
                          <option value="/gallery/photo-2.jpg">গ্রামের রাস্তা ২ (/gallery/photo-2.jpg)</option>
                          <option value="/gallery/photo-3.jpg">এক্সিকিউটিভ ফরমাল ৩ (/gallery/photo-3.jpg)</option>
                          <option value="/gallery/photo-4.jpg">ঘড়ি ও পোজ ৪ (/gallery/photo-4.jpg)</option>
                          <option value="/gallery/photo-5.jpg">সাইন পোস্ট ৫ (/gallery/photo-5.jpg)</option>
                          <option value="/gallery/photo-6.jpg">বাইক রাইডিং ৬ (/gallery/photo-6.jpg)</option>
                          <option value="/gallery/photo-7.jpg">বাইক পোজ ৭ (/gallery/photo-7.jpg)</option>
                          <option value="/gallery/photo-8.jpg">হুগি ও বাইক ৮ (/gallery/photo-8.jpg)</option>
                          <option value="/gallery/photo-9.jpg">কর্পোরেট ফরমাল ৯ (/gallery/photo-9.jpg)</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300 block">
                          অথবা সরাসরি ছবির ইউআরএল (Image URL)
                        </label>
                        <input
                          type="text"
                          value={heroPhoto.url}
                          onChange={(e) => updateHeroPhoto({ url: e.target.value })}
                          placeholder="https://... or /gallery/..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-300 font-mono"
                        />
                      </div>
                    </div>

                    {/* 2. Crop, Position & Scale Controls */}
                    <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-5">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-emerald-400" />
                        <span>২. ইমেজের পজিশনিং ও ক্রপিং টিউনিং (Crop & Position)</span>
                      </h3>

                      {/* Position X Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-300">
                            ডানে-বামে পজিশন (Position X): <strong className="text-indigo-400">{heroPhoto.positionX}%</strong>
                          </span>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionX: 0 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              0% (বাম)
                            </button>
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionX: 50 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              50% (মাঝখানে)
                            </button>
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionX: 100 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              100% (ডান)
                            </button>
                          </div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={heroPhoto.positionX}
                          onChange={(e) => updateHeroPhoto({ positionX: Number(e.target.value) })}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>

                      {/* Position Y Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-300">
                            উপরে-নিচে পজিশন (Position Y): <strong className="text-emerald-400">{heroPhoto.positionY}%</strong>
                          </span>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionY: 0 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              0% (টপ)
                            </button>
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionY: 20 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              20% (ডিফল্ট)
                            </button>
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionY: 50 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              50% (মাঝখানে)
                            </button>
                            <button
                              type="button"
                              onClick={() => updateHeroPhoto({ positionY: 100 })}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                            >
                              100% (নিচে)
                            </button>
                          </div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={heroPhoto.positionY}
                          onChange={(e) => updateHeroPhoto({ positionY: Number(e.target.value) })}
                          className="w-full accent-emerald-500 cursor-pointer"
                        />
                      </div>

                      {/* Scale / Zoom Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-300">
                            জুমিং লেভেল (Zoom / Scale): <strong className="text-purple-400">{heroPhoto.scale.toFixed(2)}x</strong>
                          </span>
                          <div className="flex gap-1">
                            {[1.0, 1.05, 1.2, 1.5, 2.0].map((sc) => (
                              <button
                                key={sc}
                                type="button"
                                onClick={() => updateHeroPhoto({ scale: sc })}
                                className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                              >
                                {sc}x
                              </button>
                            ))}
                          </div>
                        </div>
                        <input
                          type="range"
                          min="1.0"
                          max="2.5"
                          step="0.05"
                          value={heroPhoto.scale}
                          onChange={(e) => updateHeroPhoto({ scale: Number(e.target.value) })}
                          className="w-full accent-purple-500 cursor-pointer"
                        />
                      </div>

                      {/* Frame Height Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-300">
                            কার্ডের উচ্চতা (Frame Height): <strong className="text-pink-400">{heroPhoto.frameHeight}px</strong>
                          </span>
                          <div className="flex gap-1">
                            {[250, 320, 380, 450].map((fh) => (
                              <button
                                key={fh}
                                type="button"
                                onClick={() => updateHeroPhoto({ frameHeight: fh })}
                                className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                              >
                                {fh}px
                              </button>
                            ))}
                          </div>
                        </div>
                        <input
                          type="range"
                          min="220"
                          max="500"
                          step="10"
                          value={heroPhoto.frameHeight}
                          onChange={(e) => updateHeroPhoto({ frameHeight: Number(e.target.value) })}
                          className="w-full accent-pink-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* 3. Text & Overlay Badges Customization */}
                    <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>৩. টেক্সট, ব্যাজ ও ডিগ্রির তথ্য (Text & Badges)</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 block">
                            বামপাশের ব্যাজ (Left Overlay Badge)
                          </label>
                          <input
                            type="text"
                            value={heroPhoto.badgeLeftText || "● Official Portfolio"}
                            onChange={(e) => updateHeroPhoto({ badgeLeftText: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono font-bold"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 block">
                            ডানপাশের ব্যাজ (Right Overlay Badge)
                          </label>
                          <input
                            type="text"
                            value={heroPhoto.badgeRightText || "9 Core Pillars"}
                            onChange={(e) => updateHeroPhoto({ badgeRightText: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-300 font-mono font-bold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 block">
                            প্রোফাইল সাবটাইটেল (Subtitle)
                          </label>
                          <input
                            type="text"
                            value={heroPhoto.subtitle || "Multidisciplinary Professional"}
                            onChange={(e) => updateHeroPhoto({ subtitle: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-mono"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 block">
                            অবস্থান / দেশ (Location)
                          </label>
                          <input
                            type="text"
                            value={heroPhoto.locationText || "Bangladesh"}
                            onChange={(e) => updateHeroPhoto({ locationText: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300 block">
                          শিক্ষা / ডিগ্রি হেডিং (Education Degree Title)
                        </label>
                        <input
                          type="text"
                          value={heroPhoto.degreeTitle || "শিক্ষা (Academic Degree):"}
                          onChange={(e) => updateHeroPhoto({ degreeTitle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300 block">
                          শিক্ষাগত যোগ্যতার বিস্তারিত (Degree Details)
                        </label>
                        <textarea
                          rows={2}
                          value={heroPhoto.degreeText || "B.S.S. Honours in Social Work (৩য় বর্ষ), জাতীয় বিশ্ববিদ্যালয়"}
                          onChange={(e) => updateHeroPhoto({ degreeText: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-300 resize-none font-medium"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Live Interactive Card Preview */}
                  <div className="xl:col-span-5 space-y-4 sticky top-24">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-emerald-400" />
                        <span>লাইভ প্রিভিউ (Live Card Preview)</span>
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                        ● Realtime
                      </span>
                    </div>

                    {/* Card Container exact mirror of Hero.tsx */}
                    <div className="relative w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4 overflow-hidden">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500" />
                          <span className="w-3 h-3 rounded-full bg-amber-500" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-xs font-mono text-indigo-400 font-bold">
                          {formData.developer.domain || "kazizaman.online"}
                        </span>
                      </div>

                      {/* Main Photo Frame */}
                      <div
                        className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                        style={{ height: `${heroPhoto.frameHeight}px` }}
                      >
                        <img
                          src={heroPhoto.url || "/gallery/hero-bike.jpg?v=20261119_v5"}
                          alt="Hero Preview"
                          className="w-full h-full object-cover transition-all duration-300"
                          style={{
                            objectPosition: `${heroPhoto.positionX}% ${heroPhoto.positionY}%`,
                            transform: `scale(${heroPhoto.scale})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 font-bold backdrop-blur-sm">
                            {heroPhoto.badgeLeftText || "● Official Portfolio"}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-indigo-300 border border-slate-700 font-bold backdrop-blur-sm">
                            {heroPhoto.badgeRightText || "9 Core Pillars"}
                          </span>
                        </div>
                      </div>

                      {/* User Info Footer */}
                      <div className="pt-2 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={heroPhoto.avatarUrl || heroPhoto.url || "/gallery/hero-bike.jpg?v=20261119_v5"}
                              alt="Avatar Preview"
                              className="w-10 h-10 rounded-xl object-cover border-2 border-indigo-500 shadow-md"
                              style={{
                                objectPosition: `${heroPhoto.positionX}% ${heroPhoto.positionY * 0.8}%`,
                              }}
                            />
                            <div>
                              <h3 className="font-bold text-white text-sm leading-tight">
                                {formData.developer.name_en || formData.developer.name || "Kazi Zaman"}
                              </h3>
                              <p className="text-[11px] text-indigo-400 font-mono">
                                {heroPhoto.subtitle || "Multidisciplinary Professional"}
                              </p>
                            </div>
                          </div>

                          <span className="text-xs text-slate-400 font-mono">
                            {heroPhoto.locationText || formData.developer.location || "Bangladesh"}
                          </span>
                        </div>

                        {/* Verification Seal & Education Badge */}
                        <div className="space-y-2">
                          <div className="bg-indigo-950/80 border border-indigo-800/60 p-3 rounded-xl flex items-center gap-2.5 text-xs text-indigo-200 font-bengali shadow-md">
                            <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                            <div>
                              <span className="font-bold block text-white text-xs">
                                {heroPhoto.degreeTitle || "শিক্ষা (Academic Degree):"}
                              </span>
                              <span className="text-indigo-300 font-semibold text-[11px]">
                                {heroPhoto.degreeText || "B.S.S. Honours in Social Work (৩য় বর্ষ), জাতীয় বিশ্ববিদ্যালয়"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                      <p className="font-bold text-slate-200">💡 টিপস:</p>
                      <p>১. ইমেজের ডানে-বামে এবং উপরে-নিচে পজিশন বাড়িয়ে/কমিয়ে ছবিকে ফ্রেমের সঠিক স্থানে সেট করুন।</p>
                      <p>২. জুম এবং হাইট টিউন করার পর <span className="text-emerald-400 font-bold">"সেভ করুন"</span> বাটন চাপ দিন।</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* TAB 2: STATS */}
          {activeTab === "stats" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">📊 পরিসংখ্যান (Stats & Key Highlights)</h2>
                  <p className="text-xs text-slate-400">About section and Experience metrics</p>
                </div>
                <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                  <Save className="w-3.5 h-3.5" /> সেভ
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <label className="text-xs font-semibold text-slate-300 block">অভিজ্ঞতার বছর (Years Experience)</label>
                  <input
                    type="text"
                    value={formData.stats.experience_years}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, experience_years: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xl font-bold text-indigo-400 text-center"
                  />
                </div>

                <div className="space-y-1 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <label className="text-xs font-semibold text-slate-300 block">সম্পন্নকৃত প্রজেক্ট (Completed Projects)</label>
                  <input
                    type="text"
                    value={formData.stats.projects_completed}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, projects_completed: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xl font-bold text-purple-400 text-center"
                  />
                </div>

                <div className="space-y-1 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <label className="text-xs font-semibold text-slate-300 block">সন্তুষ্ট ক্লায়েন্ট (Satisfied Clients)</label>
                  <input
                    type="text"
                    value={formData.stats.satisfied_clients}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, satisfied_clients: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xl font-bold text-emerald-400 text-center"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: JIBON BRITTANTO */}
          {activeTab === "jibon" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">📜 জীবন বৃত্তান্ত বিবরণী</h2>
                  <p className="text-xs text-slate-400">Education, Family background & Training courses</p>
                </div>
                <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                  <Save className="w-3.5 h-3.5" /> সেভ
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">সর্বশেষ শিক্ষাগত যোগ্যতা</label>
                <input
                  type="text"
                  value={formData.jibon_brittanto.education}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      jibon_brittanto: { ...formData.jibon_brittanto, education: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-semibold text-indigo-300"
                />
              </div>

              {/* Family Section */}
              <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-sm font-bold text-white">👪 পারিবারিক তথ্য</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">পিতার নাম ও পরিচয়</label>
                    <input
                      type="text"
                      value={formData.jibon_brittanto.family.father}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jibon_brittanto: {
                            ...formData.jibon_brittanto,
                            family: { ...formData.jibon_brittanto.family, father: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">মাতার নাম</label>
                    <input
                      type="text"
                      value={formData.jibon_brittanto.family.mother}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jibon_brittanto: {
                            ...formData.jibon_brittanto,
                            family: { ...formData.jibon_brittanto.family, mother: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400">মামার তথ্য</label>
                  <textarea
                    rows={2}
                    value={formData.jibon_brittanto.family.uncle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jibon_brittanto: {
                          ...formData.jibon_brittanto,
                          family: { ...formData.jibon_brittanto.family, uncle: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white resize-none"
                  />
                </div>

                {/* Siblings List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-slate-400">ভাই ও বোনসমূহের তালিকা</label>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          jibon_brittanto: {
                            ...formData.jibon_brittanto,
                            family: {
                              ...formData.jibon_brittanto.family,
                              siblings: [...formData.jibon_brittanto.family.siblings, "নতুন ভাই/বোন"],
                            },
                          },
                        })
                      }
                      className="text-[11px] px-2.5 py-1 bg-indigo-950 text-indigo-300 rounded-lg border border-indigo-800 flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> যোগ করুন
                    </button>
                  </div>
                  {formData.jibon_brittanto.family.siblings.map((sib, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={sib}
                        onChange={(e) => {
                          const newSiblings = [...formData.jibon_brittanto.family.siblings];
                          newSiblings[sIdx] = e.target.value;
                          setFormData({
                            ...formData,
                            jibon_brittanto: {
                              ...formData.jibon_brittanto,
                              family: { ...formData.jibon_brittanto.family, siblings: newSiblings },
                            },
                          });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newSiblings = formData.jibon_brittanto.family.siblings.filter((_, i) => i !== sIdx);
                          setFormData({
                            ...formData,
                            jibon_brittanto: {
                              ...formData.jibon_brittanto,
                              family: { ...formData.jibon_brittanto.family, siblings: newSiblings },
                            },
                          });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">🎓 প্রশিক্ষণ ও কোর্সসমূহ</h3>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        jibon_brittanto: {
                          ...formData.jibon_brittanto,
                          courses: [...formData.jibon_brittanto.courses, "নতুন কোর্স তথ্য"],
                        },
                      })
                    }
                    className="text-[11px] px-2.5 py-1 bg-indigo-950 text-indigo-300 rounded-lg border border-indigo-800 flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> কোর্স যোগ করুন
                  </button>
                </div>
                {formData.jibon_brittanto.courses.map((course, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => {
                        const newCourses = [...formData.jibon_brittanto.courses];
                        newCourses[cIdx] = e.target.value;
                        setFormData({
                          ...formData,
                          jibon_brittanto: { ...formData.jibon_brittanto, courses: newCourses },
                        });
                      }}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newCourses = formData.jibon_brittanto.courses.filter((_, i) => i !== cIdx);
                        setFormData({
                          ...formData,
                          jibon_brittanto: { ...formData.jibon_brittanto, courses: newCourses },
                        });
                      }}
                      className="p-2 text-rose-400 hover:bg-rose-950 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">🛠️ দক্ষতা ও টেক স্ট্যাক (Skills Management)</h2>
                  <p className="text-xs text-slate-400">Add, edit, or remove skill categories & level metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newCat: SkillCategory = {
                        category: "New Tech Category",
                        items: [{ name: "Skill 1", level: 80 }],
                      };
                      setFormData({ ...formData, skills: [...formData.skills, newCat] });
                    }}
                    className="px-3 py-1.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> ক্যাটাগরি যোগ
                  </button>
                  <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> সেভ
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {formData.skills.map((cat, catIdx) => (
                  <div key={catIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <input
                        type="text"
                        value={cat.category}
                        onChange={(e) => {
                          const newSkills = [...formData.skills];
                          newSkills[catIdx].category = e.target.value;
                          setFormData({ ...formData, skills: newSkills });
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-white"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const newSkills = [...formData.skills];
                            newSkills[catIdx].items.push({ name: "New Skill", level: 80 });
                            setFormData({ ...formData, skills: newSkills });
                          }}
                          className="text-[11px] px-2.5 py-1 bg-indigo-900 text-indigo-200 rounded-lg flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> স্কিল যোগ
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const newSkills = formData.skills.filter((_, i) => i !== catIdx);
                            setFormData({ ...formData, skills: newSkills });
                          }}
                          className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.items.map((skill, itemIdx) => (
                        <div key={itemIdx} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) => {
                                const newSkills = [...formData.skills];
                                newSkills[catIdx].items[itemIdx].name = e.target.value;
                                setFormData({ ...formData, skills: newSkills });
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-white flex-1"
                            />
                            <span className="text-xs font-mono text-indigo-400">{skill.level}%</span>
                            <button
                              type="button"
                              onClick={() => {
                                const newSkills = [...formData.skills];
                                newSkills[catIdx].items = newSkills[catIdx].items.filter((_, i) => i !== itemIdx);
                                setFormData({ ...formData, skills: newSkills });
                              }}
                              className="p-1 text-rose-400 hover:bg-rose-950 rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={skill.level}
                            onChange={(e) => {
                              const newSkills = [...formData.skills];
                              newSkills[catIdx].items[itemIdx].level = parseInt(e.target.value);
                              setFormData({ ...formData, skills: newSkills });
                            }}
                            className="w-full accent-indigo-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">💻 প্রজেক্টস অ্যাড ও এডিটর (Projects)</h2>
                  <p className="text-xs text-slate-400">Featured Mobile & Web applications list</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newProj: ProjectItem = {
                        id: "proj-" + Date.now(),
                        title: "নতুন প্রজেক্ট",
                        category: "mobile",
                        description: "প্রজেক্টের বিবরণ লিখুন...",
                        tags: ["Kotlin", "React"],
                        liveUrl: "#",
                        githubUrl: "https://github.com",
                        image: "📱",
                      };
                      setFormData({ ...formData, projects: [newProj, ...formData.projects] });
                    }}
                    className="px-3 py-1.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> নতুন প্রজেক্ট যোগ
                  </button>
                  <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> সেভ
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {formData.projects.map((proj, pIdx) => (
                  <div key={proj.id || pIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="text"
                          value={proj.image || "📱"}
                          onChange={(e) => {
                            const newProjs = [...formData.projects];
                            newProjs[pIdx].image = e.target.value;
                            setFormData({ ...formData, projects: newProjs });
                          }}
                          className="w-10 text-center py-1 rounded-lg bg-slate-900 border border-slate-800 text-lg"
                        />
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const newProjs = [...formData.projects];
                            newProjs[pIdx].title = e.target.value;
                            setFormData({ ...formData, projects: newProjs });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-white"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newProjs = formData.projects.filter((_, i) => i !== pIdx);
                          setFormData({ ...formData, projects: newProjs });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400">ক্যাটাগরি</label>
                        <select
                          value={proj.category}
                          onChange={(e) => {
                            const newProjs = [...formData.projects];
                            newProjs[pIdx].category = e.target.value as "mobile" | "web";
                            setFormData({ ...formData, projects: newProjs });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-semibold"
                        >
                          <option value="mobile">Mobile (Android)</option>
                          <option value="web">Web Platform</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400">Live URL</label>
                        <input
                          type="text"
                          value={proj.liveUrl}
                          onChange={(e) => {
                            const newProjs = [...formData.projects];
                            newProjs[pIdx].liveUrl = e.target.value;
                            setFormData({ ...formData, projects: newProjs });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400">GitHub Repo URL</label>
                        <input
                          type="text"
                          value={proj.githubUrl}
                          onChange={(e) => {
                            const newProjs = [...formData.projects];
                            newProjs[pIdx].githubUrl = e.target.value;
                            setFormData({ ...formData, projects: newProjs });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">বিবরণ (Description)</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const newProjs = [...formData.projects];
                          newProjs[pIdx].description = e.target.value;
                          setFormData({ ...formData, projects: newProjs });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs resize-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">ট্যাগস (কমা দিয়ে আলাদা করুন, e.g. Kotlin, Compose, Firebase)</label>
                      <input
                        type="text"
                        value={proj.tags.join(", ")}
                        onChange={(e) => {
                          const newProjs = [...formData.projects];
                          newProjs[pIdx].tags = e.target.value.split(",").map((t) => t.trim()).filter(Boolean);
                          setFormData({ ...formData, projects: newProjs });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">💼 কাজের অভিজ্ঞতা (Work Experience)</h2>
                  <p className="text-xs text-slate-400">Manage work timeline items</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newExp: WorkExperienceItem = {
                        role: "Software Developer",
                        company: "Company Name",
                        period: "2024 - Present",
                        location: "Bangladesh",
                        description: "বিবরণ...",
                        highlights: ["Highlight 1"],
                      };
                      setFormData({ ...formData, work_experiences: [newExp, ...formData.work_experiences] });
                    }}
                    className="px-3 py-1.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> অভিজ্ঞতা যোগ
                  </button>
                  <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> সেভ
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {formData.work_experiences.map((exp, eIdx) => (
                  <div key={eIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const newExp = [...formData.work_experiences];
                          newExp[eIdx].role = e.target.value;
                          setFormData({ ...formData, work_experiences: newExp });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newExp = formData.work_experiences.filter((_, i) => i !== eIdx);
                          setFormData({ ...formData, work_experiences: newExp });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => {
                          const newExp = [...formData.work_experiences];
                          newExp[eIdx].company = e.target.value;
                          setFormData({ ...formData, work_experiences: newExp });
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Period"
                        value={exp.period}
                        onChange={(e) => {
                          const newExp = [...formData.work_experiences];
                          newExp[eIdx].period = e.target.value;
                          setFormData({ ...formData, work_experiences: newExp });
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) => {
                          const newExp = [...formData.work_experiences];
                          newExp[eIdx].location = e.target.value;
                          setFormData({ ...formData, work_experiences: newExp });
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const newExp = [...formData.work_experiences];
                        newExp[eIdx].description = e.target.value;
                        setFormData({ ...formData, work_experiences: newExp });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SERVICES */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">⚡ সেবা প্রদান (Services Offered)</h2>
                  <p className="text-xs text-slate-400">Services & Solutions list</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newServ: ServiceItem = {
                        title: "নতুন সেবা",
                        description: "সেবার বিবরণ...",
                      };
                      setFormData({ ...formData, services: [...formData.services, newServ] });
                    }}
                    className="px-3 py-1.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> সেবা যোগ
                  </button>
                  <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> সেভ
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.services.map((serv, sIdx) => (
                  <div key={sIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                      <input
                        type="text"
                        value={serv.title}
                        onChange={(e) => {
                          const newServs = [...formData.services];
                          newServs[sIdx].title = e.target.value;
                          setFormData({ ...formData, services: newServs });
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-white flex-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newServs = formData.services.filter((_, i) => i !== sIdx);
                          setFormData({ ...formData, services: newServs });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <textarea
                      rows={3}
                      value={serv.description}
                      onChange={(e) => {
                        const newServs = [...formData.services];
                        newServs[sIdx].description = e.target.value;
                        setFormData({ ...formData, services: newServs });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: PHOTO GALLERY MANAGER */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">📸 ফটো গ্যালারি ম্যানেজমেন্ট (Photo Gallery)</h2>
                  <p className="text-xs text-slate-400">Formal & Casual photo gallery items</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newPhoto: PhotoGalleryItem = {
                        id: "gal-" + Date.now(),
                        title: "New Photo Title",
                        category: "formal",
                        description: "Photo description...",
                        imageUrl: "/gallery/photo-1.jpg",
                      };
                      setFormData({
                        ...formData,
                        photo_gallery: [newPhoto, ...(formData.photo_gallery || [])],
                      });
                    }}
                    className="px-3 py-1.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> নতুন ছবি যোগ
                  </button>
                  <button onClick={handleSaveAll} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> সেভ
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(formData.photo_gallery || []).map((photo, gIdx) => (
                  <div key={photo.id || gIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                      <input
                        type="text"
                        value={photo.title}
                        onChange={(e) => {
                          const newGallery = [...(formData.photo_gallery || [])];
                          newGallery[gIdx].title = e.target.value;
                          setFormData({ ...formData, photo_gallery: newGallery });
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-white flex-1"
                      />
                      <select
                        value={photo.category}
                        onChange={(e) => {
                          const newGallery = [...(formData.photo_gallery || [])];
                          newGallery[gIdx].category = e.target.value as "formal" | "casual";
                          setFormData({ ...formData, photo_gallery: newGallery });
                        }}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-400 capitalize"
                      >
                        <option value="formal">Formal</option>
                        <option value="casual">Casual</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          const newGallery = (formData.photo_gallery || []).filter((_, i) => i !== gIdx);
                          setFormData({ ...formData, photo_gallery: newGallery });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">Image Path / URL</label>
                      <input
                        type="text"
                        value={photo.imageUrl}
                        onChange={(e) => {
                          const newGallery = [...(formData.photo_gallery || [])];
                          newGallery[gIdx].imageUrl = e.target.value;
                          setFormData({ ...formData, photo_gallery: newGallery });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">Description (Optional)</label>
                      <input
                        type="text"
                        value={photo.description || ""}
                        onChange={(e) => {
                          const newGallery = [...(formData.photo_gallery || [])];
                          newGallery[gIdx].description = e.target.value;
                          setFormData({ ...formData, photo_gallery: newGallery });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: RAW JSON EDITOR & BACKUP */}
          {activeTab === "raw" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">💾 Raw JSON ব্যাকআপ ও এডিটর</h2>
                  <p className="text-xs text-slate-400">View or update full portfolio_data.json</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportPortfolioJson}
                    className="px-3.5 py-2 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> JSON ব্যাকআপ ফাইল নামান
                  </button>
                  <button onClick={handleRawJsonSave} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" /> JSON অ্যাপ্লাই করুন
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  rows={18}
                  value={rawJsonText}
                  onChange={(e) => setRawJsonText(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 leading-relaxed focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
