import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./theme/main-theme.tsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={mainTheme} defaultMode="dark">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
