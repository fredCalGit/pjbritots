import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f07e4c",
    },
    secondary: {
      main: "#4c58a7",
      dark: "#3c426a",
    },
    black: {
      600: "#3a3a3c",
    },
    white: {
      main: "#fff",
      dark: "#f2f4f7",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    primary: Palette["primary"];
    secondary: Palette["primary"];
    white: Palette["primary"];
    black: Palette["primary"];
  }

  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
    secondary?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
  }
}
