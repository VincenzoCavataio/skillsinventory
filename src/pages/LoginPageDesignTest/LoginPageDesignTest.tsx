import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  CircularProgress,
  Typography,
  Box,
  Button,
} from "@mui/material";
import logo from "./../../assets/logo_skillsinventory_scritta.png";
import logo2 from "./../../assets/logo.svg";
import { commonColors } from "../../common/commonColors";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { login } from "../../utilities/generateLogin";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginStatusSelector } from "../../redux/loginStatus";
// import Background from "../../assets/bg_login3.png";
import Background from "../../assets/5159370.jpg";

import { HeaderNavbar } from "../../components/HeaderNavbar";
import { LoginErrorAlert } from "./LoginErrorAlert";
import {
  AdsClickOutlined,
  AssignmentOutlined,
  KeyboardArrowDownOutlined,
  Login,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

const LOGO_SIZE = 80;
const LOGO_SIZE2 = 20;
export const LoginPageDesignTest = () => {
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
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box mt="80px" mb={6} mr="auto" ml="auto">
                <img src={logo} height={LOGO_SIZE} />
              </Box>
              <Box
                component="form"
                ref={FORM}
                onSubmit={onSubmit}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label={t("pages.loginPage.emailAddress")}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={credentials.email.error}
                  onChange={onInputChange}
                  sx={{ mb: 2, width: "400px" }}
                />
                <TextField
                  margin="normal"
                  required
                  name="password"
                  onChange={onInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ width: "400px" }}
                />
                <Box width="400px" display="flex" justifyContent="end">
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
                    sx={{
                      mt: 3,
                      mb: 2,
                      maxWidth: 100,
                      height: 50,
                      boxShadow: "none",
                    }}
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
              <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                alignContent="flex-end"
                justifyContent="flex-end"
              >
                <Box>
                  <Typography sx={{ fontSize: 10, textAlign: "center" }}>
                    powered by
                  </Typography>
                  <img src={logo2} height={LOGO_SIZE2} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 600,
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              p: 5,
            }}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <AssignmentOutlined
              sx={{ color: "black", transform: "scale(2.5)" }}
              fontSize="large"
            />
            <KeyboardArrowDownOutlined
              sx={{ color: "black", transform: "scale(2)" }}
              fontSize="large"
            />
            <AdsClickOutlined
              sx={{ color: "black", transform: "scale(2.5)" }}
              fontSize="large"
            />
            <KeyboardArrowDownOutlined
              sx={{ color: "black", transform: "scale(2)" }}
              fontSize="large"
            />
            <WorkspacePremiumOutlined
              sx={{ color: "black", transform: "scale(2.5)" }}
              fontSize="large"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
