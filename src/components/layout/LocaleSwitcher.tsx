"use client";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LOCALE_OPTIONS: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "EN" },
  ru: { flag: "🇷🇺", label: "RU" },
  tr: { flag: "🇹🇷", label: "TR" },
  ka: { flag: "🇬🇪", label: "KA" },
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Common");
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value as Locale;
    if (nextLocale === locale) {
      return;
    }
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <FormControl size="small" variant="outlined">
      <Select
        value={locale}
        onChange={handleChange}
        aria-label={t("language")}
        renderValue={(value) => {
          const option = LOCALE_OPTIONS[value as Locale];
          return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box component="span" sx={{ fontSize: "1.1rem", lineHeight: 1 }}>
                {option.flag}
              </Box>
              {option.label}
            </Box>
          );
        }}
        sx={{
          minWidth: 96,
          bgcolor: "background.paper",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            py: 0.75,
          },
        }}
      >
        {routing.locales.map((item) => {
          const option = LOCALE_OPTIONS[item];
          return (
            <MenuItem key={item} value={item}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="span"
                  sx={{ fontSize: "1.1rem", lineHeight: 1 }}
                >
                  {option.flag}
                </Box>
                {option.label}
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
