import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, DialogTitle, Typography } from "@mui/material";
import { Close, Delete, Warning } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type ConfirmModalProps = {
  open: boolean;
  handleClose: (confirmed: boolean) => void;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  handleClose,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box p={2} width={350}>
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h6"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Warning sx={{ mr: 1 }} />
            {t("pages.userPage.deleteModal.confirm")}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle2" textAlign="center">
            {t("pages.userPage.deleteModal.consequences")}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="outlined" onClick={() => handleClose(false)}>
              <Close sx={{ mr: 1 }} />
              {t("pages.userPage.deleteModal.cancel")}
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" width="100%">
            <Button
              variant="contained"
              onClick={() => handleClose(true)}
              color="error"
            >
              <Delete sx={{ mr: 1 }} />
              {t("pages.userPage.deleteModal.delete")}
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
