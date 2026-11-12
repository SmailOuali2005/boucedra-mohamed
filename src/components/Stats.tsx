"use client";

import { dictionary, Language } from "@/lib/content";

interface StatsProps {
  lang: Language;
}

const stats = {
  fr: [
    { value: "100%", label: "Statut légal officiel", sub: "Auto-entrepreneur enregistré" },
    { value: "3+", label: "Domaines d'expertise", sub: "Relations d'affaires & Partenariats" },
    { value: "Naâma", label: "Wilaya d'implantation", sub: "Aïn Sefra, Algérie" },
    { value: "DZ", label: "Algérie", sub: "Rayonnement national" },
  ],
  ar: [
    { value: "100%", label: "وضع قانوني رسمي", sub: "مقاول ذاتي مسجل" },
    { value: "3+", label: "مجالات الخبرة", sub: "علاقات الأعمال والشراكات" },
    { value: "النعامة", label: "ولاية الإقامة", sub: "عين الصفراء، الجزائر" },
    { value: "DZ", label: "الجزائر", sub: "نشاط على المستوى الوطني" },
  ],
};

export default function Stats({ lang }: StatsProps) {
  const data = stats[lang];

  return (
    <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-14 border-y border-navy-800/60 relative overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(#c8a96d_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {data.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 py-2 group"
            >
              {idx < data.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-navy-800"></div>
              )}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black gold-text mb-2 leading-none">
                {stat.value}
              </div>
              <p className="text-sm font-bold text-white/90 mb-1 leading-tight">{stat.label}</p>
              <p className="text-xs text-navy-400 leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
