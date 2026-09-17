"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import { NAV_ITEMS } from "./nav";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tContacts = useTranslations("Contacts");
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
        background:
          "linear-gradient(180deg, rgba(34,86,152,0.06) 0%, rgba(244,247,251,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
          }}
        >
          <Box>
            <Box
              component={Link}
              href="/"
              aria-label={SITE_NAME}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                mb: 1,
                textDecoration: "none",
                color: "text.primary",
              }}
            >
              <BrandLogo height={48} />
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 280 }}>
              {t("tagline")}
            </Typography>
          </Box>

          <Stack spacing={1}>
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item.href}
                component={Link}
                href={item.href}
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none" }}
              >
                {tNav(item.key)}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {tContacts("locationLine")}
            </Typography>
            <Typography
              component="a"
              href={`tel:${CONTACT.phoneTel}`}
              variant="body2"
              sx={{ color: "text.primary", textDecoration: "none" }}
            >
              {CONTACT.phoneDisplay}
            </Typography>
            <Typography
              component="a"
              href={`mailto:${CONTACT.email}`}
              variant="body2"
              sx={{ color: "text.primary", textDecoration: "none" }}
            >
              {CONTACT.email}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", pt: 1 }}>
              {t("rights", { year })}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
