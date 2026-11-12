"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Briefcase } from "lucide-react";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-16 pb-24 md:pt-24 md:pb-32 border-b border-navy-800/60">
      {/* Decorative background grid and glowing orbs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c8a96d_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Official Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Business Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            <span className="block">{isAr ? siteConfig.arabicName : siteConfig.officialName}</span>
          </h1>

          {/* Professional Activity Title */}
          <div className="inline-block px-4 py-1.5 rounded-md bg-gold-500/10 border border-gold-500/30 mb-8">
            <p className="text-base sm:text-xl md:text-2xl font-bold tracking-wider text-gold-400 uppercase">
              {isAr ? siteConfig.activityAr : siteConfig.activity}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.contactBtn}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.hero.whatsappBtn}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-base border border-navy-700 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{t.hero.callBtn}</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-navy-800/80 text-left">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-navy-800/80">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                  {t.hero.badges[0].title}
                </p>
                <p className="text-sm font-bold text-white">
                  {t.hero.badges[0].desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-navy-800/80">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                  {t.hero.badges[1].title}
                </p>
                <p className="text-sm font-bold text-white">
                  {t.hero.badges[1].desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-navy-800/80">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                  {t.hero.badges[2].title}
                </p>
                <p className="text-sm font-bold text-white">
                  {t.hero.badges[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
