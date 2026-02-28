import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => `
        :root {
          --dot-color: ${theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.08)"};
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          backgroundColor: theme.palette.mode === "dark" ? "#141313" : "#ffffff",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 12px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                : "0 12px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.06)",
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#fafafa",
          paper: "#ffffff",
        },
        primary: {
          main: "#1e1d1d",
        },
        secondary: {
          main: "#FF4400",
          contrastText: "rgba(0,0,0,0.87)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ffffff",
          contrastText: "rgba(72,72,72,0.87)",
        },
        secondary: {
          main: "#FF4400",
          contrastText: "rgba(0,0,0,0.87)",
        },
        divider: "rgba(255,255,255,0.08)",
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.6)",
          disabled: "rgba(255, 255, 255, 0.3)",
        },
        background: {
          paper: "#141313",
          default: "#0a0a0a",
        },
      },
    },
  },
});
