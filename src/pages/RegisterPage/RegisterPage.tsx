import {
  CardMedia,
  TextField,
  CircularProgress,
  Typography,
  Box,
  Button,
  Autocomplete,
  Container,
} from "@mui/material";
import logo from "./../../assets/logo.svg";
import { commonColors } from "../../common/commonColors";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@emotion/react";

export const RegisterPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const orgs = [
    { label: "ALMALAUREA" },
    { label: "BE" },
    { label: "ILLIMITY" },
    { label: "NEXTRE" },
    { label: "YOUCO" },
    { label: "PWC" },
    { label: "TEMP" },
    { label: "Other.." },
  ];
  const genders = [
    t(`pages.userPage.informationDetails.male`),
    t(`pages.userPage.informationDetails.female`),
    t(`pages.userPage.informationDetails.other`),
  ];
  const drivLic = [
    t(`pages.userPage.informationDetails.yes`),
    t(`pages.userPage.informationDetails.no`),
  ];
  const navigate = useNavigate();
  const FORM = useRef(null);
  return (
    // <Box
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   height="100vh"
    //   sx={{
    //     backgroundColor: "white",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    <Container>
      <Box
        maxWidth="xl"
        component="form"
        ref={FORM}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          px: "3rem",
          height: {
            xs: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            xxl: "100vh",
          },
          background: "white",
          //   borderRight: `1px solid ${theme.palette.primary.main}`,
          //   borderLeft: `1px solid  ${theme.palette.primary.main}`,
        }}
      >
        <Typography
          flex={2}
          sx={{
            fontSize: "44px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Register User
        </Typography>
        <Box
          flex={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            px: "3rem",
            height: "100%",
            background: "white",
          }}
        >
          <Box
            // flex={1}
            width={"100%"}
            component="form"
            ref={FORM}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              px: "3rem",
              height: "100%",
              background: "white",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label={t("pages.registerPage.regFName")}
              name="First Name"
              autoComplete="FirstName"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label={t("pages.registerPage.regLName")}
              name="Last Name"
              autoComplete="LastName"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("pages.registerPage.regEmail")}
              name="Email"
              autoComplete="Email"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <Autocomplete
              disablePortal
              fullWidth
              options={orgs}
              sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label={t("pages.registerPage.regSelOrg")}
                />
              )}
            />
            <TextField
              margin="normal"
              fullWidth
              id="personalPhoneNumber"
              label={t("pages.registerPage.regPNumb")}
              name="Personal Phone Number"
              autoComplete="PersonalPhoneNumber"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="workPhoneNumber"
              label={t("pages.registerPage.regWNumb")}
              name="Work Phone Number"
              autoComplete="WorkPhoneNumber"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="address"
              label={t("pages.registerPage.regAddress")}
              name="Address"
              autoComplete="Address"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="city"
              label={t("pages.registerPage.regCity")}
              name="City"
              autoComplete="City"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="province"
              label={t("pages.registerPage.regProvince")}
              name="Province"
              autoComplete="Province"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
          </Box>
          <Box
            // flex={1}
            width={"100%"}
            component="form"
            ref={FORM}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              px: "3rem",
              height: "100%",
              background: "white",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-password-input"
              type="password"
              label={t("pages.registerPage.regCreatePw")}
              name="Password"
              autoComplete="Password"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-password-input"
              type="password"
              label={t("pages.registerPage.regRepeatPw")}
              name="Repeat Password"
              autoComplete="RepeatPassword"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={t("pages.registerPage.regBday")}
                sx={{ width: "100%", mb: 2, mt: 2, backgroundColor: "white" }}
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={t("pages.registerPage.regFEmplDate")}
                sx={{ width: "100%", mb: 2, mt: 2, backgroundColor: "white" }}
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
                label={t("pages.registerPage.regActEmplDate")}
                sx={{ width: "100%", mb: 2, mt: 2, backgroundColor: "white" }}
              />
            </LocalizationProvider>
            <Autocomplete
              disablePortal
              options={genders}
              sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("pages.registerPage.regGender")}
                />
              )}
            />
            <TextField
              margin="normal"
              fullWidth
              id="zipCode"
              label={t("pages.registerPage.regZipCode")}
              name="Zip Code"
              autoComplete="ZipCode"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="nation"
              label={t("pages.registerPage.regNation")}
              name="Nation"
              autoComplete="Nation"
              autoFocus
              sx={{ mb: 2, backgroundColor: "white" }}
            />
            <Autocomplete
              disablePortal
              options={drivLic}
              sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("pages.registerPage.regDriverLic")}
                />
              )}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{
            background: "white",
          }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, maxWidth: 100, height: 50 }}
          >
            Register
          </Button>
        </Box>
      </Box>
      {/* </Box> */}
    </Container>
  );
};
