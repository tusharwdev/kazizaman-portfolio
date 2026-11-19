"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioData, PhotoGalleryItem } from "@/types/portfolio";

export const initialPhotoGalleryList: PhotoGalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Executive Headshot",
    category: "formal",
    description: "Professional formal headshot portrait for official documents and executive portfolio.",
    imageUrl: "/gallery/photo-3.jpg"
  },
  {
    id: "gal-2",
    title: "Corporate Executive Attire",
    category: "formal",
    description: "Professional formal shirt and trousers pose in front of corporate real estate premises.",
    imageUrl: "/gallery/photo-9.jpg"
  },
  {
    id: "gal-3",
    title: "Outdoor Lifestyle with Bike",
    category: "casual",
    description: "Casual portrait leaning on red sports motorcycle in green natural surroundings.",
    imageUrl: "/gallery/photo-1.jpg"
  },
  {
    id: "gal-4",
    title: "Outdoor Stroll Portrait",
    category: "casual",
    description: "Casual walking pose on village asphalt road in afternoon sunlight.",
    imageUrl: "/gallery/photo-2.jpg"
  },
  {
    id: "gal-5",
    title: "Outdoor Portrait with Watch",
    category: "casual",
    description: "Casual standing portrait checking smartwatch on scenic rural road.",
    imageUrl: "/gallery/photo-4.jpg"
  },
  {
    id: "gal-6",
    title: "Roadside Scenic Pose",
    category: "casual",
    description: "Casual portrait pose next to road sign pole amidst lush greenery.",
    imageUrl: "/gallery/photo-5.jpg"
  },
  {
    id: "gal-7",
    title: "Motorcycle Riding Action",
    category: "casual",
    description: "Riding red sports bike on village highway road.",
    imageUrl: "/gallery/photo-6.jpg"
  },
  {
    id: "gal-8",
    title: "Motorcycle Pose",
    category: "casual",
    description: "Casual sitting pose on sports bike in natural background.",
    imageUrl: "/gallery/photo-7.jpg"
  },
  {
    id: "gal-9",
    title: "Casual Hoodie & Bike Pose",
    category: "casual",
    description: "Casual black hoodie look with red sports bike in nature.",
    imageUrl: "/gallery/photo-8.jpg"
  }
];

