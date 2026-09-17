"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  "aria-label"?: string;
};

export default function AppLink({ href, children, sx, ...rest }: Props) {
  return (
    <Box component={Link} href={href} sx={sx} {...rest}>
      {children}
    </Box>
  );
}
