"use client";

import { useState, useEffect } from "react";
import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = dictionary[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id || "home");
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#services", label: t.nav.services, id: "services" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/97 shadow-xl shadow-navy-950/30 backdrop-blur-xl"
          : "bg-navy-950/95 backdrop-blur-md"
      } border-b border-navy-800/60`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Accueil">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-600 to-gold-800 opacity-15 group-hover:opacity-30 transition-opacity"></div>
              <div className="w-full h-full rounded-xl bg-navy-900 border border-gold-500/40 group-hover:border-gold-400/70 flex items-center justify-center transition-all shadow-md">
                <span className="font-black text-gold-400 text-xl tracking-wider leading-none">BM</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-black tracking-widest text-white group-hover:text-gold-200 transition-colors uppercase">
                {isAr ? siteConfig.arabicName : siteConfig.officialName}
              </span>
              <span className="text-[10px] font-semibold text-gold-500/80 tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse-gold inline-block"></span>
                {isAr ? siteConfig.statusAr : siteConfig.status}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors pb-0.5 ${
                  activeSection === link.id
                    ? "text-gold-400"
                    : "text-navy-200 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang Toggle */}
            <div className="flex bg-navy-900 rounded-full p-1 border border-navy-700/60 shadow-inner gap-0.5">
              {(["fr", "ar"] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => onLanguageChange(l)}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === l
                      ? "bg-gradient-to-r from-gold-500 to-gold-700 text-white shadow-sm"
                      : "text-navy-300 hover:text-white"
                  }`}
                >
                  {l === "fr" ? "FR" : "العربية"}
                </button>
              ))}
            </div>

            {/* Call CTA */}
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 text-navy-950 font-bold text-sm shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex bg-navy-900 rounded-full p-0.5 border border-navy-700/60 gap-0.5">
              {(["fr", "ar"] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => onLanguageChange(l)}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === l ? "bg-gradient-to-r from-gold-500 to-gold-700 text-white" : "text-navy-300"
                  }`}
                >
                  {l === "fr" ? "FR" : "AR"}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-900 text-navy-200 hover:text-white border border-navy-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 border-t border-navy-800/60 px-4 pt-4 pb-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? "bg-navy-900 text-gold-400 border border-navy-800"
                    : "text-navy-200 hover:bg-navy-900 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-navy-800 mt-2">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-700 text-navy-950 font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneLocalFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
