"use client";

import SailingIcon from "@mui/icons-material/Sailing";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import SpeedIcon from "@mui/icons-material/Speed";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HOME_SERVICES } from "@/lib/site";

const SERVICE_ICONS = {
  trips: SailingIcon,
  parasailing: ParaglidingIcon,
  jetski: SpeedIcon,
} as const;

export default function HomeServiceCards() {
  const t = useTranslations("Home");

  return (
    <Grid container spacing={3}>
      {HOME_SERVICES.map((service) => {
        const Icon = SERVICE_ICONS[service.key];
        return (
          <Grid key={service.key} size={{ xs: 12, md: 4 }}>
            <Card
              component={Link}
              href={service.href}
              elevation={0}
              sx={{
                height: "100%",
                textDecoration: "none",
                border: "1px solid",
                borderColor: "divider",
                "&:hover": { borderColor: "primary.main" },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: "sand.light",
                    color: "primary.main",
                    display: "grid",
                    placeItems: "center",
                    mb: 2,
                  }}
                >
                  <Icon />
                </Box>
                <Typography variant="h3" sx={{ fontSize: "1.25rem", mb: 1 }}>
                  {t(`${service.key}Title`)}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {t(`${service.key}Body`)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
