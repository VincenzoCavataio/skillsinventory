import { Box } from "@mui/material";
import { WrapperHeader } from "../WrapperHeader";
import { AccordionGroup } from "../../../AccordionGroup";
import { MOCK_USER_DATA } from "../../../../../../constants";

export const Wrapper = () => {
  const { fullName, position } = MOCK_USER_DATA.generic;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <WrapperHeader title={position} fullName={fullName} alt="User Name" />
      <AccordionGroup />
    </Box>
  );
};
