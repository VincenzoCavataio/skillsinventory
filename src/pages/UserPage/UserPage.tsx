import { Box, Container } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { style } from "./style";
import { ProfilePage } from "../../components/UserProfile";
import { CustomizedBreadcrumb } from "../../components/UserProfile/components/CustomizedBreadcrumb";
import { ProfileInfo } from "../../components/UserInformations";

export const UserPage = () => {
  //fill here
  //
  //
  return (
    <>
      <HeaderNavbar />
      <Container
        maxWidth="xl"
        sx={{
          ...style.container,
          overflow: "hidden",
        }}
      >
        <CustomizedBreadcrumb />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          ...style.container2,
          overflow: "hidden",
          height: "auto",
        }}
      >
        <Box sx={{ ...style.box1, overflow: "hidden", height: "fit-content" }}>
          <ProfilePage />
        </Box>
        <Box sx={{ ...style.box2, overflow: "hidden", height: "auto" }}>
          <ProfileInfo />
        </Box>
      </Container>
    </>
  );
};
