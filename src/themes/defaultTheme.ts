import { createTheme, responsiveFontSizes } from "@mui/material";

export const defaultTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#f07e4c",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#3C426a",
        light: "#4c58a7",
        contrastText: "#FFFFFF",
      },
      grey: {
        500: "#3a3a3c",
      },
      background: {
        default: "#FFFFFF",
        paper: "#f2f4f7",
      },
    },
    typography: {
      fontFamily: "Mulish, sans-serif",
      fontWeightBold: 700,
      fontWeightRegular: 400,
      fontSize: 16,
    },
  })
);
