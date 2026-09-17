"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function HeroButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "contained" | "outlined";
}) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const sx =
    variant === "contained"
      ? { bgcolor: "secondary.main", color: "secondary.contrastText" }
      : {
          color: "common.white",
          borderColor: "rgba(255,255,255,0.7)",
          "&:hover": {
            borderColor: "common.white",
            bgcolor: "rgba(255,255,255,0.08)",
          },
        };

  if (isExternal) {
    return (
      <Button href={href} variant={variant} size="large" sx={sx}>
        {label}
      </Button>
    );
  }

  return (
    <Button component={Link} href={href} variant={variant} size="large" sx={sx}>
      {label}
    </Button>
  );
}

export default function PageHero({
  kicker,
  title,
  subtitle,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 420, md: 560 },
        display: "flex",
        alignItems: "flex-end",
        color: "common.white",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(16, 42, 76, 0.25) 0%, rgba(16, 42, 76, 0.72) 100%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", pb: { xs: 6, md: 8 } }}>
        {kicker ? (
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.16em", color: "sand.light" }}
          >
            {kicker}
          </Typography>
        ) : null}
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, maxWidth: 760 }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            sx={{
              mt: 2,
              maxWidth: 620,
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
        {(primaryHref || secondaryHref) && (
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
            {primaryHref && primaryLabel ? (
              <HeroButton href={primaryHref} label={primaryLabel} variant="contained" />
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <HeroButton href={secondaryHref} label={secondaryLabel} variant="outlined" />
            ) : null}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
