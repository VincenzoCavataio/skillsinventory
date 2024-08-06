import { Box, Breadcrumbs } from "@mui/material";
import { StyledBreadcrumb } from "./styleBreadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../../constants";
import { useTranslation } from "react-i18next";

export const CustomizedBreadcrumb = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box pt={2} pb={2}>
      <Breadcrumbs separator="›">
        <StyledBreadcrumb
          component="a"
          onClick={() => navigate(PAGES.dashboardPage)}
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
          component="a"
          href=""
          label={t("pages.userPage.info.userBreadcrumb")}
          disabled
        />
      </Breadcrumbs>
    </Box>
  );
};
