import { allDocs } from "@/.contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://retroui.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...allDocs.map((doc) => ({
      url: `https://retroui.vercel.app${doc.url}`,
      lastModified: doc.lastUpdated,
    })),
  ];
}
