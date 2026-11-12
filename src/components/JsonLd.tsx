import { siteConfig } from "@/lib/content";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://boucedra-mohamed.vercel.app/#business",
    name: siteConfig.officialName,
    alternateName: siteConfig.arabicName,
    legalName: siteConfig.officialName,
    description:
      "Chargé d'affaires et partenariat — Auto-entrepreneur à Aïn Sefra, Naâma, Algérie.",
    url: "https://boucedra-mohamed.vercel.app",
    telephone: siteConfig.phoneInternational,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.additional}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.wilaya,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "DZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.75,
      longitude: -0.58,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.officialName,
      alternateName: siteConfig.arabicName,
      jobTitle: "Chargé d'affaires et partenariat",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
