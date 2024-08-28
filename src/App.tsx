import { Box } from "@mui/material";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { DashboardPage } from "./pages/DashboardPage";
import { SchedulingPage } from "./pages/SchedulingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SigninStepper } from "./components/SignIn/components";
import { ExpiredLoginModal } from "./components/ExpiredLoginModal";
import { useDispatch, useSelector } from "react-redux";
import { isModalVisibleSelector, showModal } from "./redux/showGenericModal";
import { useEffect, useRef } from "react";
import { isTokenExpired } from "./utilities/isTokenExpired/isTokenExpired";
import { PAGES } from "./constants";

/** Wrapper for the entire application with all routes and expired login modal */
const App = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(isModalVisibleSelector);
  const refreshToken = useRef(localStorage.getItem("refreshToken"));
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  /** If the modal is visible, blur the background */
  const BLURRED_BG = isModalVisible ? "blur(10px)" : "none";

  /** If the refresh token is expired, show the expired login modal */
  useEffect(() => {
    if (refreshToken.current) {
      const isRefreshTokenExpired = isTokenExpired({
        token: refreshToken.current!,
      });
      dispatch(showModal(isRefreshTokenExpired));
    }
  }, [dispatch]);

  /** If the token is expired, redirect to the login page */
  useEffect(() => {
    if (!token) {
      navigate(PAGES.loginPage);
    }
  }, [navigate, token]);

  return (
    <>
      <Box className="App" sx={{ filter: BLURRED_BG }}>
        <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="scheduler" element={<SchedulingPage />} />
          <Route path="signin" element={<SigninStepper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <ExpiredLoginModal />
    </>
  );
};

export default App;
