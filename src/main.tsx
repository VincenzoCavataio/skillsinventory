import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./config/MuiTheme.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./styles/index.scss";
import "./translations/i18n.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
