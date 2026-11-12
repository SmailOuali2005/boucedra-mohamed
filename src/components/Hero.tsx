"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Briefcase, ChevronDown } from "lucide-react";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy-950 text-white min-h-screen flex flex-col justify-center hero-pattern"
    >
      {/* ---- Layered background decorations ---- */}
      {/* Grid dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c8a96d_1px,transparent_1px)] [background-size:28px_28px]"></div>

      {/* Large glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-700/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/60 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left / Main column */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Status Badge */}
            <div className="animate-fadeInUp opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-900/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                <span>{t.hero.badge}</span>
              </div>
            </div>

            {/* Name headline */}
            <div className="animate-fadeInUp opacity-0 delay-100" style={{ animationFillMode: "forwards" }}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-3 leading-none">
                <span className="block text-white">{isAr ? "بوسدرة" : "BOUCEDRA"}</span>
                <span className="block gold-text">{isAr ? "محمد" : "MOHAMED"}</span>
              </h1>
            </div>

            {/* Activity Title */}
            <div className="animate-fadeInUp opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700 flex-shrink-0"></div>
                <p className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gold-400 uppercase">
                  {isAr ? siteConfig.activityAr : siteConfig.activity}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="animate-fadeInUp opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              <p className="text-base sm:text-lg text-navy-200/90 leading-relaxed mb-10 max-w-2xl">
                {t.hero.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fadeInUp opacity-0 delay-400" style={{ animationFillMode: "forwards" }}>
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 text-navy-950 font-bold text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-400/40 transition-all hover:-translate-y-1 active:translate-y-0 group"
                >
                  <span>{t.hero.contactBtn}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`} />
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-900/30 transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.hero.whatsappBtn}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneInternational}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-white font-semibold text-base transition-all hover:-translate-y-1 hover:border-gold-400/40"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span dir="ltr" className="font-mono text-sm">{siteConfig.phoneLocalFormatted}</span>
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="animate-fadeInUp opacity-0 delay-500" style={{ animationFillMode: "forwards" }}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-navy-800/80">
                {t.hero.badges.map((badge, idx) => {
                  const icons = [ShieldCheck, Briefcase, MapPin];
                  const Icon = icons[idx];
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl glass-card hover:border-gold-400/30 transition-all group cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-gold-400 group-hover:text-gold-300 flex-shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gold-500/80 uppercase tracking-widest">{badge.title}</p>
                        <p className="text-sm font-bold text-white/90">{badge.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column — decorative monogram card */}
          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div className="animate-fadeInRight opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              <div className="relative animate-float">
                {/* Outer glow ring */}
                <div className="absolute -inset-6 rounded-full bg-gold-500/5 blur-xl"></div>
                {/* Main card */}
                <div className="relative w-72 h-72 rounded-3xl glass-card flex flex-col items-center justify-center shadow-2xl border border-gold-400/20 overflow-hidden">
                  {/* Inner decorative ring */}
                  <div className="absolute inset-5 rounded-2xl border border-gold-400/10"></div>
                  {/* BM Monogram */}
                  <div className="relative flex flex-col items-center">
                    <span className="font-black text-7xl gold-text tracking-tighter leading-none mb-2">BM</span>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-4"></div>
                    <p className="text-xs font-bold text-gold-400/70 tracking-[0.3em] uppercase text-center px-4">
                      {isAr ? "مقاول ذاتي" : "Auto-entrepreneur"}
                    </p>
                    <p className="text-[10px] text-navy-300/70 tracking-wider mt-1 text-center">
                      Aïn Sefra — Naâma — DZ
                    </p>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold-500/50 rounded-tl-sm"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold-500/50 rounded-tr-sm"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold-500/50 rounded-bl-sm"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold-500/50 rounded-br-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400 animate-bounce pointer-events-none">
        <ChevronDown className="w-5 h-5 text-gold-500/50" />
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
