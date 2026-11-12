"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, ShieldCheck } from "lucide-react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="section-line"></div>
            <span className="text-xs font-bold text-gold-700 uppercase tracking-[0.2em]">
              {t.contact.tag}
            </span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-navy-500 text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Phone Card */}
          <div className="relative bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl p-8 shadow-2xl border border-navy-800 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 group-hover:from-gold-500/5 group-hover:to-gold-500/10 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-400/30 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t.contact.phoneTitle}</h3>
              <p className="text-xs text-navy-400 mb-5">{t.contact.phoneSubtitle}</p>

              <p className="font-mono text-2xl sm:text-3xl font-black gold-text tracking-wider mb-1" dir="ltr">
                {siteConfig.phoneFormatted}
              </p>
              <p className="text-xs text-navy-300 mb-7" dir="ltr">
                {siteConfig.phoneLocalFormatted}
              </p>

              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 text-navy-950 font-bold text-sm shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>{isAr ? "اتصال مباشر" : "Appeler maintenant"}</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-emerald-100 group hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-md">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 mb-1">{t.contact.whatsappTitle}</h3>
            <p className="text-xs text-navy-400 mb-5">{t.contact.whatsappSubtitle}</p>

            <p className="font-mono text-2xl sm:text-3xl font-black text-emerald-600 tracking-wider mb-1" dir="ltr">
              {siteConfig.phoneFormatted}
            </p>
            <p className="text-xs text-navy-400 mb-7">
              {isAr ? "رد سريع على الرسائل المهنية" : "Réponse rapide aux messages professionnels"}
            </p>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.whatsappAction}</span>
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 group hover:border-gold-200 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-gold-400 flex items-center justify-center mb-6 shadow-md">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 mb-1">{t.contact.hoursTitle}</h3>
            <p className="text-xs text-navy-400 mb-4">
              {isAr ? "مواعيد التواصل والاستقبال" : "Horaires de disponibilité"}
            </p>
            <p className="text-sm font-semibold text-navy-800 mb-6">{t.contact.hoursDesc}</p>

            <div className="pt-5 border-t border-navy-200 space-y-3">
              <div className="flex items-center gap-2 text-xs text-navy-500">
                <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span className="font-semibold text-navy-800">
                  {isAr
                    ? `${siteConfig.address.cityAr}, ${siteConfig.address.wilayaAr}`
                    : `${siteConfig.address.city}, ${siteConfig.address.wilaya}`}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-500">
                <ShieldCheck className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{isAr ? "بيانات اتصال موثقة" : "Coordonnées officielles"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address + Map */}
        <div className="bg-navy-950 text-white rounded-2xl overflow-hidden shadow-2xl border border-navy-800 grid grid-cols-1 lg:grid-cols-12">
          {/* Address */}
          <div className="lg:col-span-5 p-8 sm:p-10 relative">
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block"></div>

            <div className="flex items-center gap-2 text-gold-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
              <MapPin className="w-4 h-4" />
              <span>{t.contact.addressTitle}</span>
            </div>

            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wider">
              {isAr ? siteConfig.arabicName : siteConfig.officialName}
            </h3>
            <p className="text-xs text-gold-400 mb-6">{t.contact.addressSubtitle}</p>

            <div className="space-y-3 text-sm text-navy-200 mb-8">
              {[
                isAr ? siteConfig.address.streetAr : siteConfig.address.street,
                isAr ? siteConfig.address.additionalAr : siteConfig.address.additional,
                isAr
                  ? `${siteConfig.address.cityAr}, ${siteConfig.address.wilayaAr}`
                  : `${siteConfig.address.city}, ${siteConfig.address.wilaya}`,
                isAr ? siteConfig.address.countryAr : siteConfig.address.country,
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5"></span>
                  <span className={i >= 2 ? "font-bold text-white" : ""}>{line}</span>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <p className="text-[11px] text-navy-400 mb-3 italic">{t.contact.mapHint}</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-gold-400 hover:text-gold-300 font-bold text-sm border hover:border-gold-400/40 transition-all"
              >
                <span>{t.contact.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[400px]">
            <iframe
              title="Localisation Aïn Sefra Naâma Algérie"
              src="https://www.google.com/maps?q=Ain+Sefra,+Naama,+Algerie&output=embed"
              className="w-full h-full absolute inset-0 border-0 filter contrast-110 saturate-50"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-navy-950/90 text-navy-200 text-[11px] px-3 py-1.5 rounded-lg border border-navy-800 backdrop-blur-sm pointer-events-none font-medium">
              📍 Aïn Sefra — Wilaya de Naâma (45), Algérie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
