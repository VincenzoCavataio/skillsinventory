import { createTheme } from "@mui/material";
import { ACCENT_COLOR, commonColors } from "../common/commonColors";

const theme = createTheme(
  {
    typography: {
      body1: {
        color: commonColors.subtitle,
        fontSize: "14px",
        fontWeight: "normal",
      },
      body2: {
        color: commonColors.subtitle,
        fontSize: "12px",
        fontWeight: "normal",
      },
      subtitle1: {
        color: commonColors.subtitle,
        fontSize: "24px",
        fontWeight: "normal",
      },
      subtitle2: {
        color: commonColors.gray,
        fontSize: "16px",
        fontWeight: "normal",
      },
    },
  },
  {
    palette: {
      primary: {
        main: commonColors.accentColor,
        light: "#42a5f5",
        dark: ACCENT_COLOR,
        contrastText: "#fff",
      },
      secondary: {
        main: "#fff",
      },
    },
  }
);

export default theme;
