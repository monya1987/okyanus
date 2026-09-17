"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import LocaleSwitcher from "./LocaleSwitcher";
import { NAV_ITEMS, isNavActive } from "./nav";

export default function Header() {
  const t = useTranslations("Nav");
  const tHome = useTranslations("Home");
  const tCommon = useTranslations("Common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(244, 247, 251, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              gap: { xs: 1, md: 2 },
              minHeight: { xs: 72, md: 80 },
              position: "relative",
            }}
          >
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "text.primary",
                zIndex: 1,
              }}
              aria-label={SITE_NAME}
            >
              <BrandLogo height={{ xs: 44, md: 52 }} priority />
            </Box>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = isNavActive(pathname, item.href);

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    color={isActive ? "primary" : "inherit"}
                    sx={{
                      px: 1.5,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "primary.main" : "text.primary",
                      borderBottom: "2px solid",
                      borderColor: isActive ? "primary.main" : "transparent",
                      borderRadius: 0,
                    }}
                  >
                    {t(item.key)}
                  </Button>
                );
              })}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", ml: "auto", zIndex: 1 }}
            >
              <Button
                href={`tel:${CONTACT.phoneTel}`}
                startIcon={<PhoneOutlinedIcon />}
                sx={{ display: { xs: "none", lg: "inline-flex" } }}
              >
                {tHome("call")}
              </Button>
              <LocaleSwitcher />
              <IconButton
                edge="end"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "inline-flex", md: "none" } }}
                aria-label={tCommon("menu")}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 280, p: 2 } } }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={() => setOpen(false)}
            aria-label={SITE_NAME}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <BrandLogo height={40} />
          </Box>
          <IconButton onClick={() => setOpen(false)} aria-label={tCommon("close")}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1}>
          {NAV_ITEMS.map((item) => {
            const isActive = isNavActive(pathname, item.href);

            return (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                color={isActive ? "primary" : "inherit"}
                sx={{
                  justifyContent: "flex-start",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "primary.main" : "text.primary",
                  bgcolor: isActive ? "action.selected" : "transparent",
                }}
              >
                {t(item.key)}
              </Button>
            );
          })}
          <Button
            href={`tel:${CONTACT.phoneTel}`}
            startIcon={<PhoneOutlinedIcon />}
            sx={{ justifyContent: "flex-start" }}
          >
            {CONTACT.phoneDisplay}
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
