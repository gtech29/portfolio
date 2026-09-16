import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://juan-rodriguez.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    {
      url: `${siteUrl}/case-studies/steleesthetics`,
      lastModified: new Date(),
    },
  ];
}
