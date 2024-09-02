import { Box, CircularProgress, Container } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { CustomizedBreadcrumb } from "../../components/UserProfile/components/CustomizedBreadcrumb";
import { ProfileInfo } from "../../components/UserInformations";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../utilities/useApi";
import { allUserDataByUserId } from "./UserPage.controller";
import { PAGES } from "../../constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/userDataSlice";
import { UserAddPanel } from "../../components/UserAddPanel";
import { UserInfoMap } from "../../components/UserInfoMap";
import { ProfileCardWrapper } from "../../components/UserProfile";

export type Payload = {
  userId: string;
  dataType: "full" | string;
};

/** Component used to create the'userInfo' page */
export const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  /** Get notFoundPage from PAGES object */
  const { notFoundPage } = PAGES;

  /** Creates payload for api call */
  const payload: Payload = { userId: id || "", dataType: "full" };

  /** Get data from api */
  const userDataByUserId = useApi(allUserDataByUserId(payload));

  /** Get loading parameter from useApi */
  const isLoading = !!userDataByUserId?.loading;

  useEffect(() => {
    dispatch(selectUser(userDataByUserId.data));
  }, [dispatch, navigate, notFoundPage, userDataByUserId]);

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
          <Box flex={1} bgcolor="white" height="100%" overflow="hidden">
            <ProfileCardWrapper />
          </Box>
          <Box flex={2} bgcolor="transparent" height="100%">
            {isLoading ? (
              <Box bgcolor="white" p={5} display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <>
                <ProfileInfo />
                <Box width="100%" mt={2} bgcolor="white" height="100%">
                  <UserInfoMap />
                </Box>
                <Box bgcolor="white" height="100%" width="100%" mt={2}>
                  <UserAddPanel />
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
