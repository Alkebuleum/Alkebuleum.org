import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0E4F6E",          // Deep sky/ocean blue (trust, technology)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#CBB294",          // Warm sand beige (earth, stability)
      contrastText: "#0F172A",
    },
    accent: {
      main: "#A97855",          // Soft bronze (heritage, prestige)
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",       // Ink
      secondary: "#475569",     // Muted gray-blue
    },
    divider: "rgba(14,79,110,0.12)",
  },

  shape: { borderRadius: 14 },

  typography: {
    fontFamily: [
      "Plus Jakarta Sans",
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(","),
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 800, letterSpacing: -0.3 },
    h3: { fontWeight: 800, letterSpacing: -0.2 },
    button: { textTransform: "none", fontWeight: 700, letterSpacing: 0.1 },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(248,245,241,0.8) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(14,79,110,0.12)",
          color: "#0F172A",
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 18,
          paddingBlock: 10,
          fontWeight: 700,
          transition:
            "all 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease",
        },
        containedPrimary: {
          backgroundColor: "#0E4F6E",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#0C3E56",
            boxShadow: "0 0 10px rgba(14,79,110,0.25)",
          },
        },
        outlinedPrimary: {
          borderColor: "#0E4F6E",
          color: "#0E4F6E",
          "&:hover": {
            backgroundColor: "rgba(14,79,110,0.06)",
            borderColor: "#0E4F6E",
          },
          "&:active": {
            backgroundColor: "rgba(14,79,110,0.12)",
          },
        },
        containedSecondary: {
          backgroundColor: "#CBB294",
          color: "#0F172A",
          "&:hover": {
            backgroundColor: "#B99D7F",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: "#FFFFFF",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid rgba(14,79,110,0.08)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
        },
      },
    },
  },
});
