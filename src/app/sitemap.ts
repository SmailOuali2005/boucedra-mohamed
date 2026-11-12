import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boucedra-mohamed.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          fr: `${baseUrl}/?lang=fr`,
          ar: `${baseUrl}/?lang=ar`,
        },
      },
    },
  ];
}
