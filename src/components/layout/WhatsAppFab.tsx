"use client";

import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";
import { getWhatsappHref } from "@/lib/site";

export default function WhatsAppFab() {
  const t = useTranslations("Common");

  return (
    <Box
      component="a"
      href={getWhatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      sx={{
        position: "fixed",
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 20,
        width: 56,
        height: 56,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(16, 42, 76, 0.28)",
      }}
    >
      <Box
        component="img"
        src="/whatsapp.png"
        alt=""
        sx={{ width: "100%", height: "100%", display: "block" }}
      />
    </Box>
  );
}