export const initialPortfolioData: PortfolioData = {
  developer: {
    name: "কাজী বদরুজ জামান",
    name_en: "Kazi Zaman",
    domain: "kazizaman.online",
    title: "BSS (Honours) Social Work | Web & Software Developer | Video Creator | Digital Marketer & Strategic Innovator",
    location: "Bangladesh",
    phone: "01786242046",
    birth_date: "২২/০১/১৯৯৮",
    height: "5'6\"",
    email: "contact@kazizaman.online",
    fiverr: "https://www.fiverr.com/kazitushar1",
    github: "https://github.com/tusharwdev",
    whatsapp: "https://wa.me/8801786242046",
    bio: "BSS (Honours) graduate in Social Work, Web Developer, Software Developer, Video Creator, Content Creator—with proven expertise in building high-performing websites, custom software solutions, and scalable digital platforms. Having produced a diverse portfolio of visual content ranging from captivating nature videos and lifestyle vlogs to strategic brand stories, I bring practical creativity to every project. Alongside technical execution, I possess a natural aptitude for keen observation, investigative analysis, and creative ideation—enabling me to conceptualize innovative products, smart tech gadgets, and viable business models with laser focus. As an experienced Digital Marketer bridging human-centric insights, analytical precision, and practical innovation, I help brands, businesses, and digital platforms build, optimize, and scale impactful solutions.",
    statusBadge: "BSS (Honours) Social Work | Multidisciplinary Specialist & Digital Innovator",
    heroPhoto: {
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
    },
  },
  stats: {
    experience_years: "3+",
    projects_completed: "15+",
    satisfied_clients: "100%",
  },
  jibon_brittanto: {
    title: "জীবন বৃত্তান্ত",
    url: "https://kazizaman.online/jibon-brittanto",
    portfolio: [
      {
        title: "প্রফেশনাল ফ্রিল্যান্সার (fiverr.com)",
        role: "world-wide Laravel development",
        url: "https://www.fiverr.com/kazitushar1",
      },
      {
        title: "ওয়েব ডেভেলপার (বৈশাখি নিউজ, অনলাইন পত্রিকা)",
        status: "বর্তমান চাকরি",
      },
    ],
    experience: [
      {
        role: "ব্যাকএন্ড ওয়েব ডেভেলপার",
        company: "সিনার্জি সলিউশন, উত্তরা, ঢাকা",
      },
      {
        role: "ব্যাকএন্ড ওয়েব ডেভেলপার",
        company: "প্রিয়েতা বাংলাদেশ লিমিটেড, পান্থপথ, ঢাকা",
      },
      {
        role: "জুনিয়র সাংবাদিক",
        company: "জনতার বাংলা অনলাইন পত্রিকা, বাংলামোটর, ঢাকা",
      },
    ],
    courses: [
      "পি এইচ পি - লারাভেল লং কোর্স - ২০২০ (পিপল এন টেক, ঢাকা)",
      "ওয়েব ডিজাইন & ডেভেলপমেন্ট স্পেশালিস্ট ২০১৮ (পিপল এন টেক, ঢাকা)",
      "ওয়েব ডিজাইন শর্ট কোর্স ২০১৯ (ডেকোডিল ইন্টারন্যাশনাল ট্রেনিং ইনস্টিটিউট, ধানমন্ডি, ঢাকা)",
    ],
    education: "বি-এস-এস অনার্স সমাজকর্ম (৩য় বর্ষ) অধ্যয়নরত, জাতীয় বিশ্ববিদ্যালয়",
    family: {
      father: "কাজী মোঃ বশীর (প্রধান শিক্ষক, ধাপুড়া সরকারি প্রাথমিক বিদ্যালয়)",
      mother: "বিলকিস আক্তার",
      uncle: "কাজী শরীফ হোসেন (অবসর প্রাপ্ত ওয়ারেন্ট অফিসার, বাংলাদেশ সেনাবাহিনী)। বর্তমানে আমেরিকান সিটিজেনশিপ প্রাপ্ত এবং সপরিবারে আমেরিকায় বসবাসরত।",
      siblings: [
        "কাজী ইমতিয়াজ আরমান (অফিসার ক্যাডেট জিডি পাইলট প্রশিক্ষণরত, বাংলাদেশ বিমান বাহিনী)",
        "কাজী বদরুদ্দোজ তোফায়েল (পঞ্চম শ্রেণী)",
        "কাজী ইসতিয়াক নোমান তায়িফ (তৃতীয় শ্রেণী)",
        "কাজী সাবিহা সুলতানা তুলি (বয়স-৪ বছর)",
      ],
      permanent_address: "গ্রাম: রাজা চাপিতলা, ডাকঘর: রাজা চাপিতলা, উপজেলা: মুরাদানগর / বাঙ্গরা বাজার, জেলা: কুমিল্লা, বাংলাদেশ।"
    },
    certificates: [
      {
        id: "cert-1",
        title: "৩য় মুরাদানগর উপজেলা স্কাউট সমাবেশ ২০১০ (সনদপত্র)",
        category: "স্কাউটিং ও সামাজিক অর্জন",
        issueDate: "৩০ ডিসেম্বর ২০১০",
        issuer: "বাংলাদেশ স্কাউটস, মুরাদানগর উপজেলা, কুমিল্লা",
        description: "হায়দরাবাদ হাজী ইয়াকুব আলী ভূঁইয়া উচ্চ বিদ্যালয়ে অনুষ্ঠিত ৩য় মুরাদানগর উপজেলা স্কাউট সমাবেশ ২০১০-এ সফলভাবে কৃতি সনদ অর্জন।",
        imageUrl: "/certificates/scout-jamboree-2010.jpg"
      },
      {
        id: "cert-2",
        title: "ইউনিয়ন পরিষদ চারিত্রিক ও জাতীয়তা সনদপত্র",
        category: "অফিসিয়াল নাগরিকত্ব ও চারিত্রিক সনদ",
        issueDate: "০৯ এপ্রিল ২০১৬",
        issuer: "৮নং চাপিতলা ইউনিয়ন পরিষদ, মুরাদানগর, কুমিল্লা",
        description: "ইউনিয়ন পরিষদের চেয়ারম্যান কর্তৃক ইস্যুকৃত অফিসিয়াল চারিত্রিক ও চারিত্রিক সুনাম সনদপত্র।",
        imageUrl: "/certificates/union-parishad-certificate-2016.jpg"
      },
      {
        id: "cert-3",
        title: "বিদ্যুৎ ক্যাম্প ২০১১ (সনদপত্র)",
        category: "স্কাউটস ও সরকারি ক্যাম্প সনদ",
        issueDate: "২১ ডিসেম্বর ২০১১",
        issuer: "বিদ্যুৎ বিভাগ (পাওয়ার ডিভিশন) ও বাংলাদেশ স্কাউটস",
        description: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের বিদ্যুৎ বিভাগ এবং বাংলাদেশ স্কাউটস কর্তৃক যৌথভাবে আয়োজিত ৪-দিনব্যাপী বিদ্যুৎ ক্যাম্প ২০১১-এ কৃতি সনদপত্র।",
        imageUrl: "/certificates/bidduth-scout-camp-2011.jpg"
      }
    ]
  },
  skills: [
    {
      category: "Android & Mobile",
      items: [
        { name: "Kotlin", level: 90 },
        { name: "Jetpack Compose", level: 85 },
        { name: "Android SDK / XML Views", level: 90 },
        { name: "Coroutines & Flow", level: 85 },
        { name: "Retrofit & REST API", level: 92 },
        { name: "Room DB & WorkManager", level: 85 },
        { name: "Firebase (FCM, Auth)", level: 88 },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "React.js & Next.js", level: 88 },
        { name: "TypeScript / JavaScript", level: 85 },
        { name: "Tailwind CSS & Bootstrap", level: 92 },
        { name: "HTML5 & CSS3 / SASS", level: 95 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "PHP & Laravel", level: 85 },
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "RESTful API Development", level: 90 },
        { name: "Node.js (Basics)", level: 75 },
      ],
    },
    {
      category: "Tools & Architecture",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Android Studio & VS Code", level: 95 },
        { name: "Clean Architecture & MVVM", level: 88 },
        { name: "Laragon / Local Servers", level: 90 },
      ],
    },
  ],
  projects: [
    {
      id: "biyebari",
      title: "Biyebari Android Application",
      category: "mobile",
      description:
        "A full-featured matrimony and matchmaking mobile application built natively for Android. Features real-time profile search, secure auth, push notifications (FCM), custom webview payment gateway integration, and bottom sheet navigation.",
      image: "📱",
      tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Retrofit", "REST API", "FCM"],
      liveUrl: "https://biyebari.online",
      githubUrl: "https://github.com",
    },
    {
      id: "kazizaman-portfolio",
      title: "Kazi Zaman Personal Portfolio Website",
      category: "web",
      description:
        "Modern single-page web portfolio for kazizaman.online crafted with Next.js 16 (App Router), React, TypeScript, and Tailwind CSS. Features sleek dark glassmorphism design, responsive layouts, and smooth section scrolling.",
      image: "💻",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      liveUrl: "https://kazizaman.online",
      githubUrl: "https://github.com/tusharwdev",
    },
    {
      id: "matrimonial-web-api",
      title: "Matrimonial Backend & API Service",
      category: "web",
      description:
        "Robust RESTful API backend handling user profiles, match algorithms, notification triggers, image processing, and payment status callbacks for mobile applications.",
      image: "🌐",
      tags: ["Laravel", "PHP", "MySQL", "REST API", "JWT Auth"],
      liveUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      id: "task-manager-app",
      title: "Smart Task & Habit Tracker (Android)",
      category: "mobile",
      description:
        "Native Android app using Room Database and WorkManager for offline task tracking, local notifications, custom reminder scheduling, and progress charts.",
      image: "⚡",
      tags: ["Kotlin", "Room DB", "WorkManager", "LiveData", "Material 3"],
      liveUrl: "#",
      githubUrl: "https://github.com",
    },
  ],
  work_experiences: [
    {
      role: "Lead Android & Full-Stack Developer",
      company: "Biyebari Platform",
      period: "2023 - Present",
      location: "Bangladesh",
      description:
        "Architected and developed the native Android app using Kotlin, Coroutines, and REST APIs. Implemented real-time FCM push notifications, custom WebView payment gateways, and profile management systems.",
      highlights: [
        "Native Android app architecture with MVVM & Retrofit",
        "Backend API integration and database synchronization",
        "Push notification pipeline with Firebase Cloud Messaging",
      ],
    },
    {
      role: "Freelance Software Engineer",
      company: "Self-Employed / Remote",
      period: "2021 - Present",
      location: "Global / Remote",
      description:
        "Delivering custom Android mobile applications and web solutions for clients. Handling end-to-end design, API integration, testing, and cloud deployment.",
      highlights: [
        "Developed custom Kotlin & React applications",
        "Created responsive landing pages and web apps",
        "Performance auditing & Compose UI migration",
      ],
    },
  ],
  education_list: [
    {
      degree: "B.S.S. Honours in Social Work (বি-এস-এস অনার্স সমাজকর্ম - ৩য় বর্ষ)",
      institution: "National University (জাতীয় বিশ্ববিদ্যালয়)",
      period: "2021 - Present (অধ্যয়নরত)",
      location: "Bangladesh",
      description:
        "Specializing in Social Research Methodology, Human Behavior, Social Welfare, Community Development, Analytical Inquiry, and Investigative Social Field Work.",
    },
  ],
  services: [
    {
      title: "Native Android App Development",
      description:
        "Building custom Android apps using Kotlin, Jetpack Compose, Material 3, and Clean Architecture. Complete with offline storage, FCM push notifications, and payment gateways.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Designing responsive, fast-loading SPA websites and web applications using Next.js, React, TypeScript, Tailwind CSS, and PHP/Laravel backends.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "RESTful API Engineering",
      description:
        "Designing secure, scalable REST APIs, authentication endpoints (JWT/OAuth), database schemas, and webhooks for seamless mobile-to-cloud communication.",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "UI/UX & App Modernization",
      description:
        "Refactoring legacy Android XML views to modern Jetpack Compose code, fixing UI jank, optimizing app performance, and enhancing user experience.",
      color: "from-blue-500 to-indigo-600",
    },
  ],
  photo_gallery: initialPhotoGalleryList
};

