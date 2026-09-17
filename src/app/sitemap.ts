import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

function entry(
  locale: Locale,
  path: string,
  options?: Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">,
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(locale, path),
    lastModified: new Date(),
    changeFrequency: options?.changeFrequency ?? "weekly",
    priority: options?.priority ?? 0.7,
    alternates: {
      languages: languageAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) =>
    entry(locale, "/", {
      changeFrequency: "daily",
      priority: 1,
    }),
  );
}
