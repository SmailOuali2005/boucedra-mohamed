"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, MapPin, MessageCircle, ShieldCheck, ArrowUp } from "lucide-react";

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Footer({ lang, onLanguageChange }: FooterProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#c8a96d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-400/40 flex items-center justify-center shadow-md">
                <span className="text-xl font-black gold-text">BM</span>
              </div>
              <div>
                <h3 className="text-base font-black text-white uppercase tracking-widest">
                  {isAr ? siteConfig.arabicName : siteConfig.officialName}
                </h3>
                <p className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.2em]">
                  {isAr ? siteConfig.statusAr : siteConfig.status}
                </p>
              </div>
            </div>

            <p className="text-sm text-navy-300 leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>

            {/* Contact pills */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card text-sm hover:border-gold-400/40 transition-all group w-fit"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="font-mono text-gold-300 group-hover:text-gold-200" dir="ltr">
                  {siteConfig.phoneFormatted}
                </span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card text-sm hover:border-emerald-400/40 transition-all group w-fit"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 group-hover:text-emerald-200 text-xs font-semibold">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em] mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-navy-300">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#services", label: t.nav.services },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:pl-1 transition-all flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-500 flex-shrink-0 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onLanguageChange(lang === "fr" ? "ar" : "fr")}
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors"
                >
                  {lang === "fr" ? "النسخة العربية (AR)" : "Version Française (FR)"}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em] mb-5">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-4 text-sm text-navy-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs leading-relaxed">
                  {isAr
                    ? `${siteConfig.address.streetAr}، ${siteConfig.address.additionalAr}، ${siteConfig.address.cityAr}، ${siteConfig.address.wilayaAr}، ${siteConfig.address.countryAr}`
                    : `${siteConfig.address.street}, ${siteConfig.address.additional}, ${siteConfig.address.city}, ${siteConfig.address.wilaya}, ${siteConfig.address.country}`}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="text-[11px] text-navy-300">
                  {isAr ? "نشاط مقيد قانونياً كمقاول ذاتي في الجزائر" : "Activité légalement enregistrée en Algérie"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-navy-400 text-center md:text-left max-w-2xl leading-relaxed">
            {t.footer.legalNotice}
          </p>

          <div className="flex items-center gap-4 flex-shrink-0">
            <p className="text-[11px] font-medium text-navy-500">
              © {new Date().getFullYear()} {siteConfig.officialName}. {t.footer.rights}
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-400/40 transition-all hover:-translate-y-1"
              aria-label="Remonter en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
