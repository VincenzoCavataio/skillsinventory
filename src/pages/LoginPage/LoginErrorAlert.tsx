import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, DialogContentText, DialogTitle } from "@mui/material";
import { LoginErrorData } from "../../redux/types";
import { useDispatch } from "react-redux";
import { setLoginError } from "../../redux/loginStatus";
import { useTranslation } from "react-i18next";

/** Component to display an error message when the user tries to login with an incorrect email or password. */
export const LoginErrorAlert: React.FC<LoginErrorData> = ({ error }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /** If the user clicks the close button, the error message is cleared from the state. */
  const handleClose = () => {
    dispatch(setLoginError({ value: null, label: null, isError: false }));
  };

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box p={2}>
        <DialogTitle id="alert-dialog-title">{error?.label}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error?.value}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="contained" onClick={handleClose}>
              {t("common.modalCloseButton")}
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
