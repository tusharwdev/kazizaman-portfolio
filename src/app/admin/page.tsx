"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio, initialPhotoGalleryList } from "@/context/PortfolioContext";
import {
  PortfolioData,
  ProjectItem,
  SkillCategory,
  WorkExperienceItem,
  EducationItem,
  ServiceItem,
  PhotoGalleryItem,
  CertificateItem,
  CoreCompetencyItem,
  ThemeSettings,
} from "@/types/portfolio";
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
  Palette,
  GraduationCap,
  ShieldCheck,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";

const ADMIN_EMAIL = "tusharwdev@gmail.com";
const ADMIN_PASSWORD = "Tuu9900--";

const defaultCompetenciesList: CoreCompetencyItem[] = [
  {
    id: "website-specialist",
    title: "Website Specialist",
    title_bn: "ওয়েবসাইট স্পেশালিস্ট",
    category: "tech",
    description: "Expertise in crafting modern, high-performance web systems, responsive portals, UI/UX optimization, and domain deployment tailored for enterprise & personal branding.",
    description_bn: "আধুনিক, উচ্চগতিসম্পন্ন ও রেসপন্সিভ ওয়েবসাইট তৈরি, এসইও-বান্ধব আর্কিটেকচার এবং সরকারি ও কর্পোরেট ব্রান্ডিং উপযোগী পোর্টাল নির্মাণে বিশেষ দক্ষতা।",
    iconName: "Globe",
    highlights: ["Modern Responsive Web Architecture", "High Performance & SEO Optimization", "Enterprise Portal & Domain Deployment"],
    importance: "Primary Core Competency"
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Software Developer",
    title_bn: "ফুল-স্ট্যাক সফটওয়্যার ডেভেলপার",
    category: "tech",
    description: "End-to-end native Android apps (Kotlin, Jetpack Compose), full-stack web platforms (Next.js, React), and secure RESTful backend APIs (Laravel, MySQL).",
    description_bn: "নেটিভ অ্যান্ড্রয়েড মোবাইল অ্যাপ (Kotlin, Jetpack Compose) এবং আধুনিক ব্যাকএন্ড ও ফ্রন্টএন্ড ওয়েবসাইটের (Next.js, Laravel) এন্ড-টু-এন্ড সফটওয়্যার সমাধান।",
    iconName: "Code2",
    highlights: ["Native Android Mobile Apps (Kotlin)", "Next.js, React & Tailwind Web Apps", "REST API, Database & Security Engineering"],
    importance: "Primary Core Competency"
  },
  {
    id: "journalist",
    title: "Journalist",
    title_bn: "সাংবাদিক ও সম্পাদকীয় বিশ্লেষক",
    category: "media",
    description: "Professional news writing, editorial curation, ethical journalism, public communication, and objective reporting for mainstream online media.",
    description_bn: "বস্তুনিষ্ঠ সংবাদ পরিবেশন, মিডিয়া এথিক্স, সম্পাদনা, পাবলিক ডিজিটাল কমিউনিকেশন এবং দায়িত্বশীল সাংবাদিকতায় অভিজ্ঞতা।",
    iconName: "Newspaper",
    highlights: ["Professional News & Editorial Writing", "Media Ethics & Public Communication", "Mainstream Online News Management"],
    importance: "Primary Core Competency"
  },
  {
    id: "video-creator",
    title: "Video Creator",
    title_bn: "ভিডিও ক্রিয়েটর ও কন্টেন্ট প্রডিউসার",
    category: "media",
    description: "Conceptualizing, scripting, video editing, storytelling, and broadcasting visual media content across digital platforms and social networks.",
    description_bn: "ভিজ্যুয়াল স্টোরিটেলিং, ভিডিও স্ক্রিপ্টিং, এডিটিং এবং ডিজিটাল প্ল্যাটফর্ম ও সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় ভিডিও কন্টেন্ট প্রযোজনা।",
    iconName: "Video",
    highlights: ["Visual Storytelling & Video Editing", "Scriptwriting & Content Strategy", "Multi-platform Digital Content Creation"],
    importance: "Primary Core Competency"
  },
  {
    id: "creative-ideation",
    title: "Creative Ideation",
    title_bn: "সৃজনশীল ধারণায়ন ও প্রবলেম সলভিং",
    category: "cognitive",
    description: "Generating innovative project concepts, out-of-the-box product strategies, and creative solutions to solve complex organizational & technical challenges.",
    description_bn: "নতুন প্রজেক্টের সৃষ্টিশীল কনসেপ্ট তৈরি, অভিনব আইডিয়া জেনারেশন এবং জটিল চ্যালেঞ্জের উদ্ভাবনী সমাধান তৈরি।",
    iconName: "Lightbulb",
    highlights: ["Innovative Product Concept Design", "Out-of-the-Box Problem Solving", "Strategic Campaign & Project Planning"],
    importance: "Primary Core Competency"
  },
  {
    id: "keen-observation",
    title: "Keen Observation",
    title_bn: "সূক্ষ্ম পর্যবেক্ষণ ক্ষমতা",
    category: "cognitive",
    description: "Sharp attention to detail, identifying underlying operational patterns, field realities, subtle UI/UX inconsistencies, and system anomalies.",
    description_bn: "যেকোনো প্রজেক্ট, ক্ষেত্র বা সিস্টেমে সূক্ষ্ম বিষয় ও ত্রুটিগুলো নিবিড়ভাবে পর্যবেক্ষণ ও মূল্যায়ন করার বিশেষ সামর্থ্য।",
    iconName: "Eye",
    highlights: ["High Attention to Detail & Quality", "Identifying System & Operational Flaws", "Field Reality & User Pattern Analysis"],
    importance: "Primary Core Competency"
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking",
    title_bn: "ক্রিটিক্যাল থিংকিং ও নিরপেক্ষ মূল্যায়ন",
    category: "cognitive",
    description: "Rigorous logical analysis, objective data synthesis, evaluating risks unbiasedly, and arriving at data-backed strategic decisions.",
    description_bn: "যুক্তিযুক্ত চিন্তা, অবজেক্টিভ তথ্য বিশ্লেষণ, ঝুঁকি পর্যালোচনা এবং তথ্য-ভিত্তিক কৌশলগত সিদ্ধান্ত গ্রহণ।",
    iconName: "BrainCircuit",
    highlights: ["Data-Driven Objective Analysis", "Root Cause Identification", "Strategic Risk Evaluation"],
    importance: "Primary Core Competency"
  },
  {
    id: "investigative-research",
    title: "Investigative Research",
    title_bn: "অনুসন্ধানী গবেষণা ও তথ্য যাচাই",
    category: "media",
    description: "Deep-dive primary research, fact-checking, evidence gathering, cross-verification, and crafting authoritative investigative reports.",
    description_bn: "তথ্য অনুসন্ধান, সত্যতা যাচাই (Fact-checking), মূল উৎস থেকে ডেটা সংগ্রহ এবং নির্ভরযোগ্য অনুসন্ধানী গবেষণা প্রতিবেদন প্রস্তুত।",
    iconName: "SearchCheck",
    highlights: ["Deep-Dive Primary & Secondary Research", "Rigorous Fact-Checking & Verification", "Comprehensive Report Curation"],
    importance: "Primary Core Competency"
  },
  {
    id: "highfocus-execution",
    title: "High-Focus Execution",
    title_bn: "উচ্চ-মনোযোগ নির্ভর বাস্তবায়ন",
    category: "execution",
    description: "Laser-focused execution discipline, meeting strict deadlines, driving projects from initial draft to complete high-quality execution without distraction.",
    description_bn: "একগ্র মনোযোগে কাজ সম্পাদন, নির্ধারিত সময়ের মধ্যে শতভাগ লক্ষ্য অর্জন এবং অত্যন্ত সুসংগঠিতভাবে কাজ সম্পন্ন করার দৃঢ়তা।",
    iconName: "Target",
    highlights: ["Laser-Focused Task Completion", "Strict Deadline Discipline", "High Quality Standards & Reliability"],
    importance: "Primary Core Competency"
  }
];

