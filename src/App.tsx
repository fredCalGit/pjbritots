import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}
