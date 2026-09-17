export const CURRENCIES = ["GEL", "USD", "EUR", "RUB"] as const;

export type Currency = (typeof CURRENCIES)[number];

export type ExchangeRates = Record<Currency, number>;

export const DEFAULT_CURRENCY: Currency = "GEL";

export function isCurrency(value: string): value is Currency {
  return CURRENCIES.includes(value as Currency);
}
