import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Step1 = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around">
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label={t("pages.signinPage.step1.email")}
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ mb: 3, mt: 3 }}
        />
        <TextField
          margin="normal"
          type="password"
          size="small"
          required
          fullWidth
          id="email"
          label={t("pages.signinPage.step1.password")}
          name="Password"
          autoComplete="Password"
        />
        <TextField
          margin="normal"
          type="password"
          size="small"
          required
          fullWidth
          id="repeatPassword"
          label={t("pages.signinPage.step1.confirmPassword")}
          name="repeatPassword"
          autoComplete="repeatPassword"
          sx={{ mb: 3 }}
        />
      </Box>
    </Box>
  );
};
