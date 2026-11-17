import { Phone, MessageCircle, ExternalLink, Calendar, Ruler, UserCheck, Briefcase, GraduationCap, Award, Users, HeartHandshake, ShieldCheck } from "lucide-react";

export default function JibonBrittantoSection() {
  return (
    <section id="bio" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            জীবন বৃত্তান্ত (Bengali Bio &amp; Credentials)
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            কাজী বদরুদ্দোজ জামান তুষার
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            পেশাগত অভিজ্ঞতা, পোর্টফোলিও, শিক্ষাগত যোগ্যতা ও পারিবারিক পরিচিতি বিবরণী।
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-800/40 p-6 sm:p-10 shadow-2xl shadow-indigo-950/40">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>ব্যক্তিগত ও পেশাগত তথ্য</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  কাজী বদরুদ্দোজ জামান তুষার
                </h3>
                <p className="text-indigo-300 font-medium text-sm sm:text-base">
                  প্রফেশনাল ফ্রিল্যান্সার ও ফুল-স্ট্যাক ওয়েব ডেভেলপার
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:01786242046"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-indigo-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>০১৭৮৬২৪২০৪৬</span>
                </a>

                <a
                  href="https://wa.me/8801786242046"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-emerald-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.fiverr.com/kazitushar1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-200 font-semibold text-xs sm:text-sm transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 text-indigo-400" />
                  <span>Fiverr</span>
                </a>
              </div>
            </div>

            {/* Key Quick Info Badges */}
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
          </div>
        </div>

        {/* Grid Sections: Portfolio & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 1. পোর্টফোলিও */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">পোর্টফোলিও</h3>
                <p className="text-xs text-slate-400">পেশাগত কাজ ও প্রফেশনাল প্রোফাইল</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2.5 hover:border-indigo-500/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-indigo-400">👉</span>
                    <span>প্রফেশনাল ফ্রিল্যান্সার (fiverr.com)</span>
                  </h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                    Freelance
                  </span>
                </div>
                <p className="text-xs text-slate-400 pl-5">
                  World-wide Laravel development &amp; web applications.
                </p>
                <div className="pt-1 pl-5">
                  <a
                    href="https://www.fiverr.com/kazitushar1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Profile: https://www.fiverr.com/kazitushar1</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-2 hover:border-indigo-500/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-indigo-400">👉</span>
                    <span>ওয়েব ডেভেলপার (বৈশাখি নিউজ, অনলাইন পত্রিকা)</span>
                  </h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono">
                    বর্তমান চাকরি
                  </span>
                </div>
                <p className="text-xs text-slate-400 pl-5">
                  অনলাইন নিউজ পেপার পোর্টালে ওয়েব ডেভেলপার হিসেবে দায়িত্ব পালন।
                </p>
              </div>
            </div>
          </div>

          {/* 2. চাকরির অভিজ্ঞতা */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/60">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">চাকরির অভিজ্ঞতা</h3>
                <p className="text-xs text-slate-400">বিভিন্ন প্রতিষ্ঠানে কাজ করার অভিজ্ঞতা</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl space-y-1 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>সিনার্জি সলিউশন</span>
                  <span>উত্তরা, ঢাকা</span>
                </div>
                <h4 className="text-base font-bold text-white">👉 ব্যাকএন্ড ওয়েব ডেভেলপার</h4>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl space-y-1 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>প্রিয়েতা বাংলাদেশ লিমিটেড</span>
                  <span>পান্থপথ, ঢাকা</span>
                </div>
                <h4 className="text-base font-bold text-white">👉 ব্যাকএন্ড ওয়েব ডেভেলপার</h4>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl space-y-1 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>জনতার বাংলা অনলাইন পত্রিকা</span>
                  <span>বাংলামোটর, ঢাকা</span>
                </div>
                <h4 className="text-base font-bold text-white">👉 জুনিয়র সাংবাদিক</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Grid Sections: Courses & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 3. কোর্স সমূহ */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/60">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">কোর্স সমূহ</h3>
                <p className="text-xs text-slate-400">প্রফেশনাল ট্রেনিং ও সার্টিফিকেট</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-white">👉 পি এইচ পি - লারাভেল লং কোর্স - ২০২০</h4>
                  <p className="text-xs text-slate-400">পিপল এন টেক, ঢাকা</p>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800 font-mono">২০২০</span>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-white">👉 ওয়েব ডিজাইন &amp; ডেভেলপমেন্ট স্পেশালিস্ট ২০১৮</h4>
                  <p className="text-xs text-slate-400">পিপল এন টেক, ঢাকা</p>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800 font-mono">২০১৮</span>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-white">👉 ওয়েব ডিজাইন শর্ট কোর্স ২০১৯</h4>
                  <p className="text-xs text-slate-400">ডেকোডিল ইন্টারন্যাশনাল ট্রেনিং ইনস্টিটিউট, ধানমন্ডি, ঢাকা</p>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800 font-mono">২০১৯</span>
              </div>
            </div>
          </div>

          {/* 4. শিক্ষা */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">শিক্ষা</h3>
                <p className="text-xs text-slate-400">একাডেমিক শিক্ষাগত যোগ্যতা</p>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
                <GraduationCap className="w-5 h-5" />
                <span>বি-এস-এস অনার্স সমাজকর্ম (৩য় বর্ষ)</span>
              </div>
              <p className="text-sm text-slate-300">অধ্যয়নরত, জাতীয় বিশ্ববিদ্যালয়</p>
            </div>
          </div>

        </div>

        {/* 5. পারিবারিক বিবরণ (Family Details) */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-pink-950 text-pink-400 border border-pink-800/60">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">পারিবারিক বিবরণ</h3>
              <p className="text-xs text-slate-400">পরিবারের সদস্য ও পারিবারিক পরিচয়</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parents */}
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-3">
              <h4 className="text-sm font-bold text-pink-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <HeartHandshake className="w-4 h-4 text-pink-400" />
                <span>পিতা-মাতার তথ্য</span>
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">পিতা:</span>
                  <span className="font-bold text-white">কাজী মোঃ বশীর</span>
                  <span className="text-xs text-slate-400 block mt-0.5">(প্রধান শিক্ষক, ধাপুড়া সরকারি প্রাথমিক বিদ্যালয়)</span>
                </div>
                <div className="pt-1.5 border-t border-slate-800/60">
                  <span className="text-xs text-slate-400 block font-mono">মাতা:</span>
                  <span className="font-bold text-white">বিলকিস আক্তার</span>
                </div>
              </div>
            </div>

            {/* Uncle */}
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-3">
              <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>চাচা</span>
              </h4>
              <div className="space-y-1 text-sm">
                <div className="font-bold text-white">কাজী শরীফ হোসেন</div>
                <p className="text-xs text-slate-300">
                  (অবসর প্রাপ্ত ওয়ারেন্ট অফিসার, বাংলাদেশ সেনাবাহিনী)
                </p>
                <p className="text-xs text-indigo-300 pt-1">
                  🇺🇸 বর্তমানে আমেরিকান সিটিজেনশিপ প্রাপ্ত এবং সপরিবারে আমেরিকায় বসবাসরত।
                </p>
              </div>
            </div>
          </div>

          {/* Siblings */}
          <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold text-purple-300 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>ভাইবোন</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-0.5">
                <div className="text-[11px] text-slate-400 font-mono">১ম ভাই:</div>
                <div className="font-bold text-white text-sm">👉 কাজী ইমতিয়াজ আরমান</div>
                <div className="text-xs text-purple-300">অফিসার ক্যাডেট জিডি পাইলট প্রশিক্ষণরত, বাংলাদেশ বিমান বাহিনী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-0.5">
                <div className="text-[11px] text-slate-400 font-mono">২য় ভাই:</div>
                <div className="font-bold text-white text-sm">👉 কাজী বদরুদ্দোজ তোফায়েল</div>
                <div className="text-xs text-slate-400">পঞ্চম শ্রেণী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-0.5">
                <div className="text-[11px] text-slate-400 font-mono">৩য় ভাই:</div>
                <div className="font-bold text-white text-sm">👉 কাজী ইসতিয়াক নোমান তায়িফ</div>
                <div className="text-xs text-slate-400">তৃতীয় শ্রেণী</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-0.5">
                <div className="text-[11px] text-slate-400 font-mono">বোন:</div>
                <div className="font-bold text-white text-sm">👉 কাজী সাবিহা সুলতানা তুলি</div>
                <div className="text-xs text-slate-400">বয়স: ৪ বছর</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
