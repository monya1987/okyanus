"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sea: Palette["primary"];
    sand: Palette["primary"];
  }
  interface PaletteOptions {
    sea?: PaletteOptions["primary"];
    sand?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#225698",
      light: "#3B78C2",
      dark: "#163C6B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C9A96A",
      light: "#DDC08E",
      dark: "#9B7C42",
      contrastText: "#163C6B",
    },
    background: {
      default: "#F4F7FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C3F58",
      secondary: "#72809D",
    },
    sea: {
      main: "#225698",
      light: "#7BA3D4",
      dark: "#102A4C",
      contrastText: "#FFFFFF",
    },
    sand: {
      main: "#C9A96A",
      light: "#F3E8D2",
      dark: "#9B7C42",
      contrastText: "#2C3F58",
    },
    divider: "rgba(44, 63, 88, 0.12)",
  },
  typography: {
    fontFamily:
      "var(--font-body), var(--font-georgian), 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontFamily:
        "var(--font-display), var(--font-georgian), Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily:
        "var(--font-display), var(--font-georgian), Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily:
        "var(--font-display), var(--font-georgian), Georgia, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily:
        "var(--font-display), var(--font-georgian), Georgia, serif",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 20,
          paddingBlock: 10,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