const defaultCertificatesList: CertificateItem[] = [
  {
    id: "scout-1",
    title: "বাংলাদেশ স্কাউটস - বিদ্যুত স্কাউট ক্যাম্প ২০১১",
    category: "scouts",
    issueDate: "২০১১",
    issuer: "বাংলাদেশ স্কাউটস",
    description: "জাতীয় স্কাউটস ক্যাম্প অংশগ্রহণ ও সনদপত্র",
    imageUrl: "/certificates/bidduth-scout-camp-2011.jpg"
  },
  {
    id: "scout-2",
    title: "বাংলাদেশ স্কাউটস - স্কাউট জাম্বুরী ২০১০",
    category: "scouts",
    issueDate: "২০১০",
    issuer: "বাংলাদেশ স্কাউটস",
    description: "স্কাউট জাম্বুরী দক্ষতা অর্জন সনদপত্র",
    imageUrl: "/certificates/scout-jamboree-2010.jpg"
  },
  {
    id: "scout-3",
    title: "ইউনিয়ন পরিষদ চেয়ারম্যান প্রশংশাপত্র ২০১৬",
    category: "civic",
    issueDate: "২০১৬",
    issuer: "রাজা চাপিতলা ইউনিয়ন পরিষদ",
    description: "সামাজিক সেবামূলক কাজে অবদান সনদপত্র",
    imageUrl: "/certificates/union-parishad-certificate-2016.jpg"
  }
];

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

  type TabType =
    | "developer"
    | "hero_card"
    | "theme_design"
    | "competencies"
    | "stats"
    | "skills"
    | "projects"
    | "experience"
    | "education"
    | "services"
    | "certificates"
    | "jibon"
    | "gallery"
    | "raw";

  const [activeTab, setActiveTab] = useState<TabType>("developer");

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
    const preparedData = {
      ...portfolioData,
      competencies: (portfolioData.competencies && portfolioData.competencies.length > 0)
        ? portfolioData.competencies
        : defaultCompetenciesList,
      photo_gallery: (portfolioData.photo_gallery && portfolioData.photo_gallery.length > 0)
        ? portfolioData.photo_gallery
        : initialPhotoGalleryList,
      jibon_brittanto: {
        ...portfolioData.jibon_brittanto,
        certificates: (portfolioData.jibon_brittanto?.certificates && portfolioData.jibon_brittanto.certificates.length > 0)
          ? portfolioData.jibon_brittanto.certificates
          : defaultCertificatesList,
      }
    };
    setFormData(preparedData);
    setRawJsonText(JSON.stringify(preparedData, null, 2));
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
    showToast("সকল তথ্য ও ডিজাইন সেটিংস সফলভাবে সংরক্ষণ করা হয়েছে!");
  };

  const handleReset = () => {
    if (window.confirm("আপনি কি নিশ্চিত যে সকল ডেটা ও ডিজাইন সেটিংস রিসেট করে ডিফল্ট অবস্থায় ফিরিয়ে আনবেন?")) {
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
                ...prev.developer.heroPhoto,
                url: result,
                positionX: prev.developer.heroPhoto?.positionX ?? 50,
                positionY: prev.developer.heroPhoto?.positionY ?? 20,
                scale: prev.developer.heroPhoto?.scale ?? 1.05,
                frameHeight: prev.developer.heroPhoto?.frameHeight ?? 320,
              },
            },
          }));
          showToast("হিরো ফটো সফলভাবে আপলোড করা হয়েছে!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const updateDeveloperField = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      developer: { ...prev.developer, [field]: value },
    }));
  };

  const updateHeroPhotoField = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      developer: {
        ...prev.developer,
        heroPhoto: {
          url: prev.developer.heroPhoto?.url || "/gallery/hero-bike.jpg",
          positionX: prev.developer.heroPhoto?.positionX ?? 50,
          positionY: prev.developer.heroPhoto?.positionY ?? 20,
          scale: prev.developer.heroPhoto?.scale ?? 1.05,
          frameHeight: prev.developer.heroPhoto?.frameHeight ?? 320,
          ...prev.developer.heroPhoto,
          [field]: value,
        },
      },
    }));
  };

  const updateThemeField = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      theme: {
        primaryColor: "indigo",
        showCompetencies: true,
        showServices: true,
        showProjects: true,
        showExperience: true,
        showEducation: true,
        showCertificates: true,
        showPhotoGallery: true,
        showJibonBrittanto: true,
        showStats: true,
        ...prev.theme,
        [field]: value,
      },
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">এডমিন লগইন (Kazizaman.online)</h1>
            <p className="text-xs text-slate-400">সাইটের সকল কন্টেন্ট ও ডিজাইন নিয়ন্ত্রণ করার জন্য লগইন করুন</p>
          </div>

          {loginError && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">ইমেইল (Email)</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="admin@kazizaman.online"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">পাসওয়ার্ড (Password)</label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
            >
              প্রবেশ করুন (Login)
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-800/80">
            <Link href="/" className="text-xs text-indigo-400 hover:underline inline-flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              <span>মূল সাইটে ফিরে যান</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "developer", label: "প্রোফাইল তথ্য", icon: User },
    { id: "hero_card", label: "হিরো ও ছবি", icon: Camera },
    { id: "theme_design", label: "ডিজাইন ও লেআউট", icon: Palette },
    { id: "competencies", label: "৯টি মূল স্তম্ভ", icon: ShieldCheck },
    { id: "stats", label: "পরিসংখ্যান (Stats)", icon: Award },
    { id: "skills", label: "দক্ষতা (Skills)", icon: Wrench },
    { id: "projects", label: "প্রজেক্টসমূহ", icon: FolderGit2 },
    { id: "experience", label: "অভিজ্ঞতা", icon: Briefcase },
    { id: "education", label: "শিক্ষা (Education)", icon: GraduationCap },
    { id: "services", label: "সার্ভিসসমূহ", icon: Zap },
    { id: "certificates", label: "সার্টিফিকেট", icon: Sparkles },
    { id: "jibon", label: "জীবন বৃত্তান্ত", icon: FileText },
    { id: "gallery", label: "ছবি গ্যালারি", icon: ImageIcon },
    { id: "raw", label: "JSON ব্যাকআপ", icon: Code2 },
  ];

  const currentCompetencies = (formData.competencies && formData.competencies.length > 0)
    ? formData.competencies
    : defaultCompetenciesList;

  const currentCertificates = (formData.jibon_brittanto?.certificates && formData.jibon_brittanto.certificates.length > 0)
    ? formData.jibon_brittanto.certificates
    : defaultCertificatesList;

  const currentGallery = (formData.photo_gallery && formData.photo_gallery.length > 0)
    ? formData.photo_gallery
    : initialPhotoGalleryList;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl font-semibold text-sm flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base block">Kazizaman.online Admin</span>
              <span className="text-xs text-indigo-400 font-mono">ফুল কন্ট্রোল এডমিন প্যানেল</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">লাইভ সাইট দেখুন</span>
            </Link>

            <button
              onClick={handleSaveAll}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all"
            >
              <Save className="w-4 h-4" />
              <span>সেভ করুন (Save All)</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-colors"
              title="লগআউট"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-3 space-y-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1.5 block font-semibold">
              কন্ট্রোল ক্যাটাগরি
            </span>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold text-slate-300 block">কুইক অ্যাকশন (Quick Actions)</span>
            <button
              onClick={exportPortfolioJson}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>JSON ব্যাকআপ ডাউনলোড</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ডিফল্ট ডেটা রিসেট</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          {/* TAB 1: DEVELOPER INFO */}
          {activeTab === "developer" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-400" />
                  <span>ডেভেলপার ও পার্সোনাল প্রোফাইল তথ্য</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">নাম, ইমেইল, মোবাইল, বায়োডাটা এবং সোশ্যাল মিডিয়া লিংক আপডেট করুন</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">নাম (বাংলা)</label>
                  <input
                    type="text"
                    value={formData.developer.name}
                    onChange={(e) => updateDeveloperField("name", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Name (English)</label>
                  <input
                    type="text"
                    value={formData.developer.name_en}
                    onChange={(e) => updateDeveloperField("name_en", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">প্রধান টাইটেল (Title / Subheading)</label>
                <input
                  type="text"
                  value={formData.developer.title}
                  onChange={(e) => updateDeveloperField("title", e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">স্ট্যাটাস ব্যাজ (Status Badge Text)</label>
                <input
                  type="text"
                  value={formData.developer.statusBadge}
                  onChange={(e) => updateDeveloperField("statusBadge", e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">সংক্ষিপ্ত বায়ো (Short Bio / Highlight Summary)</label>
                <textarea
                  rows={3}
                  value={formData.developer.shortBio || ""}
                  onChange={(e) => updateDeveloperField("shortBio", e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  placeholder="BSS (Honours) graduate in Social Work, Web Developer..."
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">বিস্তারিত বায়োডাটা (Full Bio - \n\n দিয়ে প্যারা আলাদা করুন)</label>
                <textarea
                  rows={6}
                  value={formData.developer.bio}
                  onChange={(e) => updateDeveloperField("bio", e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">মোবাইল নম্বর</label>
                  <input
                    type="text"
                    value={formData.developer.phone}
                    onChange={(e) => updateDeveloperField("phone", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">ইমেইল (Email)</label>
                  <input
                    type="email"
                    value={formData.developer.email}
                    onChange={(e) => updateDeveloperField("email", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">লোকেশন (Location)</label>
                  <input
                    type="text"
                    value={formData.developer.location}
                    onChange={(e) => updateDeveloperField("location", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Fiverr URL</label>
                  <input
                    type="text"
                    value={formData.developer.fiverr}
                    onChange={(e) => updateDeveloperField("fiverr", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.developer.github}
                    onChange={(e) => updateDeveloperField("github", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">WhatsApp URL</label>
                  <input
                    type="text"
                    value={formData.developer.whatsapp}
                    onChange={(e) => updateDeveloperField("whatsapp", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HERO CARD & PHOTO */}
          {activeTab === "hero_card" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-indigo-400" />
                  <span>হিরো ফটো কাস্টমাইজেশন ও কার্ড সেটিংস</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">হিরো ব্যানারের ফটো, পজিশনিং, জুমিং, সাবটাইটেল ও ব্যাজ টেক্সট টিউন করুন</p>
              </div>

              {/* Photo Upload & URL */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs font-bold text-slate-300 block">হিরো ছবি পরিবর্তন (Upload or Image URL)</span>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>নতুন পিসি থেকে ছবি আপলোড করুন</span>
                    <input type="file" accept="image/*" onChange={handleHeroPhotoUpload} className="hidden" />
                  </label>

                  <span className="text-xs text-slate-500">অথবা ছবির পাথ/URL দিন:</span>

                  <input
                    type="text"
                    value={formData.developer.heroPhoto?.url || ""}
                    onChange={(e) => updateHeroPhotoField("url", e.target.value)}
                    placeholder="/gallery/photo-3.jpg"
                    className="flex-1 px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:outline-none"
                  />
                </div>
              </div>

              {/* Live Card Preview Box */}
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    <span>লাইভ হিরো ফটো প্রিভিউ (Live Card Preview)</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    স্লাইডার সরালে সরাসরি এখানে রেসপন্স করবে
                  </span>
                </div>

                <div className="relative mx-auto max-w-sm w-full rounded-3xl overflow-hidden border-2 border-indigo-500/50 shadow-2xl bg-slate-900">
                  <div
                    style={{ height: `${formData.developer.heroPhoto?.frameHeight ?? 320}px` }}
                    className="relative w-full overflow-hidden flex items-center justify-center bg-slate-950"
                  >
                    <img
                      src={formData.developer.heroPhoto?.url || "/gallery/hero-bike.jpg"}
                      alt="Hero Preview"
                      style={{
                        objectPosition: `${formData.developer.heroPhoto?.positionX ?? 50}% ${formData.developer.heroPhoto?.positionY ?? 20}%`,
                        transform: `scale(${formData.developer.heroPhoto?.scale ?? 1.05}) translate(${((formData.developer.heroPhoto?.positionX ?? 50) - 50) * 1.2}%, ${((formData.developer.heroPhoto?.positionY ?? 20) - 50) * 1.2}%)`,
                      }}
                      className="w-full h-full object-cover transition-transform duration-75 ease-out"
                    />

                    {/* Badges Overlay */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full border border-slate-700 text-[10px] font-semibold text-emerald-400 shadow-md">
                      {formData.developer.heroPhoto?.badgeLeftText || "● Official Portfolio"}
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 bg-indigo-950/80 backdrop-blur-md rounded-full border border-indigo-700 text-[10px] font-semibold text-indigo-300 shadow-md">
                      {formData.developer.heroPhoto?.badgeRightText || "9 Core Pillars"}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-800/80 space-y-0.5 text-left">
                      <span className="text-xs font-bold text-white block">
                        {formData.developer.name_en || "Kazi Zaman"}
                      </span>
                      <span className="text-[11px] text-indigo-300 font-medium block">
                        {formData.developer.heroPhoto?.subtitle || "Multidisciplinary Professional"}
                      </span>
                      {formData.developer.heroPhoto?.degreeText && (
                        <span className="text-[10px] text-amber-300 font-mono block">
                          {formData.developer.heroPhoto.degreeText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Position & Scale Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Horizontal Position (X): {formData.developer.heroPhoto?.positionX ?? 50}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.developer.heroPhoto?.positionX ?? 50}
                    onChange={(e) => updateHeroPhotoField("positionX", Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Vertical Position (Y): {formData.developer.heroPhoto?.positionY ?? 20}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.developer.heroPhoto?.positionY ?? 20}
                    onChange={(e) => updateHeroPhotoField("positionY", Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Image Scale (Zoom): {formData.developer.heroPhoto?.scale ?? 1.05}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="2.5"
                    step="0.05"
                    value={formData.developer.heroPhoto?.scale ?? 1.05}
                    onChange={(e) => updateHeroPhotoField("scale", Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Frame Height (px): {formData.developer.heroPhoto?.frameHeight ?? 320}px</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="600"
                    step="10"
                    value={formData.developer.heroPhoto?.frameHeight ?? 320}
                    onChange={(e) => updateHeroPhotoField("frameHeight", Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                </div>
              </div>

              {/* Subtitles and Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">বাম পাশের ব্যাজ টেক্সট (Left Badge)</label>
                  <input
                    type="text"
                    value={formData.developer.heroPhoto?.badgeLeftText || ""}
                    onChange={(e) => updateHeroPhotoField("badgeLeftText", e.target.value)}
                    placeholder="● Official Portfolio"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">ডান পাশের ব্যাজ টেক্সট (Right Badge)</label>
                  <input
                    type="text"
                    value={formData.developer.heroPhoto?.badgeRightText || ""}
                    onChange={(e) => updateHeroPhotoField("badgeRightText", e.target.value)}
                    placeholder="9 Core Pillars"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THEME & DESIGN */}
          {activeTab === "theme_design" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-400" />
                  <span>ডিজাইন, কালার স্কিম ও সেকশন কন্ট্রোল</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">কোডিং ছাড়াই সাইটের যেকোনো সেকশন চালু/বন্ধ করুন এবং কাস্টম কালার ও থিম নির্বাচন করুন</p>
              </div>

              {/* Section Visibility Toggles */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs font-bold text-white block flex items-center gap-2">
                  <LayoutTemplate className="w-4 h-4 text-indigo-400" />
                  <span>সেকশন হাইড/শো কন্ট্রোল (Show/Hide Sections)</span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { key: "showCompetencies", label: "৯টি মূল স্তম্ভ সেকশন" },
                    { key: "showServices", label: "সার্ভিসসমূহ সেকশন" },
                    { key: "showProjects", label: "প্রজেক্টসমূহ সেকশন" },
                    { key: "showExperience", label: "অভিজ্ঞতা সেকশন" },
                    { key: "showEducation", label: "শিক্ষা সেকশন" },
                    { key: "showCertificates", label: "সার্টিফিকেট সেকশন" },
                    { key: "showPhotoGallery", label: "ছবি গ্যালারি লিংক" },
                    { key: "showJibonBrittanto", label: "জীবন বৃত্তান্ত লিংক" },
                    { key: "showStats", label: "পরিসংখ্যান কার্ডসমূহ" },
                  ].map((item) => {
                    const isChecked = (formData.theme as any)?.[item.key] !== false;
                    return (
                      <label
                        key={item.key}
                        className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? "bg-indigo-950/40 border-indigo-800/60 text-white"
                            : "bg-slate-900 border-slate-800 text-slate-400 opacity-60"
                        }`}
                      >
                        <span className="text-xs font-semibold">{item.label}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => updateThemeField(item.key, e.target.checked)}
                          className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Theme Color Schemes */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 block">প্রাইমারি কালার স্কিম (Primary Theme Preset)</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "indigo", name: "Royal Indigo", bg: "bg-indigo-600" },
                    { id: "emerald", name: "Forest Emerald", bg: "bg-emerald-600" },
                    { id: "purple", name: "Deep Purple", bg: "bg-purple-600" },
                    { id: "rose", name: "Vibrant Rose", bg: "bg-rose-600" },
                    { id: "cyan", name: "Ocean Cyan", bg: "bg-cyan-600" },
                    { id: "amber", name: "Warm Amber", bg: "bg-amber-600" },
                  ].map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => updateThemeField("primaryColor", color.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                        formData.theme?.primaryColor === color.id
                          ? "border-white text-white shadow-lg bg-slate-900"
                          : "border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${color.bg}`} />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Copyright Text */}
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">ফুটার কপিরাইট টেক্সট (Footer Text)</label>
                <input
                  type="text"
                  value={formData.theme?.footerText || ""}
                  onChange={(e) => updateThemeField("footerText", e.target.value)}
                  placeholder="© 2026 Kazi Zaman · kazizaman.online"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 4: 9 CORE COMPETENCIES */}
          {activeTab === "competencies" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    <span>৯টি সম-গুরুত্বসম্পন্ন মূল স্তম্ভ (Core Competencies)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">প্রোফাইলের ৯টি মূল স্তম্ভের টাইটেল, বাংলা বিবরণ ও হাইলাইটস এডিট করুন</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentCompetencies.map((comp, idx) => (
                  <div key={comp.id || idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">
                        Pillar #{idx + 1}: {comp.title} ({comp.title_bn})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">Title (English)</label>
                        <input
                          type="text"
                          value={comp.title}
                          onChange={(e) => {
                            const updated = [...currentCompetencies];
                            updated[idx].title = e.target.value;
                            setFormData((prev) => ({ ...prev, competencies: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">টাইটেল (বাংলা)</label>
                        <input
                          type="text"
                          value={comp.title_bn}
                          onChange={(e) => {
                            const updated = [...currentCompetencies];
                            updated[idx].title_bn = e.target.value;
                            setFormData((prev) => ({ ...prev, competencies: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">বিবরণ (বাংলা)</label>
                      <textarea
                        rows={2}
                        value={comp.description_bn}
                        onChange={(e) => {
                          const updated = [...currentCompetencies];
                          updated[idx].description_bn = e.target.value;
                          setFormData((prev) => ({ ...prev, competencies: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STATS */}
          {activeTab === "stats" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span>পরিসংখ্যান ও কী-ম্যাট্রিক্স (Stats)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">অভিজ্ঞতা, প্রজেক্ট সংখ্যা এবং ক্লায়েন্ট সন্তুষ্টির সংখ্যা এডিট করুন</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">অভিজ্ঞতার বছর (Years Experience)</label>
                  <input
                    type="text"
                    value={formData.stats.experience_years}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, experience_years: e.target.value },
                      }))
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">সম্পন্ন প্রজেক্ট সংখ্যা</label>
                  <input
                    type="text"
                    value={formData.stats.projects_completed}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, projects_completed: e.target.value },
                      }))
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">সন্তুষ্ট ক্লায়েন্ট (Satisfaction)</label>
                  <input
                    type="text"
                    value={formData.stats.satisfied_clients}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, satisfied_clients: e.target.value },
                      }))
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SKILLS */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-indigo-400" />
                    <span>টেকনিক্যাল ও প্রফেশনাল দক্ষতা (Skills)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">ক্যাটাগরি অনুযায়ী দক্ষতা ও পার্সেন্টেজ লেভেল যোগ বা এডিট করুন</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newSkills = [
                      ...formData.skills,
                      { category: "নতুন ক্যাটাগরি", items: [{ name: "নতুন স্কিল", level: 80 }] },
                    ];
                    setFormData((prev) => ({ ...prev, skills: newSkills }));
                  }}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>ক্যাটাগরি যোগ করুন</span>
                </button>
              </div>

              <div className="space-y-6">
                {formData.skills.map((cat, cIdx) => (
                  <div key={cIdx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={cat.category}
                        onChange={(e) => {
                          const updated = [...formData.skills];
                          updated[cIdx].category = e.target.value;
                          setFormData((prev) => ({ ...prev, skills: updated }));
                        }}
                        className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm font-bold"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          const updated = formData.skills.filter((_, idx) => idx !== cIdx);
                          setFormData((prev) => ({ ...prev, skills: updated }));
                        }}
                        className="p-1.5 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {cat.items.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => {
                              const updated = [...formData.skills];
                              updated[cIdx].items[sIdx].name = e.target.value;
                              setFormData((prev) => ({ ...prev, skills: updated }));
                            }}
                            className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                          />
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={item.level}
                            onChange={(e) => {
                              const updated = [...formData.skills];
                              updated[cIdx].items[sIdx].level = Number(e.target.value);
                              setFormData((prev) => ({ ...prev, skills: updated }));
                            }}
                            className="w-20 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs text-center font-mono font-bold"
                          />
                          <span className="text-xs text-slate-400 font-mono">%</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...formData.skills];
                              updated[cIdx].items = updated[cIdx].items.filter((_, idx) => idx !== sIdx);
                              setFormData((prev) => ({ ...prev, skills: updated }));
                            }}
                            className="p-1 text-slate-400 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...formData.skills];
                          updated[cIdx].items.push({ name: "নতুন স্কিল", level: 85 });
                          setFormData((prev) => ({ ...prev, skills: updated }));
                        }}
                        className="text-xs text-indigo-400 hover:underline inline-flex items-center gap-1 mt-2 font-semibold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>স্কিল যোগ করুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-indigo-400" />
                    <span>প্রজেক্ট পোর্টফোলিও (Projects)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">মোবাইল অ্যাপস ও ওয়েব সফটওয়্যার প্রজেক্ট এডিট বা যোগ করুন</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newProj: ProjectItem = {
                      id: "project-" + Date.now(),
                      title: "নতুন প্রজেক্ট",
                      category: "web",
                      description: "প্রজেক্টের বিবরণ লিখুন...",
                      tags: ["React", "Laravel"],
                      liveUrl: "#",
                      githubUrl: "#",
                    };
                    setFormData((prev) => ({ ...prev, projects: [newProj, ...prev.projects] }));
                  }}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন প্রজেক্ট</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.projects.map((proj, idx) => (
                  <div key={proj.id || idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[idx].title = e.target.value;
                          setFormData((prev) => ({ ...prev, projects: updated }));
                        }}
                        className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = formData.projects.filter((_, i) => i !== idx);
                          setFormData((prev) => ({ ...prev, projects: updated }));
                        }}
                        className="p-1.5 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">ক্যাটাগরি</label>
                        <select
                          value={proj.category}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].category = e.target.value as any;
                            setFormData((prev) => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        >
                          <option value="web">Web Application</option>
                          <option value="mobile">Mobile Application</option>
                          <option value="all">All / Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">Live URL</label>
                        <input
                          type="text"
                          value={proj.liveUrl}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].liveUrl = e.target.value;
                            setFormData((prev) => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">GitHub URL</label>
                        <input
                          type="text"
                          value={proj.githubUrl}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].githubUrl = e.target.value;
                            setFormData((prev) => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">বিবরণ</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[idx].description = e.target.value;
                          setFormData((prev) => ({ ...prev, projects: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                    <span>কর্মসংস্থান ও অভিজ্ঞতা (Work Experience)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">চাকরি ও ফ্রিল্যান্স কাজের অভিজ্ঞতা টাইমলাইন টাইপ এডিট করুন</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newExp: WorkExperienceItem = {
                      role: "নতুন রোল / পদবী",
                      company: "কোম্পানির নাম",
                      period: "2024 - Present",
                      location: "ঢাকা, বাংলাদেশ",
                      description: "কাজের সংক্ষিপ্ত বিবরণ...",
                      highlights: ["মূল কাজ ১", "মূল কাজ ২"],
                    };
                    setFormData((prev) => ({
                      ...prev,
                      work_experiences: [newExp, ...prev.work_experiences],
                    }));
                  }}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন অভিজ্ঞতা</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.work_experiences.map((exp, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...formData.work_experiences];
                          updated[idx].role = e.target.value;
                          setFormData((prev) => ({ ...prev, work_experiences: updated }));
                        }}
                        className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = formData.work_experiences.filter((_, i) => i !== idx);
                          setFormData((prev) => ({ ...prev, work_experiences: updated }));
                        }}
                        className="p-1.5 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">কোম্পানি / প্রতিষ্ঠান</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const updated = [...formData.work_experiences];
                            updated[idx].company = e.target.value;
                            setFormData((prev) => ({ ...prev, work_experiences: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">সময়কাল (Period)</label>
                        <input
                          type="text"
                          value={exp.period}
                          onChange={(e) => {
                            const updated = [...formData.work_experiences];
                            updated[idx].period = e.target.value;
                            setFormData((prev) => ({ ...prev, work_experiences: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">স্থান (Location)</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => {
                            const updated = [...formData.work_experiences];
                            updated[idx].location = e.target.value;
                            setFormData((prev) => ({ ...prev, work_experiences: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">বিবরণ</label>
                      <textarea
                        rows={2}
                        value={exp.description}
                        onChange={(e) => {
                          const updated = [...formData.work_experiences];
                          updated[idx].description = e.target.value;
                          setFormData((prev) => ({ ...prev, work_experiences: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: EDUCATION */}
          {activeTab === "education" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
                    <span>শিক্ষা ও প্রাতিষ্ঠানিক ডিগ্রি (Education)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">ডিগ্রি, বিশ্ববিদ্যালয় এবং একাডেমিক তথ্য এডিট করুন</p>
                </div>
              </div>

              <div className="space-y-4">
                {formData.education_list.map((edu, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">ডিগ্রির নাম</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const updated = [...formData.education_list];
                          updated[idx].degree = e.target.value;
                          setFormData((prev) => ({ ...prev, education_list: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">ইনস্টিটিউশন / বিশ্ববিদ্যালয়</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const updated = [...formData.education_list];
                            updated[idx].institution = e.target.value;
                            setFormData((prev) => ({ ...prev, education_list: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">সময়কাল (Period)</label>
                        <input
                          type="text"
                          value={edu.period}
                          onChange={(e) => {
                            const updated = [...formData.education_list];
                            updated[idx].period = e.target.value;
                            setFormData((prev) => ({ ...prev, education_list: updated }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">বিবরণ</label>
                      <textarea
                        rows={2}
                        value={edu.description}
                        onChange={(e) => {
                          const updated = [...formData.education_list];
                          updated[idx].description = e.target.value;
                          setFormData((prev) => ({ ...prev, education_list: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: SERVICES */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-400" />
                    <span>প্রদেয় সেবাসমূহ (Services)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">গ্রাহকদের প্রদানকৃত সার্ভিসের শিরোনাম ও বিবরণ এডিট করুন</p>
                </div>
              </div>

              <div className="space-y-4">
                {formData.services.map((srv, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">সার্ভিস টাইটেল</label>
                      <input
                        type="text"
                        value={srv.title}
                        onChange={(e) => {
                          const updated = [...formData.services];
                          updated[idx].title = e.target.value;
                          setFormData((prev) => ({ ...prev, services: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-semibold block mb-1">বিবরণ</label>
                      <textarea
                        rows={2}
                        value={srv.description}
                        onChange={(e) => {
                          const updated = [...formData.services];
                          updated[idx].description = e.target.value;
                          setFormData((prev) => ({ ...prev, services: updated }));
                        }}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    <span>সার্টিফিকেট ও সনদপত্র (Certificates)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">স্কাউট ও অন্যান্য প্রাতিষ্ঠানিক সনদের তথ্য ও ছবি লিংক এডিট করুন</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentCertificates.map((cert, idx) => (
                  <div key={cert.id || idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">সার্টিফিকেট টাইটেল</label>
                        <input
                          type="text"
                          value={cert.title}
                          onChange={(e) => {
                            const updated = [...currentCertificates];
                            updated[idx].title = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              jibon_brittanto: { ...prev.jibon_brittanto, certificates: updated },
                            }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-semibold block mb-1">ছবি URL / Path</label>
                        <input
                          type="text"
                          value={cert.imageUrl}
                          onChange={(e) => {
                            const updated = [...currentCertificates];
                            updated[idx].imageUrl = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              jibon_brittanto: { ...prev.jibon_brittanto, certificates: updated },
                            }));
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: JIBON BRITTANTO */}
          {activeTab === "jibon" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  <span>জীবন বৃত্তান্ত ও পারিবারিক তথ্য</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">জীবন বৃত্তান্ত পেজের অভিভাবক, ঠিকানা, কোর্স ও পোর্টফোলিও তথ্য এডিট করুন</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">পিতার নাম ও পদবী</label>
                  <input
                    type="text"
                    value={formData.jibon_brittanto.family.father}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        jibon_brittanto: {
                          ...prev.jibon_brittanto,
                          family: { ...prev.jibon_brittanto.family, father: e.target.value },
                        },
                      }))
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">মাতার নাম</label>
                  <input
                    type="text"
                    value={formData.jibon_brittanto.family.mother}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        jibon_brittanto: {
                          ...prev.jibon_brittanto,
                          family: { ...prev.jibon_brittanto.family, mother: e.target.value },
                        },
                      }))
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">চাচার বিবরণ</label>
                <textarea
                  rows={2}
                  value={formData.jibon_brittanto.family.uncle}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      jibon_brittanto: {
                        ...prev.jibon_brittanto,
                        family: { ...prev.jibon_brittanto.family, uncle: e.target.value },
                      },
                    }))
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">স্থায়ী ঠিকানা (Permanent Address)</label>
                <input
                  type="text"
                  value={formData.jibon_brittanto.family.permanent_address || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      jibon_brittanto: {
                        ...prev.jibon_brittanto,
                        family: { ...prev.jibon_brittanto.family, permanent_address: e.target.value },
                      },
                    }))
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* TAB 13: GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-indigo-400" />
                    <span>ছবি গ্যালারি (Photo Gallery)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">গ্যালারি পেজের ছবি ও বিবরণ যোগ বা মুছে ফেলুন</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newPhoto: PhotoGalleryItem = {
                      id: "gal-" + Date.now(),
                      title: "নতুন ফটো",
                      category: "casual",
                      description: "ফটোর বিবরণ...",
                      imageUrl: "/gallery/photo-1.jpg",
                    };
                    setFormData((prev) => ({
                      ...prev,
                      photo_gallery: [newPhoto, ...currentGallery],
                    }));
                  }}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন ছবি</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentGallery.map((photo, idx) => (
                  <div key={photo.id || idx} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={photo.title}
                        onChange={(e) => {
                          const updated = [...currentGallery];
                          updated[idx].title = e.target.value;
                          setFormData((prev) => ({ ...prev, photo_gallery: updated }));
                        }}
                        className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = currentGallery.filter((_, i) => i !== idx);
                          setFormData((prev) => ({ ...prev, photo_gallery: updated }));
                        }}
                        className="p-1 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold block mb-0.5">Image URL</label>
                      <input
                        type="text"
                        value={photo.imageUrl}
                        onChange={(e) => {
                          const updated = [...currentGallery];
                          updated[idx].imageUrl = e.target.value;
                          setFormData((prev) => ({ ...prev, photo_gallery: updated }));
                        }}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 14: RAW JSON BACKUP */}
          {activeTab === "raw" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  <span>RAW JSON ব্যাকআপ, ইমপোর্ট ও এডিটর</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">সমগ্র পোর্টফোলিওর র-ডাটা সরাসরি ইমপোর্ট/এক্সপোর্ট ও ফরম্যাট করুন</p>
              </div>

              <div>
                <textarea
                  rows={16}
                  value={rawJsonText}
                  onChange={(e) => setRawJsonText(e.target.value)}
                  className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-emerald-400 font-mono text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const success = importPortfolioJson(rawJsonText);
                    if (success) {
                      showToast("JSON ডাটা সফলভাবে ইমপোর্ট করা হয়েছে!");
                    } else {
                      alert("ত্রুটি: অকার্যকর JSON ডাটা!");
                    }
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold"
                >
                  JSON ইমপোর্ট করুন
                </button>

                <button
                  type="button"
                  onClick={exportPortfolioJson}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold"
                >
                  JSON ফাইল ডাউনলোড
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
