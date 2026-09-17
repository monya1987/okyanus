import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_NAME = "Okyanus";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const SHARE_IMAGE = {
  width: 1200,
  height: 630,
  type: "image/jpeg",
} as const;

const OPEN_GRAPH_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_GE",
  tr: "tr_TR",
  ka: "ka_GE",
};

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized =
    !path || path === "/"
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;

  if (locale === routing.defaultLocale) {
    return normalized || "/";
  }

  return normalized ? `/${locale}${normalized}` : `/${locale}`;
}

export function absoluteUrl(locale: Locale, path = "/"): string {
  const localized = localizedPath(locale, path);
  return localized === "/" ? `${SITE_URL}/` : `${SITE_URL}${localized}`;
}

export function languageAlternates(path = "/"): Record<string, string> {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(locale, path)]),
  ) as Record<string, string>;

  languages["x-default"] = absoluteUrl(routing.defaultLocale, path);
  return languages;
}

type BuildPageMetaInput = {
  title: string;
  description: string;
  locale: Locale;
  path?: string;
  absoluteTitle?: boolean;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    type?: string;
  };
};

function resolveImageUrl(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function buildPageMetadata({
  title,
  description,
  locale,
  path = "/",
  absoluteTitle = false,
  image,
}: BuildPageMetaInput): Metadata {
  const canonical = absoluteUrl(locale, path);
  const imageUrl = image
    ? resolveImageUrl(image.url)
    : `${SITE_URL}/icon.png`;
  const imageType = image?.type ?? "image/png";
  const ogImage = {
    url: imageUrl,
    secureUrl: imageUrl.startsWith("https://") ? imageUrl : undefined,
    width: image?.width ?? SHARE_IMAGE.width,
    height: image?.height ?? SHARE_IMAGE.height,
    alt: image?.alt ?? title,
    type: imageType,
  };
  const alternateLocale = routing.locales
    .filter((item) => item !== locale)
    .map((item) => OPEN_GRAPH_LOCALE[item]);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: OPEN_GRAPH_LOCALE[locale],
      alternateLocale,
      countryName: "Georgia",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImage.url,
          alt: ogImage.alt,
          width: ogImage.width,
          height: ogImage.height,
          type: imageType,
        },
      ],
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

function breadcrumbListNode(locale: Locale, items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function buildBreadcrumbJsonLd(locale: Locale, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbListNode(locale, items),
  };
}

export function buildFaqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildOrganizationJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    areaServed: {
      "@type": "Country",
      name: "Georgia",
    },
  };
}
