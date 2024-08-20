import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DashboardPage } from "./pages/DashboardPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { LoginPage } from "./pages/LoginPage";
import { SchedulingPage } from "./pages/SchedulingPage";
import { SigninStepper } from "./components/SignIn/components";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<DashboardPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="scheduler" element={<SchedulingPage />} />
        <Route path="signin" element={<SigninStepper />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
