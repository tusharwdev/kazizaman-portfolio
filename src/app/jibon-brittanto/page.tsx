import Metadata from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, ExternalLink, Calendar, Ruler, UserCheck, Briefcase, GraduationCap, Award, Users, HeartHandshake, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "জীবন বৃত্তান্ত | কাজী বদরুদ্দোজ জামান তুষার - kazizaman.online",
  description: "কাজী বদরুদ্দোজ জামান তুষার এর বিস্তারিত জীবন বৃত্তান্ত (Bio/Resume), পোর্টফোলিও, অভিজ্ঞতা, শিক্ষা ও পারিবারিক পরিচিতি।",
};

export default function JibonBrittantoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">

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

        {/* Hero Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-800/40 p-6 sm:p-10 shadow-2xl shadow-indigo-950/40">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs sm:text-sm font-mono">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>ব্যক্তিগত ও পেশাগত তথ্য বিবরণী</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                কাজী বদরুদ্দোজ জামান তুষার
              </h1>
              <p className="text-base sm:text-xl font-medium text-indigo-300">
                প্রফেশনাল ফ্রিল্যান্সার ও ফুল-স্ট্যাক ওয়েব ডেভেলপার
              </p>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">জন্ম তারিখ</div>
                  <div className="text-sm font-bold text-white">২২/০১/১৯৯৮</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">মোবাইল</div>
                  <div className="text-sm font-bold text-white">০১৭৮৬২৪২০৪৬</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">উচ্চতা</div>
                  <div className="text-sm font-bold text-white">৫ ফুট ৬ ইঞ্চি</div>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:01786242046"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-indigo-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>সরাসরি কল করুন</span>
              </a>

              <a
                href="https://wa.me/8801786242046"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp এ মেসেজ</span>
              </a>

              <a
                href="https://www.fiverr.com/kazitushar1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-200 font-semibold text-sm transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 text-indigo-400" />
                <span>Fiverr Profile</span>
              </a>
            </div>

          </div>
        </div>

        {/* 1. পোর্টফোলিও (Portfolio) Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">পোর্টফোলিও</h2>
              <p className="text-xs sm:text-sm text-slate-400">পেশাগত কাজ ও প্রফেশনাল প্ল্যাটফর্ম</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-3 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-indigo-400">👉</span>
                  <span>প্রফেশনাল ফ্রিল্যান্সার (fiverr.com)</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  world-wide Laravel development
                </span>
              </div>
              <p className="text-sm text-slate-400 pl-6">
                বিশ্বজুড়ে ক্লায়েন্টদের জন্য কাস্টম লারাভেল ও ওয়েব অ্যাপ্লিকেশন তৈরি ও পরিচালনা।
              </p>

              <div className="pt-2 pl-6">
                <a
                  href="https://www.fiverr.com/kazitushar1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-3.5 py-2 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Profile: https://www.fiverr.com/kazitushar1</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-indigo-400">👉</span>
                  <span>ওয়েব ডেভেলপার (বৈশাখি নিউজ, অনলাইন পত্রিকা)</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono">
                  বর্তমান চাকরি
                </span>
              </div>
              <p className="text-sm text-slate-400 pl-6">
                অনলাইন নিউজ পেপার পোর্টালে ওয়েব ডেভেলপার হিসেবে টেকনিক্যাল কাজ ও পোর্টাল রক্ষণাবেক্ষণ।
              </p>
            </div>
          </div>
        </section>

        {/* 2. চাকরির অভিজ্ঞতা (Work Experience) Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/60">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">চাকরির অভিজ্ঞতা</h2>
              <p className="text-xs sm:text-sm text-slate-400">বিভিন্ন প্রতিষ্ঠানে দায়িত্ব পালনের বিবরণ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2 hover:border-purple-500/50 transition-colors">
              <div className="text-xs text-purple-400 font-mono uppercase">উত্তরা, ঢাকা</div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>👉 ব্যাকএন্ড ওয়েব ডেভেলপার</span>
              </h3>
              <p className="text-sm text-slate-400">সিনার্জি সলিউশন</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2 hover:border-purple-500/50 transition-colors">
              <div className="text-xs text-purple-400 font-mono uppercase">পান্থপথ, ঢাকা</div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>👉 ব্যাকএন্ড ওয়েব ডেভেলপার</span>
              </h3>
              <p className="text-sm text-slate-400">প্রিয়েতা বাংলাদেশ লিমিটেড</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2 hover:border-purple-500/50 transition-colors">
              <div className="text-xs text-purple-400 font-mono uppercase">বাংলামোটর, ঢাকা</div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>👉 জুনিয়র সাংবাদিক</span>
              </h3>
              <p className="text-sm text-slate-400">জনতার বাংলা অনলাইন পত্রিকা</p>
            </div>
          </div>
        </section>

        {/* 3. কোর্স সমূহ (Courses & Training) Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/60">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">কোর্স সমূহ</h2>
              <p className="text-xs sm:text-sm text-slate-400">প্রফেশনাল ট্রেনিং ও কোর্স সার্টিফিকেটসমূহ</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400">👉</span>
                  <span>পি এইচ পি - লারাভেল লং কোর্স - ২০২০</span>
                </h3>
                <p className="text-sm text-slate-400 pl-6">পিপল এন টেক, ঢাকা</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 font-mono self-start sm:self-center">
                ২০২০
              </span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400">👉</span>
                  <span>ওয়েব ডিজাইন &amp; ডেভেলপমেন্ট স্পেশালিস্ট ২০১৮</span>
                </h3>
                <p className="text-sm text-slate-400 pl-6">পিপল এন টেক, ঢাকা</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 font-mono self-start sm:self-center">
                ২০১৮
              </span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400">👉</span>
                  <span>ওয়েব ডিজাইন শর্ট কোর্স ২০১৯</span>
                </h3>
                <p className="text-sm text-slate-400 pl-6">ডেকোডিল ইন্টারন্যাশনাল ট্রেনিং ইনস্টিটিউট, ধানমন্ডি, ঢাকা</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 font-mono self-start sm:self-center">
                ২০১৯
              </span>
            </div>
          </div>
        </section>

        {/* 4. শিক্ষা (Education) Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">শিক্ষা</h2>
              <p className="text-xs sm:text-sm text-slate-400">একাডেমিক শিক্ষাগত যোগ্যতা</p>
            </div>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
              <GraduationCap className="w-5 h-5" />
              <span>বি-এস-এস অনার্স সমাজকর্ম (৩য় বর্ষ)</span>
            </div>
            <p className="text-sm text-slate-300">অধ্যয়নরত, জাতীয় বিশ্ববিদ্যালয়</p>
          </div>
        </section>

        {/* 5. পারিবারিক বিবরণ (Family Details) Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-pink-950 text-pink-400 border border-pink-800/60">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">পারিবারিক বিবরণ</h2>
              <p className="text-xs sm:text-sm text-slate-400">পরিবারের সদস্য ও পরিচিতি</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Parents Info */}
            <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-pink-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <HeartHandshake className="w-5 h-5 text-pink-400" />
                <span>পিতা-মাতার তথ্য</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">পিতা:</span>
                  <span className="font-bold text-white">কাজী মোঃ বশীর</span>
                  <span className="text-xs text-slate-400 block mt-0.5">(প্রধান শিক্ষক, ধাপুড়া সরকারি প্রাথমিক বিদ্যালয়)</span>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-xs text-slate-400 block font-mono">মাতা:</span>
                  <span className="font-bold text-white">বিলকিস আক্তার</span>
                </div>
              </div>
            </div>

            {/* Uncle Info */}
            <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-indigo-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <span>চাচা</span>
              </h3>

              <div className="space-y-1.5 text-sm">
                <div className="font-bold text-white text-base">কাজী শরীফ হোসেন</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  (অবসর প্রাপ্ত ওয়ারেন্ট অফিসার, বাংলাদেশ সেনাবাহিনী)
                </p>
                <p className="text-xs text-indigo-300 pt-1">
                  🇺🇸 বর্তমানে আমেরিকান সিটিজেনশিপ প্রাপ্ত এবং সপরিবারে আমেরিকায় বসবাসরত।
                </p>
              </div>
            </div>

          </div>

          {/* Siblings */}
          <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-purple-300 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>ভাইবোন</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 font-mono">১ম ভাই:</div>
                <div className="font-bold text-white">👉 কাজী ইমতিয়াজ আরমান</div>
                <div className="text-xs text-purple-300">অফিসার ক্যাডেট জিডি পাইলট প্রশিক্ষণরত, বাংলাদেশ বিমান বাহিনী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 font-mono">২য় ভাই:</div>
                <div className="font-bold text-white">👉 কাজী বদরুদ্দোজ তোফায়েল</div>
                <div className="text-xs text-slate-400">পঞ্চম শ্রেণী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 font-mono">৩য় ভাই:</div>
                <div className="font-bold text-white">👉 কাজী ইসতিয়াক নোমান তায়িফ</div>
                <div className="text-xs text-slate-400">তৃতীয় শ্রেণী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 font-mono">বোন:</div>
                <div className="font-bold text-white">👉 কাজী সাবিহা সুলতানা তুলি</div>
                <div className="text-xs text-slate-400">বয়স: ৪ বছর</div>
              </div>
            </div>
          </div>

        </section>

      </div>

      <Footer />
    </main>
  );
}
