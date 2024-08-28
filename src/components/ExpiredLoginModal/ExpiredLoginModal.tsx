import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  isModalVisibleSelector,
  showModal,
} from "../../redux/showGenericModal";
import { Typography } from "@mui/material";
import { commonColors } from "../../common/commonColors";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { Login } from "@mui/icons-material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

/** A Modal component that displays a title, a message and a button to navigate to the login page */
export const ExpiredLoginModal: FC = () => {
  const isModalVisible = useSelector(isModalVisibleSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  /** Function to handle the navigation to the login page */
  const handleNavigationToLogin = () => {
    dispatch(showModal(false));
    navigate(PAGES.loginPage);
  };

  /** If the modal is not visible, do not render it */
  if (!isModalVisible) {
    return null;
  }

  return (
    <Box height="100vh" width="100vw" position="absolute">
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={!!isModalVisible}
        sx={{
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 400,
            bgcolor: commonColors.white,
            boxShadow: 12,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="server-modal-title" variant="h5" component="h2">
            {t("common.expiredSessionModal.title")}
          </Typography>
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
            {t("common.expiredSessionModal.message")}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4 }}
            onClick={handleNavigationToLogin}
          >
            <Login sx={{ transform: "scaleX(-1)", mr: 1 }} />
            {t("common.expiredSessionModal.buttonLabel")}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
