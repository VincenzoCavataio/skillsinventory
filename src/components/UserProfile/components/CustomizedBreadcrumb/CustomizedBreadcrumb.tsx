import { Breadcrumbs } from "@mui/material";
import { StyledBreadcrumb } from "./styleBreadcrumb";
import HomeIcon from "@mui/icons-material/Home";

export const CustomizedBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="User" />
      </Breadcrumbs>
    </>
  );
};
