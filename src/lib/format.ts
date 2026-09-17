import type { Locale } from "@/i18n/routing";
import type { Currency, ExchangeRates } from "@/lib/currency";

export type LocalizedString = {
  en: string;
  ru: string;
  tr: string;
  ka: string;
};

export function tLocalized(value: LocalizedString, locale: Locale) {
  return value[locale] || value.en || value.ru || "";
}

export function applyPlaceholders(
  text: string,
  vars: Record<string, string>,
) {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    text,
  );
}

export function convertFromGel(
  amountGel: number,
  currency: Currency,
  rates: ExchangeRates,
) {
  return amountGel * rates[currency];
}

export function convertAmount(
  amount: number,
  from: Currency,
  to: Currency,
  rates: ExchangeRates,
) {
  if (from === to) {
    return amount;
  }

  const amountGel = from === "GEL" ? amount : amount / rates[from];
  return amountGel * rates[to];
}

export function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export function formatPhoneDisplay(phone: string) {
  const digits = phoneDigits(phone);

  if (digits.startsWith("99532") && digits.length === 12) {
    return `+995 32 ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }

  if (digits.startsWith("995") && digits.length === 12) {
    return `+995 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }

  return phone;
}

export function whatsappLink(phone: string, text?: string) {
  const digits = phoneDigits(phone);
  const url = new URL(`https://wa.me/${digits}`);
  if (text) {
    url.searchParams.set("text", text);
  }
  return url.toString();
}

export function formatPrice(
  amount: number,
  currency: Currency,
  locale: Locale,
) {
  const localeTag =
    locale === "ru"
      ? "ru-RU"
      : locale === "tr"
        ? "tr-TR"
        : locale === "ka"
          ? "ka-GE"
          : "en-GE";

  return new Intl.NumberFormat(localeTag, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function emptyLocalized(fallback = ""): LocalizedString {
  return {
    en: fallback,
    ru: fallback,
    tr: fallback,
    ka: fallback,
  };
}

export function localizeText(
  value?: Partial<LocalizedString> | null,
  fallback = "",
): LocalizedString {
  const en = value?.en || value?.ru || fallback;
  return {
    en,
    ru: value?.ru || en,
    tr: value?.tr || en,
    ka: value?.ka || en,
  };
}
