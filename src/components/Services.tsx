"use client";

import { dictionary, Language } from "@/lib/content";
import { Briefcase, Handshake, TrendingUp, Users, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";

  const icons = [TrendingUp, Handshake, Users];

  return (
    <section id="services" className="py-20 md:py-28 bg-navy-50/70 text-navy-950 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-4 h-4 text-gold-600" />
            <span>{t.services.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950 mb-4">
            {t.services.title}
          </h2>

          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((item, idx) => {
            const Icon = icons[idx] || Briefcase;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-navy-100 hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-navy-200 group-hover:text-gold-500/50 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-950 mb-4 group-hover:text-navy-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-navy-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Key Points list */}
                <div className="pt-6 border-t border-navy-100">
                  <ul className="space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2 text-xs font-medium text-navy-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Framing notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-navy-500 italic">
            {isAr
              ? "ملاحظة: تقدم هذه الخدمات كأنشطة مهنية في إطار مهام مسؤول الأعمال والشراكات طبقا للأحكام القانونية المعتمدة للمقاول الذاتي."
              : "Note : Ces prestations s'inscrivent dans le cadre des activités professionnelles de chargé d'affaires et de partenariat, conformément au statut d'auto-entrepreneur."}
          </p>
        </div>
      </div>
    </section>
  );
}
