import { useState } from "react";
import { Box } from "@mui/material";
import { GenericAccordion } from "../GenericAccordion";

export const AccordionGroup = () => {
  const [accordionStates, setAccordionStates] = useState({
    hardSkills: false,
    education: false,
    certificates: false,
  });

  return (
    <Box width="100%">
      <GenericAccordion
        action={setAccordionStates}
        label="hardSkills"
        state={accordionStates}
      />
      <GenericAccordion
        action={setAccordionStates}
        label="education"
        state={accordionStates}
      />
      <GenericAccordion
        action={setAccordionStates}
        label="certificates"
        state={accordionStates}
      />
    </Box>
  );
};
