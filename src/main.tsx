import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./config/MuiTheme.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./styles/index.css";
import "./translations/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
