"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/seo";
import BrandLogo from "./BrandLogo";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(243, 247, 248, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ gap: { xs: 1, md: 2 }, minHeight: { xs: 64, md: 72 } }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "text.primary",
              mr: "auto",
            }}
            aria-label={SITE_NAME}
          >
            <BrandLogo height={{ xs: 48, md: 56 }} />
          </Box>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <LocaleSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
