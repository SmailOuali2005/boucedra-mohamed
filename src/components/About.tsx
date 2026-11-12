"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { Award, Target, Compass, CheckCircle2, UserCircle2 } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";
  const icons = [Award, Target, Compass];

  return (
    <section id="about" className="py-24 md:py-32 bg-white text-navy-950 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-5">
              <div className="section-line"></div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-[0.2em]">
                {t.about.tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 mb-6 leading-tight">
              {t.about.title}
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-navy-800 mb-6 leading-snug border-l-4 border-gold-500 pl-4">
              {t.about.heading}
            </p>

            <div className="space-y-4 text-base text-navy-600 leading-relaxed mb-10">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Values */}
            <div className="border-t border-navy-100 pt-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-gold-600" />
                <h3 className="text-base font-bold text-navy-900 uppercase tracking-widest text-sm">
                  {t.about.valuesTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {t.about.values.map((v, idx) => {
                  const Icon = icons[idx];
                  return (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl bg-gradient-to-br from-navy-50 to-white border border-navy-100 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300 cursor-default"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-gold-400 flex items-center justify-center mb-4 shadow-md group-hover:shadow-gold-500/20 transition-shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-navy-950 mb-2">{v.title}</h4>
                      <p className="text-xs text-navy-500 leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Professional Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-navy-900/5 rounded-3xl blur-2xl pointer-events-none"></div>

              <div className="relative bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl shadow-2xl border border-navy-800/80 overflow-hidden">
                {/* Top gold accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700"></div>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 pb-6 border-b border-navy-800 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-400/30 flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-2xl font-black gold-text">BM</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.25em] block mb-1">
                        {isAr ? "بطاقة مهنية" : "Fiche Professionnelle"}
                      </span>
                      <h3 className="text-base font-black text-white uppercase tracking-wide">
                        {isAr ? siteConfig.arabicName : siteConfig.officialName}
                      </h3>
                      <p className="text-xs text-gold-400/80 mt-0.5">
                        {isAr ? siteConfig.activityAr : siteConfig.activity}
                      </p>
                    </div>
                  </div>

                  {/* Info rows */}
                  <div className="space-y-3 text-sm">
                    {[
                      {
                        label: isAr ? "الصفة القانونية" : "Statut Juridique",
                        value: isAr ? siteConfig.statusAr : siteConfig.status,
                        highlight: true,
                      },
                      {
                        label: isAr ? "النشاط المهني" : "Activité",
                        value: isAr ? siteConfig.activityAr : "Chargé d'affaires",
                        highlight: false,
                      },
                      {
                        label: isAr ? "المدينة" : "Ville",
                        value: isAr ? siteConfig.address.cityAr : siteConfig.address.city,
                        highlight: false,
                      },
                      {
                        label: isAr ? "الولاية" : "Wilaya",
                        value: `${isAr ? siteConfig.address.wilayaAr : siteConfig.address.wilaya} (45)`,
                        highlight: false,
                      },
                      {
                        label: isAr ? "البلد" : "Pays",
                        value: isAr ? siteConfig.address.countryAr : siteConfig.address.country,
                        highlight: false,
                      },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 border-b border-navy-800/50 last:border-0 gap-2">
                        <span className="text-navy-400 text-xs flex-shrink-0">{row.label}</span>
                        <span className={`font-semibold text-right text-xs ${row.highlight ? "text-gold-400" : "text-white"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}

                    {/* Phone */}
                    <div className="flex justify-between items-center py-2.5 gap-2">
                      <span className="text-navy-400 text-xs flex-shrink-0">{isAr ? "الهاتف" : "Téléphone"}</span>
                      <a
                        href={`tel:${siteConfig.phoneInternational}`}
                        className="font-mono font-bold text-gold-400 hover:text-gold-300 transition-colors text-sm"
                        dir="ltr"
                      >
                        {siteConfig.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${siteConfig.phoneInternational}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-700 text-navy-950 font-bold text-xs hover:from-gold-400 hover:to-gold-600 transition-all"
                    >
                      <span>{isAr ? "اتصال" : "Appeler"}</span>
                    </a>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <p className="mt-6 text-[10px] text-navy-400 text-center leading-relaxed">
                    {isAr
                      ? "يمارس النشاط وفق الأطر القانونية للمقاول الذاتي في الجزائر"
                      : "Exercice dans le cadre légal de l'auto-entrepreneur en Algérie"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
