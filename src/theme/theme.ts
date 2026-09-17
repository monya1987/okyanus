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
      main: "#0A6E7A",
      light: "#1A9AA8",
      dark: "#064E56",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C45C26",
      light: "#E07A45",
      dark: "#8F3F15",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F3F7F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#12263A",
      secondary: "#4A5D6A",
    },
    sea: {
      main: "#0A6E7A",
      light: "#5EC8D4",
      dark: "#043740",
      contrastText: "#FFFFFF",
    },
    sand: {
      main: "#E8DCC8",
      light: "#F5EFE4",
      dark: "#C4B49A",
      contrastText: "#12263A",
    },
    divider: "rgba(18, 38, 58, 0.1)",
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
