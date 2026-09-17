import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeContent from "@/components/home/HomeContent";
import type { Locale } from "@/i18n/routing";
import { buildOrganizationJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Meta",
  });

  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: "/",
    absoluteTitle: true,
    image: {
      url: "/gallery/okeanus-3.jpg",
      alt: t("title"),
      width: 1073,
      height: 1430,
      type: "image/jpeg",
    },
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Meta",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd(t("description"))),
        }}
      />
      <HomeContent />
    </>
  );
}
