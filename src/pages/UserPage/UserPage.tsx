import { Box, Container } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { ProfilePage } from "../../components/UserProfile";
import { CustomizedBreadcrumb } from "../../components/UserProfile/components/CustomizedBreadcrumb";
import { ProfileInfo } from "../../components/UserInformations";

export const UserPage = () => {
  //fill here
  //
  //
  return (
    <Box>
      <HeaderNavbar />
      <Container>
        <CustomizedBreadcrumb />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          maxWidth="xl"
          gap={2}
        >
          <Box sx={{ flex: 1, backgroundColor: "white" }}>
            <ProfilePage />
          </Box>
          <Box sx={{ flex: 2, backgroundColor: "white" }}>
            <ProfileInfo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
