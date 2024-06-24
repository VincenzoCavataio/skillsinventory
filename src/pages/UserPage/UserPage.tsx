import { Box, Container } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { ProfilePage } from "../../components/UserProfile";
import { CustomizedBreadcrumb } from "../../components/UserProfile/components/CustomizedBreadcrumb";
import { ProfileInfo } from "../../components/UserInformations";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../utilities/useApi";
import { allUserDataByUserId } from "./UserPage.controller";
import { PAGES } from "../../constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { UserAddPanel } from "../../components/UserAddPanel";
import { UserInfoMap } from "../../components/UserInfoMap";

export type Payload = {
  userId: string;
  dataType: "full" | string;
};

export const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { notFoundPage } = PAGES;
  const payload: Payload = { userId: id || "", dataType: "full" };

  const userDataByUserId = useApi(allUserDataByUserId(payload));

  useEffect(() => {
    dispatch(selectUser(userDataByUserId.data));
  }, [dispatch, navigate, notFoundPage, userDataByUserId]);
  console.log(userDataByUserId);

  // TODO: [PER BACKEND] 'Se non trova un valore response.data = '' ' e questo non va bene perché non è coerente con i tipo. [Per questo da errore sotto]
  if (userDataByUserId.error || userDataByUserId.data === "") {
    navigate(notFoundPage);
  }

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
          <Box flex={2} bgcolor="transparent" height="100%">
            <ProfileInfo />
            <Box width="100%" mt={2} bgcolor="white" height="100%">
              <UserInfoMap></UserInfoMap>
            </Box>
            <Box bgcolor="white" height="100%" width="100%" mt={2}>
              <UserAddPanel></UserAddPanel>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
