import * as React from "react";
import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from "@mui/material";
import { AppRouter } from "./router/AppRouter";
//import { theme } from "./theme/theme";
import { defaultTheme } from "./themes";

export default function App() {
  return (
    <MaterialThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppRouter />
    </MaterialThemeProvider>
  );
}
