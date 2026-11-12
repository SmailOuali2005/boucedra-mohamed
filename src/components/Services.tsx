"use client";

import { dictionary, Language } from "@/lib/content";
import { TrendingUp, Handshake, Users, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = dictionary[lang];
  const isAr = lang === "ar";
  const icons = [TrendingUp, Handshake, Users];
  const accentColors = [
    "from-blue-600/20 to-blue-800/20 border-blue-500/20",
    "from-gold-600/20 to-gold-800/20 border-gold-500/30",
    "from-emerald-600/20 to-emerald-800/20 border-emerald-500/20",
  ];
  const iconColors = [
    "bg-blue-900 text-blue-300",
    "bg-gradient-to-br from-gold-700 to-gold-900 text-gold-300",
    "bg-emerald-900 text-emerald-300",
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#c8a96d_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="section-line"></div>
            <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em]">
              {t.services.tag}
            </span>
            <div className="section-line"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-navy-300 text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.services.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br ${accentColors[idx]} border rounded-2xl p-8 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-default flex flex-col`}
              >
                {/* Number watermark */}
                <span className="absolute top-6 right-6 text-7xl font-black text-white/5 leading-none select-none group-hover:text-white/8 transition-colors">
                  {item.num}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${iconColors[idx]} flex items-center justify-center mb-6 shadow-lg flex-shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-4 leading-snug relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-200/80 leading-relaxed mb-6 relative z-10 flex-1">
                  {item.desc}
                </p>

                {/* Points */}
                <div className="pt-5 border-t border-white/10 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-navy-200 leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal notice */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-5 py-3 rounded-xl glass-card text-xs text-navy-300 italic">
            {isAr
              ? "ملاحظة: تقدم هذه الأنشطة ضمن الإطار القانوني لصفة المقاول الذاتي المعترف بها في الجزائر."
              : "Note : Ces activités s'exercent dans le cadre légal du statut d'auto-entrepreneur reconnu en Algérie."}
          </div>
        </div>
      </div>
    </section>
  );
}
