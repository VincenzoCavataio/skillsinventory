import { useState } from "react";
import { Box } from "@mui/material";
import { GenericAccordion } from "../GenericAccordion";
import { useSelector } from "react-redux";
import { ReduxStore, UserSkill } from "../../../../redux/types";

export const AccordionGroup = () => {
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  const [accordionStates, setAccordionStates] = useState({
    hardSkills: false,
    education: false,
    certificates: false,
  });
  const dataAccordions: UserSkill = {
    skillList: userData?.user_skill?.skillList,
    educationList: userData?.user_skill?.educationList,
    certificationList: userData?.user_skill?.certificationList,
  };

  return (
    <Box width="100%">
      <GenericAccordion
        action={setAccordionStates}
        label="hardSkills"
        state={accordionStates}
        data={dataAccordions.skillList}
      />
      <GenericAccordion
        action={setAccordionStates}
        label="education"
        state={accordionStates}
        data={dataAccordions.educationList}
      />
      <GenericAccordion
        action={setAccordionStates}
        label="certificates"
        state={accordionStates}
        data={dataAccordions.certificationList}
      />
    </Box>
  );
};
