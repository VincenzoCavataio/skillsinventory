import { Box } from "@mui/material";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { DashboardPage } from "./pages/DashboardPage";
import { SchedulingPage } from "./pages/SchedulingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { SigninStepper } from "./components/SignIn/components";
import { ExpiredLoginModal } from "./components/ExpiredLoginModal";

/** Wrapper for the entire application with all routes and expired login modal */
const App = () => {
  return (
    <Box className="App">
      <Routes>
        <Route path="" element={<DashboardPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="scheduler" element={<SchedulingPage />} />
        <Route path="signin" element={<SigninStepper />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ExpiredLoginModal />
    </Box>
  );
};

export default App;
