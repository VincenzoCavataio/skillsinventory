import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./config/MuiTheme.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./styles/index.css";
import "./translations/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
