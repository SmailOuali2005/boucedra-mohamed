"use client";

import { useState } from "react";
import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionary[lang];
  const isAr = lang === "ar";

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-navy-800/80 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Accueil"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-400/40 flex items-center justify-center shadow-md group-hover:border-gold-400 transition-colors">
              <span className="font-extrabold text-gold-400 text-lg tracking-wider">
                BM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-wider text-white group-hover:text-gold-200 transition-colors uppercase">
                {isAr ? siteConfig.arabicName : siteConfig.officialName}
              </span>
              <span className="text-[11px] font-semibold text-gold-400/90 tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                {isAr ? siteConfig.statusAr : siteConfig.status}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-100 hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Lang Switcher & Call Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-navy-900/90 rounded-full p-1 border border-navy-700/60 shadow-inner">
              <button
                type="button"
                onClick={() => onLanguageChange("fr")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "fr"
                    ? "bg-gold-500 text-white shadow-sm"
                    : "text-navy-300 hover:text-white"
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("ar")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "ar"
                    ? "bg-gold-500 text-white shadow-sm"
                    : "text-navy-300 hover:text-white"
                }`}
                aria-label="التبديل إلى العربية"
              >
                العربية
              </button>
            </div>

            {/* Direct Call Button */}
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm shadow-md hover:shadow-gold-500/20 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-navy-950" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language switcher mobile */}
            <div className="flex items-center bg-navy-900 rounded-full p-0.5 border border-navy-700">
              <button
                type="button"
                onClick={() => onLanguageChange("fr")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "fr" ? "bg-gold-500 text-navy-950" : "text-navy-300"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("ar")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "ar" ? "bg-gold-500 text-navy-950" : "text-navy-300"
                }`}
              >
                AR
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 text-navy-200 hover:text-white border border-navy-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 border-b border-navy-800 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-navy-100 hover:bg-navy-900 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-navy-800 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gold-500 text-navy-950 font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.callNow} : {siteConfig.phoneLocalFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
