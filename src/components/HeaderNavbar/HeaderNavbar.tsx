import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import logoWhite from "./../../assets/pict.svg";
import { style } from "./style";
import commonStyle from "../../common/commonStyle";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect";
import { Logout } from "./Logout";

/** Top navigation bar */
export const HeaderNavbar = () => {
  const { t } = useTranslation();
  const LOGO_SIZE = 32;

  return (
    <AppBar
      position="relative"
      sx={{ boxShadow: "none", zIndex: 1, bgcolor: "#222" }}
    >
      <Toolbar sx={commonStyle.spaceBetween}>
        <Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={style.headerTitle}
          >
            <img src={logoWhite} height={LOGO_SIZE} />
            <Typography variant="inherit" ml={1}>
              {t("common.title").toUpperCase()}
            </Typography>
          </Typography>
        </Box>
        <Box
          justifyContent="flex-end"
          alignContent="center"
          alignItems="center"
          justifyItems="center"
          display="flex"
        >
          <LanguageSelect />
          <Logout />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