interface PortfolioContextType {
  portfolioData: PortfolioData;
  isLoaded: boolean;
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  savePortfolioData: (newData: PortfolioData) => void;
  resetPortfolioData: () => void;
  exportPortfolioJson: () => void;
  importPortfolioJson: (jsonString: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "kazizaman_portfolio_data_v6";

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadFromStorage = () => {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setPortfolioData({ ...initialPortfolioData, ...parsed });
        } else {
          setPortfolioData(initialPortfolioData);
        }
      } catch (e) {
        console.error("Error reading portfolio data from localStorage:", e);
      } finally {
        setIsLoaded(true);
      }
    };

    loadFromStorage();

    window.addEventListener("storage", loadFromStorage);
    window.addEventListener("kazizaman_portfolio_updated", loadFromStorage);

    return () => {
      window.removeEventListener("storage", loadFromStorage);
      window.removeEventListener("kazizaman_portfolio_updated", loadFromStorage);
    };
  }, []);

  const savePortfolioData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("kazizaman_portfolio_updated"));
      }
    } catch (e) {
      console.error("Error saving portfolio data to localStorage:", e);
    }
  };

  const resetPortfolioData = () => {
    setPortfolioData(initialPortfolioData);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("kazizaman_portfolio_updated"));
      }
    } catch (e) {
      console.error("Error clearing localStorage:", e);
    }
  };

  const exportPortfolioJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolio_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importPortfolioJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.developer && parsed.skills && parsed.projects) {
        savePortfolioData(parsed);
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON:", e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        isLoaded,
        setPortfolioData,
        savePortfolioData,
        resetPortfolioData,
        exportPortfolioJson,
        importPortfolioJson,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
