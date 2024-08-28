import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, DialogTitle, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../constants";
import { Close, Logout, Warning } from "@mui/icons-material";

type Props = { handleClose: (value: boolean) => void };

/** Logout modal component */
export const LogoutModal: React.FC<Props> = ({ handleClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  /** When logout is clicked, remove the tokens from local storage and navigate to the login page. */
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    navigate(PAGES.loginPage);
  };

  return (
    <Dialog
      open
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box p={2} width={350}>
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h5"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Warning sx={{ mr: 1 }} />
            {t("common.modalCloseButton.title")}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle2" textAlign="center">
            {t("common.modalCloseButton.subtitle")}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="outlined" onClick={() => handleClose(false)}>
              <Close sx={{ mr: 1 }} />
              {t("common.modalCloseButton.close")}
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="contained" onClick={handleLogout} color="error">
              <Logout sx={{ mr: 1 }} />
              {t("common.modalCloseButton.logout")}
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
