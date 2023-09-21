import { createTheme } from "@mui/material";
import { commonColors } from "../common/commonColors";

const theme = createTheme({
  palette: {
    primary: {
      main: commonColors.accentColor,
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default theme;
