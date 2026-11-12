import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://boucedra-mohamed.vercel.app"),
  title: {
    default: "BOUCEDRA MOHAMED | Chargé d'affaires et partenariat",
    template: "%s | BOUCEDRA MOHAMED",
  },
  description:
    "Présentation professionnelle de BOUCEDRA MOHAMED, auto-entrepreneur à Aïn Sefra, Naâma, Algérie. Développement des relations d'affaires, partenariats professionnels et accompagnement commercial.",
  keywords: [
    "BOUCEDRA MOHAMED",
    "بوسدرة محمد",
    "Chargé d'affaires et partenariat",
    "Auto-entrepreneur",
    "مقاول ذاتي",
    "Ain Sefra",
    "عين الصفراء",
    "Naama",
    "النعامة",
    "Algérie",
    "الجزائر",
    "Partenariats professionnels",
    "Relations d'affaires",
  ],
  authors: [{ name: "BOUCEDRA MOHAMED" }],
  creator: "BOUCEDRA MOHAMED",
  publisher: "BOUCEDRA MOHAMED",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: "BOUCEDRA MOHAMED | Chargé d'affaires et partenariat",
    description:
      "Présentation professionnelle de BOUCEDRA MOHAMED, auto-entrepreneur à Aïn Sefra, Naâma, Algérie. Développement des relations d'affaires et partenariats.",
    url: "https://boucedra-mohamed.vercel.app",
    siteName: "BOUCEDRA MOHAMED",
    locale: "fr_FR",
    alternateLocale: ["ar_DZ"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOUCEDRA MOHAMED | Chargé d'affaires et partenariat",
    description:
      "Présentation professionnelle de BOUCEDRA MOHAMED, auto-entrepreneur à Aïn Sefra, Naâma, Algérie.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://boucedra-mohamed.vercel.app",
    languages: {
      "fr-DZ": "https://boucedra-mohamed.vercel.app/?lang=fr",
      "ar-DZ": "https://boucedra-mohamed.vercel.app/?lang=ar",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="font-sans bg-white text-navy-900 selection:bg-gold-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
