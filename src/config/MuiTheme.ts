import { createTheme } from "@mui/material";
import { commonColors } from "../common/commonColors";

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
    },
  },
  {
    palette: {
      primary: {
        main: commonColors.accentColor,
      },
      secondary: {
        main: "#fff",
      },
    },
  }
);

export default theme;
