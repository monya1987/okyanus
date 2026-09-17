import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { SITE_NAME } from "@/lib/seo";

type Props = {
  height?: number | { xs: number; md: number };
  sx?: SxProps<Theme>;
};

export default function BrandLogo({ height = 48, sx }: Props) {
  const fontSize =
    typeof height === "number"
      ? `${Math.round(height * 0.42)}px`
      : { xs: `${Math.round(height.xs * 0.42)}px`, md: `${Math.round(height.md * 0.42)}px` };

  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "center",
          height,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-display), var(--font-georgian), Georgia, serif",
          fontWeight: 600,
          fontSize,
          letterSpacing: "-0.02em",
          color: "sea.main",
          lineHeight: 1,
        }}
      >
        {SITE_NAME}
      </Typography>
    </Box>
  );
}
