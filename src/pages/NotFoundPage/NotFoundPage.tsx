import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { colors } from "../../common/commonColors";
import HomeIcon from "@mui/icons-material/Home";
import style from "./style";
import commonStyle from "../../common/commonStyle";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box sx={style.wrapper}>
      <Box sx={style.element}>
        <Typography variant="h4" color={colors.title}>
          {t("pages.notFound.title")}
        </Typography>
        <Typography variant="subtitle1" color={colors.subtitle}>
          {t("pages.notFound.description")}
        </Typography>
        <Button
          sx={commonStyle.colorWhite}
          color={"primary"}
          variant="contained"
          onClick={handleClick}
        >
          <HomeIcon sx={[commonStyle.margin2, commonStyle.padding1]} />
          {t("common.back_home")}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
