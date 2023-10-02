import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import logo from "./../../assets/pict.svg";
import style from "./style";
import commonStyle from "../../common/commonStyle";
import { t } from "i18next";
import Searchbar from "./Searchbar";

const HeaderNavbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar sx={commonStyle.spaceBetween}>
        <Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={style.headerTitle}
          >
            <img src={logo} width={30} height={30} />
            <Typography variant="inherit" ml={1}>
              {t("common.title")}
            </Typography>
          </Typography>
        </Box>
        {/* <Box display={"flex"} flexDirection={"column"}>
          <Searchbar />
        </Box> */}
        <Box display={"flex"} flexDirection={"column"}>
          <Searchbar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavbar;
