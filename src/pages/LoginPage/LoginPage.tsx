import React, { useEffect, useRef, useState } from "react";
import {
  CardMedia,
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
import { LoginErrorAlert } from "./LoginErrorAlert";

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        width={400}
        component="form"
        ref={FORM}
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "3rem",
          height: "100%",
          background: "white",
        }}
      >
        <CardMedia component="img" image={logo} sx={{ mb: 8, width: "100%" }} />
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
        <Typography
          variant="body2"
          color="text.secondary"
          width="100%"
          textAlign="right"
        >
          <Typography
            component="span"
            fontSize={15}
            onClick={() => navigate(PAGES.dashboardPage)}
            variant="button"
            color={commonColors.accentColor}
            mx={0.5}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {t("pages.loginPage.register")}
          </Typography>
        </Typography>
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
  );
};
