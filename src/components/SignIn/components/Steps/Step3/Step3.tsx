import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Step3 = () => {
  const { t } = useTranslation();

  return (
    // <Box display="flex" flexDirection="row" justifyContent="flex-start">
    <Box display="flex" flexDirection="column" justifyContent="flex-start">
      {/* <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ mr: "100px" }}
      > */}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          size="small"
          required
          fullWidth
          id="address"
          label={t("pages.signinPage.step3.address")}
          name="address"
          autoComplete="address"
          autoFocus
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3, width: "442.5px" }}
        />
        <TextField
          margin="normal"
          size="small"
          required
          fullWidth
          id="addressNumber"
          label={t("pages.signinPage.step3.addressNumber")}
          name="addressNumber"
          autoComplete="addressNumber"
          type="number"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3, width: "127.5px" }}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          size="small"
          required
          fullWidth
          id="city"
          label={t("pages.signinPage.step3.city")}
          name="city"
          autoComplete="city"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3, width: "285px" }}
        />
        <TextField
          size="small"
          required
          fullWidth
          id="province"
          label={t("pages.signinPage.step3.province")}
          name="province"
          autoComplete="province"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3, width: "127.5px" }}
        />
        <TextField
          size="small"
          required
          fullWidth
          id="zipCode"
          label={t("pages.signinPage.step3.zipCode")}
          name="zipCode"
          autoComplete="zipCode"
          type="number"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          // sx={{ mb: 3, mt: 3, width: "185px" }}
          sx={{ mb: 3, mt: 3, width: "127.5px" }}
        />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <TextField
          size="small"
          required
          fullWidth
          id="nation"
          label={t("pages.signinPage.step3.nation")}
          name="nation"
          autoComplete="nation"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3 }}
        />
      </Box>
    </Box>
  );
};
