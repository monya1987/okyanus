import type { ExchangeRates } from "@/lib/currency";

const NBG_RATES_URL =
  "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json";

const REVALIDATE_SECONDS = 60 * 60 * 24;

const REQUEST_TIMEOUT_MS = 8000;

const TARGET_CURRENCIES = ["USD", "EUR", "RUB"] as const;

const FALLBACK_RATES: ExchangeRates = {
  GEL: 1,
  USD: 0.37,
  EUR: 0.34,
  RUB: 29.5,
};

type NbgCurrency = {
  code: string;
  quantity: number;
  rate: number;
};

type NbgResponse = Array<{
  currencies: NbgCurrency[];
}>;

async function fetchNbgRates(): Promise<ExchangeRates> {
  const response = await fetch(NBG_RATES_URL, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`NBG exchange rates request failed: ${response.status}`);
  }

  const data = (await response.json()) as NbgResponse;
  const currencies = data[0]?.currencies;

  if (!currencies) {
    throw new Error("NBG exchange rates response is invalid");
  }

  const rates: ExchangeRates = {
    GEL: 1,
    USD: 0,
    EUR: 0,
    RUB: 0,
  };

  for (const currency of TARGET_CURRENCIES) {
    const item = currencies.find(({ code }) => code === currency);

    if (!item || item.quantity <= 0 || item.rate <= 0) {
      throw new Error(`NBG exchange rate is missing for ${currency}`);
    }

    rates[currency] = item.quantity / item.rate;
  }

  return rates;
}

export async function getExchangeRates(): Promise<ExchangeRates> {
  try {
    return await fetchNbgRates();
  } catch (error) {
    console.warn(
      "NBG exchange rates unavailable, using fallback rates:",
      error instanceof Error ? error.message : error,
    );
    return FALLBACK_RATES;
  }
}
