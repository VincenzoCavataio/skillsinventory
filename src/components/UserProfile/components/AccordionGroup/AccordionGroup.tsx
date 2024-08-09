import { useState } from "react";
import { Box } from "@mui/material";
import { GenericAccordion } from "../GenericAccordion";
import { useSelector } from "react-redux";
import { ReduxStore, UserSkill } from "../../../../redux/types";
import { State, StateDelete } from "../GenericAccordion/Types";

/** Wrapper for all the accordions in profile page */
export const AccordionGroup = () => {
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  const [accordionStates, setAccordionStates] = useState<State>({
    hardSkills: false,
    education: false,
    certificates: false,
  });
  const [accordionDeleteStates, setAccordionDeleteStates] =
    useState<StateDelete>({
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
        actionDelete={setAccordionDeleteStates}
        label="hardSkills"
        state={accordionStates}
        stateDelete={accordionDeleteStates}
        data={dataAccordions.skillList}
      />
      <GenericAccordion
        action={setAccordionStates}
        actionDelete={setAccordionDeleteStates}
        label="education"
        state={accordionStates}
        stateDelete={accordionDeleteStates}
        data={dataAccordions.educationList}
      />
      <GenericAccordion
        action={setAccordionStates}
        actionDelete={setAccordionDeleteStates}
        label="certificates"
        state={accordionStates}
        stateDelete={accordionDeleteStates}
        data={dataAccordions.certificationList}
      />
    </Box>
  );
};
