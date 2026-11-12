"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Footer({ lang, onLanguageChange }: FooterProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-400/40 flex items-center justify-center text-gold-400 font-extrabold text-base">
                BM
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-wider">
                  {isAr ? siteConfig.arabicName : siteConfig.officialName}
                </h3>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                  {isAr ? siteConfig.statusAr : siteConfig.status}
                </p>
              </div>
            </div>

            <p className="text-sm text-navy-300 leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-navy-300">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>{isAr ? "نشاط مقيد ومسجل قانونياً" : "Activité enregistrée légalement"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onLanguageChange(lang === "fr" ? "ar" : "fr")}
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                  {lang === "fr" ? "النسخة العربية (AR)" : "Version Française (FR)"}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-sm text-navy-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="hover:text-white font-mono"
                    dir="ltr"
                  >
                    {siteConfig.phoneFormatted}
                  </a>
                  <p className="text-xs text-navy-300">
                    {siteConfig.phoneLocalFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-xs text-emerald-400 font-semibold"
                >
                  WhatsApp: {siteConfig.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-xs leading-relaxed">
                  {isAr
                    ? `${siteConfig.address.streetAr}، ${siteConfig.address.additionalAr}، ${siteConfig.address.cityAr}، ${siteConfig.address.wilayaAr}، ${siteConfig.address.countryAr}`
                    : `${siteConfig.address.street}, ${siteConfig.address.additional}, ${siteConfig.address.city}, ${siteConfig.address.wilaya}, ${siteConfig.address.country}`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-400">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            {t.footer.legalNotice}
          </p>

          <p className="text-center md:text-right font-medium">
            © {new Date().getFullYear()} {siteConfig.officialName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
