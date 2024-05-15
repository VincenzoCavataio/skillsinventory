import { Box, Breadcrumbs } from "@mui/material";
import { StyledBreadcrumb } from "./styleBreadcrumb";
import HomeIcon from "@mui/icons-material/Home";

export const CustomizedBreadcrumb = () => {
  return (
    <Box pt={2} pb={2}>
      <Breadcrumbs separator="›">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="User" />
      </Breadcrumbs>
    </Box>
  );
};
