import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactsContent from "@/components/contacts/ContactsContent";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Contacts",
  });

  return buildPageMetadata({
    title: t("title"),
    description: t("seoDescription"),
    locale: locale as Locale,
    path: "/contacts",
  });
}

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <ContactsContent />;
}
