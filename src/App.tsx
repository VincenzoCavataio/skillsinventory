import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Dashboard Page</h1>} />
        <Route path="login" element={<h1>Login Page</h1>} />
        <Route path="signin" element={<h1>Signin Page</h1>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
