export {};

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    white: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    dark: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    secondary: true;
  }
  interface ButtonPropsVariantOverrides {
    dark: true;
    main: true;
  }
}
