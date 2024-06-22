import { Box } from "@mui/material";
import { WrapperHeader } from "../WrapperHeader";
import { AccordionGroup } from "../../../AccordionGroup";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../../../redux/types";

export const Wrapper = () => {
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  const namePosition: { fullName: string; position: string } = {
    fullName: `${userData?.firstName ?? ""}` + ` ${userData?.lastName ?? ""}`,
    position: "gestione posizione?",
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <WrapperHeader
        title={namePosition.position}
        fullName={namePosition.fullName}
        gender={userData?.gender}
        alt="User Name"
      />
      <AccordionGroup />
    </Box>
  );
};
