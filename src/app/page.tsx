"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Language } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

function MainContent() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Language>("fr");

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "ar" || urlLang === "fr") {
      setLang(urlLang);
    }
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "font-arabic" : "font-sans"}
    >
      <JsonLd />
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} onLanguageChange={handleLanguageChange} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950 text-white flex items-center justify-center">Chargement...</div>}>
      <MainContent />
    </Suspense>
  );
}
