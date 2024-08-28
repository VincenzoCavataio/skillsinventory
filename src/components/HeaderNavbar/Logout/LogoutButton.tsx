import { Logout } from "@mui/icons-material";
import { commonColors } from "../../../common/commonColors";
import { FC } from "react";

type Props = {
  handleClose: (value: boolean) => void;
};

/** Logout button with icon */
export const LogoutButton: FC<Props> = ({ handleClose }) => {
  return (
    <Logout
      sx={{
        cursor: "pointer",
        "&:hover": {
          fill: commonColors.error,
        },
      }}
      onClick={() => handleClose(true)}
    />
  );
};
