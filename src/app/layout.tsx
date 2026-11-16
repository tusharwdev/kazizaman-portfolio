import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazi Zaman | Android & Full-Stack Web Developer",
  description: "Official Portfolio of Kazi Zaman. Expert Android App & Web Developer specializing in Kotlin, Jetpack Compose, React, Next.js, and Laravel.",
  keywords: ["Kazi Zaman", "kazizaman.online", "Android Developer", "Web Developer", "Kotlin", "React", "Next.js", "Laravel", "Biyebari"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
