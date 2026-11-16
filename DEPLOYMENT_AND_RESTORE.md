# 🔄 kazizaman.online Git Workflow & Restore Guide

এই প্রজেক্টটি সম্পূর্ণরূপে **Git Version Control** এবং **GitHub Actions Auto-Deployment**-এর সাথে যুক্ত করা হয়েছে।

---

## 📌 ১. গিটহাব রিপোজিটরি তথ্য (GitHub Repository)
- **Repository URL:** [https://github.com/tusharwdev/kazizaman-portfolio](https://github.com/tusharwdev/kazizaman-portfolio)
- **Primary Branch:** `master`
- **Live Site:** [https://kazizaman.online](https://kazizaman.online)

---

## 🚀 ২. কীভাবে অটোমেটিক লাইভ সিনক্রোনাইজেশন কাজ করে (Workflow Setup)
১. আপনি যখনই লোকালি কোনো পরিবর্তন করবেন এবং গিটহাবে পুশ করবেন:
```bash
git add .
git commit -m "আপনার নতুন আপডেট বা ফিচার মেসেজ"
git push origin master
```
২. গিটহাবে পুশ হওয়ার সাথে সাথে **GitHub Actions Workflow** স্বয়ংক্রিয়ভাবে রান হবে:
   - কোড টেস্ট করবে এবং Next.js বিল্ড তৈরি করবে।
   - cPanel সার্ভারে (`kazizaman.online`) নতুন বিল্ড আপডেট ও সিঙ্ক করে দেবে।

---

## ⏪ ৩. যেকোনো সময় আগের অবস্থায় ফিরে আসার উপায় (Rollback & Restore Guide)

### ক) গিট হিস্ট্রি বা আগের Commit তালিকা দেখা:
```bash
git log --oneline
```

### খ) নির্দিষ্ট কোনো কমিটে ফিরে যাওয়া (Temporary Preview):
```bash
git checkout <COMMIT_HASH>
```

### গ) সম্পূর্ণ প্রজেক্ট আগের যেকোনো কমিটের অবস্থায় ফিরিয়ে আনা (Full Hard Rollback):
```bash
# ১. আগের কমিটে রিসেট করুন
git reset --hard <COMMIT_HASH>

# ২. গিটহাব এবং লাইভ সার্ভার আপডেট করুন
git push origin master --force
```

---

## 🗄️ ৪. ডেটাবেজ ও স্টেট স্ন্যাপশট (Database & State Snapshots)
- **JSON Data Snapshot:** `db-snapshots/portfolio_data.json`
- **SQL Backup Directory:** `db-snapshots/kazizaman_biyebari_db.sql`

আপনার প্রজেক্ট বা ডেটাবেজের যেকোনো স্টেট এই ফোল্ডারে গিট ট্র্যাকিংয়ের আওতায় থাকবে।
