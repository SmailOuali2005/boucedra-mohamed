"use client";

import { siteConfig, dictionary, Language } from "@/lib/content";
import { UserCheck, Award, Target, Compass, CheckCircle2 } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  const icons = [Award, Target, Compass];

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text & Context */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
              <UserCheck className="w-4 h-4 text-gold-600" />
              <span>{t.about.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950 mb-6">
              {t.about.title}
            </h2>

            <p className="text-xl font-semibold text-navy-800 mb-6 leading-snug">
              {t.about.heading}
            </p>

            <div className="space-y-4 text-base sm:text-lg text-navy-700 leading-relaxed mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-6 border-t border-navy-100">
              <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold-600" />
                <span>{t.about.valuesTitle}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {t.about.values.map((v, idx) => {
                  const Icon = icons[idx] || CheckCircle2;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-navy-50/60 border border-navy-100 hover:border-gold-300 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-navy-950 mb-1">
                        {v.title}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Identity Card / Official Profile */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 rounded-2xl shadow-xl border border-navy-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-6 border-b border-navy-800 mb-6">
                <div>
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest block mb-1">
                    {isAr ? "بطاقة تعريف مهنية" : "Fiche Professionnelle"}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    {isAr ? siteConfig.arabicName : siteConfig.officialName}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-400/40 flex items-center justify-center text-gold-400 font-extrabold text-lg">
                  BM
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-navy-800/60">
                  <span className="text-navy-300">
                    {isAr ? "الصفة القانونية" : "Statut Juridique"}
                  </span>
                  <span className="font-semibold text-gold-300">
                    {isAr ? siteConfig.statusAr : siteConfig.status}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800/60">
                  <span className="text-navy-300">
                    {isAr ? "النشاط المهني" : "Activité Professionnelle"}
                  </span>
                  <span className="font-semibold text-right text-white max-w-[200px]">
                    {isAr ? siteConfig.activityAr : siteConfig.activity}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800/60">
                  <span className="text-navy-300">
                    {isAr ? "المدينة" : "Ville"}
                  </span>
                  <span className="font-semibold text-white">
                    {isAr ? siteConfig.address.cityAr : siteConfig.address.city}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800/60">
                  <span className="text-navy-300">
                    {isAr ? "الولاية" : "Wilaya"}
                  </span>
                  <span className="font-semibold text-white">
                    {isAr ? siteConfig.address.wilayaAr : siteConfig.address.wilaya} (45)
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800/60">
                  <span className="text-navy-300">
                    {isAr ? "البلد" : "Pays"}
                  </span>
                  <span className="font-semibold text-white">
                    {isAr ? siteConfig.address.countryAr : siteConfig.address.country}
                  </span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-navy-300">
                    {isAr ? "الهاتف" : "Téléphone"}
                  </span>
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="font-mono font-bold text-gold-400 hover:underline"
                    dir="ltr"
                  >
                    {siteConfig.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-800 text-center">
                <p className="text-xs text-navy-300 leading-relaxed">
                  {isAr
                    ? "يمارس النشاط في إطار الأحكام القانونية والتنظيمية المؤطرة لصفة المقاول الذاتي في الجزائر."
                    : "Exercice dans le cadre des dispositions légales et réglementaires régissant le statut de l'auto-entrepreneur en Algérie."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
