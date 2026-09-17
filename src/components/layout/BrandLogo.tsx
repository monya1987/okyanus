import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import Image from "next/image";
import { SITE_NAME } from "@/lib/seo";

type Props = {
  height?: number | { xs: number; md: number };
  priority?: boolean;
  variant?: "color" | "white";
  sx?: SxProps<Theme>;
};

export default function BrandLogo({
  height = 48,
  priority = false,
  variant = "color",
  sx,
}: Props) {
  return (
    <Box
      component={Image}
      src={variant === "white" ? "/logo.png" : "/logo-color.png"}
      alt={SITE_NAME}
      width={524}
      height={230}
      priority={priority}
      sx={[
        {
          display: "block",
          width: "auto",
          height,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}
