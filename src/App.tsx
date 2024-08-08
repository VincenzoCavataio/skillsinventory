import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DashboardPage } from "./pages/DashboardPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { LoginPage } from "./pages/LoginPage";
import { SchedulingPage } from "./pages/SchedulingPage";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<h1>Home Page</h1>} />
        <Route path="" element={<DashboardPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="scheduler" element={<SchedulingPage />} />
        <Route path="signin" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
