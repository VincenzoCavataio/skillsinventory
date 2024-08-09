import { Box } from "@mui/material";
import { WrapperHeader } from "../WrapperHeader";
import { AccordionGroup } from "../../../AccordionGroup";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../../../redux/types";
import { HIDDEN } from "../../../../../../constants";

type NAME_AND_POSITION_TYPE = {
  fullName: string;
  position: string;
  gender: string;
};

export const ProfileCardWrapper = () => {
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  const isHidden =
    userData?.lastName === HIDDEN && userData?.firstName === HIDDEN;

  const POSITION = "_PLACEHOLDER_";

  const NAME_AND_POSITION: NAME_AND_POSITION_TYPE = isHidden
    ? {
        fullName: `USER ${userData?.id ?? ""}`,
        position: POSITION,
        gender: userData?.gender ?? "",
      }
    : {
        fullName:
          `${userData?.firstName ?? ""}` + ` ${userData?.lastName ?? ""}`,
        position: POSITION,
        gender: userData?.gender ?? "",
      };

  const { position, fullName, gender } = NAME_AND_POSITION;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <WrapperHeader
        id={userData?.id}
        title={position}
        fullName={fullName}
        gender={gender}
        alt="User Name"
      />
      <AccordionGroup />
    </Box>
  );
};
