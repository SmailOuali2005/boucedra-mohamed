"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-gold-600" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950 mb-4">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone Call Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-white shadow-lg border border-navy-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-400/40 text-gold-400 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {t.contact.phoneTitle}
              </h3>
              <p className="text-xs text-navy-300 mb-4">
                {t.contact.phoneSubtitle}
              </p>
              <div className="space-y-1 mb-6">
                <p className="font-mono text-xl sm:text-2xl font-black text-gold-400 tracking-wider" dir="ltr">
                  {siteConfig.phoneFormatted}
                </p>
                <p className="text-xs text-navy-300" dir="ltr">
                  {isAr ? "الرقم المحلي: " : "Numéro local : "}{siteConfig.phoneLocalFormatted}
                </p>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{isAr ? "اتصال هاتفي مباشر" : "Appeler directement"}</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-8 rounded-2xl bg-white text-navy-950 shadow-md hover:shadow-xl border border-emerald-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-1">
                {t.contact.whatsappTitle}
              </h3>
              <p className="text-xs text-navy-500 mb-4">
                {t.contact.whatsappSubtitle}
              </p>
              <div className="space-y-1 mb-6">
                <p className="font-mono text-xl sm:text-2xl font-black text-emerald-600 tracking-wider" dir="ltr">
                  {siteConfig.phoneFormatted}
                </p>
                <p className="text-xs text-navy-500">
                  {isAr
                    ? "رد سريع على الرسائل المهنية"
                    : "Réponse rapide aux messages professionnels"}
                </p>
              </div>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.whatsappAction}</span>
            </a>
          </div>

          {/* Working Hours & Address Summary Card */}
          <div className="p-8 rounded-2xl bg-navy-50/80 text-navy-950 border border-navy-200/80 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-1">
                {t.contact.hoursTitle}
              </h3>
              <p className="text-xs text-navy-500 mb-4">
                {isAr ? "مواعيد الاستقبال والتواصل" : "Horaires d'échange"}
              </p>
              <p className="text-base font-semibold text-navy-900 mb-6">
                {t.contact.hoursDesc}
              </p>

              <div className="pt-4 border-t border-navy-200/60">
                <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">
                  {isAr ? "الموقع الإداري" : "Emplacement administratif"}
                </p>
                <p className="text-sm font-bold text-navy-900">
                  {isAr ? siteConfig.address.cityAr : siteConfig.address.city} — {isAr ? siteConfig.address.wilayaAr : siteConfig.address.wilaya} (45)
                </p>
                <p className="text-xs text-navy-600 mt-0.5">
                  {isAr ? siteConfig.address.countryAr : siteConfig.address.country}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-200/60 text-xs text-navy-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{isAr ? "معلومات اتصال رسمية وموثقة" : "Coordonnées professionnelles officielles"}</span>
            </div>
          </div>
        </div>

        {/* Address and Map Card */}
        <div className="bg-navy-950 text-white rounded-2xl overflow-hidden shadow-xl border border-navy-800 grid grid-cols-1 lg:grid-cols-12">
          {/* Address Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" />
                <span>{t.contact.addressTitle}</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                {isAr ? siteConfig.arabicName : siteConfig.officialName}
              </h3>

              <div className="space-y-3 text-sm text-navy-200 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">•</span>
                  <span>{isAr ? siteConfig.address.streetAr : siteConfig.address.street}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">•</span>
                  <span>{isAr ? siteConfig.address.additionalAr : siteConfig.address.additional}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">•</span>
                  <span className="font-semibold text-white">
                    {isAr ? siteConfig.address.cityAr : siteConfig.address.city}, {isAr ? siteConfig.address.wilayaAr : siteConfig.address.wilaya}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">•</span>
                  <span className="font-semibold text-white">
                    {isAr ? siteConfig.address.countryAr : siteConfig.address.country}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-navy-400 mb-4">
                {t.contact.mapHint}
              </p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-gold-400 font-bold text-sm border border-navy-700 hover:border-gold-400/50 transition-all"
              >
                <span>{t.contact.openInMaps}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Map Embed or Visualization */}
          <div className="lg:col-span-7 bg-navy-900 min-h-[320px] relative border-t lg:border-t-0 lg:border-l border-navy-800">
            <iframe
              title="Google Maps Aïn Sefra Naâma"
              src="https://www.google.com/maps?q=Ain+Sefra,+Naama,+Algerie&output=embed"
              className="w-full h-full min-h-[320px] lg:min-h-[400px] border-0 filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-3 right-3 bg-navy-950/90 text-navy-200 text-[11px] px-3 py-1 rounded-md border border-navy-800 backdrop-blur-sm pointer-events-none">
              📍 Aïn Sefra — Wilaya de Naâma (45)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
