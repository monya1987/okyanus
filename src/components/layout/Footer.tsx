"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/seo";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const t = useTranslations("Footer");
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
          "linear-gradient(180deg, rgba(10,110,122,0.04) 0%, rgba(243,247,248,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
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
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {t("tagline")}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {t("rights", { year })}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
