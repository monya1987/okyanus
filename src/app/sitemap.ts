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

const STATIC_PATHS = ["/", "/about", "/batumi", "/ships", "/contacts"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      entries.push(
        entry(locale, path, {
          changeFrequency: path === "/" ? "daily" : "monthly",
          priority: path === "/" ? 1 : 0.7,
        }),
      );
    }
  }

  return entries;
}
