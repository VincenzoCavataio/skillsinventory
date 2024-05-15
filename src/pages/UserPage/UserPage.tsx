import { Box, Container } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { ProfilePage } from "../../components/UserProfile";
import { CustomizedBreadcrumb } from "../../components/UserProfile/components/CustomizedBreadcrumb";
import { ProfileInfo } from "../../components/UserInformations";

export const UserPage = () => {
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
          className="userPageWrapper"
        >
          <Box flex={1} bgcolor="white" height="100%">
            <ProfilePage />
          </Box>
          <Box flex={2} bgcolor="white" height="100%">
            <ProfileInfo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
