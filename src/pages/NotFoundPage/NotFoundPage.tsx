import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { commonColors } from "../../common/commonColors";
import { style } from "./style";
import { NavigationButton } from "../../components/NavigationButton";

export const NotFoundPage = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.element}>
        <Typography variant="h4" color={commonColors.title}>
          {t("pages.notFound.title")}
        </Typography>
        <Typography variant="subtitle1" color={commonColors.subtitle}>
          {t("pages.notFound.description")}
        </Typography>
        <NavigationButton />
      </Box>
    </Box>
  );
};
