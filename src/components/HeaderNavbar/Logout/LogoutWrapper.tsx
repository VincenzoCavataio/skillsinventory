import { useState } from "react";
import { LogoutModal } from "./LogoutModal";
import { LogoutButton } from "./LogoutButton";
import { Box } from "@mui/material";

/** Wrapper component for the logout button and modal. */
export const LogoutWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  /** check if the user is on the login or signin page */
  const IS_LOGIN_OR_SIGNIN_PAGE =
    window.location.pathname === "/login" ||
    window.location.pathname === "/signin";

  /** If the user is on the login or signin page, do not render the logout button. */
  if (IS_LOGIN_OR_SIGNIN_PAGE) return null;

  return (
    <Box>
      <LogoutButton handleClose={setIsModalVisible} />
      {isModalVisible && <LogoutModal handleClose={setIsModalVisible} />}
    </Box>
  );
};
