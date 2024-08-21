import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  CircularProgress,
  Typography,
  Box,
  Button,
} from "@mui/material";
import logo from "./../../assets/logo.svg";
import { commonColors } from "../../common/commonColors";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { login } from "../../utilities/generateLogin";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginStatusSelector } from "../../redux/loginStatus";
import Background from "../../assets/bg_login.png";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { LoginErrorAlert } from "./LoginErrorAlert";
import { Login } from "@mui/icons-material";

const LOGO_SIZE = 36;

export const LoginPage = () => {
  const LoginErrorSelector = useSelector(loginStatusSelector);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  //TODO: se fabrizio conferma il formato 'email' nella sezione username possiamo abilitare anche il controllo sulla forma
  const [credentials, setCredentials] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false },
  });

  const [token, setToken] = useState("");
  const [isLoading, setLoading] = useState(false);

  const FORM = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(
      credentials.email.value,
      credentials.password.value,
      setToken,
      setLoading,
      dispatch
    );
  };

  //TODO: Capire perchè va solo al primo click su 'entra'
  useEffect(() => {
    //TODO: non va bene, se il token esiste ma è scaduto la logica non funziona
    //TODO: 2 possibili strade: 1. fare una chiamata di healtcheck (se 200 ok, se 50X redirect verso login); 2. spostare la logica da localStorage a sessionStorage
    if (token) navigate(PAGES.dashboardPage);
  }, [navigate, token]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: { value, error: false },
    });
  };
  return (
    <Box>
      <HeaderNavbar />
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 65px)",
          background: commonColors.backgroundGray,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 600,
                height: 600,
                background: "white",
                p: 5,
              }}
            >
              <Box mb={6}>
                <img src={logo} height={LOGO_SIZE} />
              </Box>
              <Box component="form" ref={FORM} onSubmit={onSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t("pages.loginPage.emailAddress")}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={credentials.email.error}
                  onChange={onInputChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  onChange={onInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Box width="100%" display="flex" justifyContent="end">
                  <Button
                    sx={{
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => navigate(PAGES.signinPage)}
                  >
                    <Typography variant="caption" color="primary">
                      {t("pages.loginPage.register")}
                    </Typography>
                    <Login sx={{ marginLeft: 1 }} fontSize="small" />
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" width="100%">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={
                      credentials.email.value === "" ||
                      credentials.password.value === ""
                    }
                    sx={{ mt: 3, mb: 2, maxWidth: 100, height: 50 }}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} color="secondary" />
                    ) : (
                      t("pages.loginPage.loginButton")
                    )}
                  </Button>
                </Box>
              </Box>
              {LoginErrorSelector?.error.isError && (
                <LoginErrorAlert error={LoginErrorSelector?.error} />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 600,
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              p: 5,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
