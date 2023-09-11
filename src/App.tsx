import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<h1>Home Page</h1>} />
        <Route path="" element={<DashboardPage />} />
        <Route path="login" element={<h1>Login Page</h1>} />
        <Route path="signin" element={<h1>Signin Page</h1>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
