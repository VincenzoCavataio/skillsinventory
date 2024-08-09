import { Box, Breadcrumbs } from "@mui/material";
import { StyledBreadcrumbChip } from "./StyledBreadcrumbChip";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../../constants";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "@mui/icons-material";

/** Breadcrumb component */
export const CustomizedBreadcrumb = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate(PAGES.dashboardPage);
  };

  return (
    <Box pt={2} pb={2}>
      <Breadcrumbs separator={<ChevronRight />}>
        <StyledBreadcrumbChip
          component="a"
          onClick={handleNavigate}
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumbChip
          component="a"
          href=""
          label={t("pages.userPage.info.userBreadcrumb")}
          disabled
        />
      </Breadcrumbs>
    </Box>
  );
};
