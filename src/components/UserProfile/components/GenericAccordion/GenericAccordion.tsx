import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CheckboxListFixed } from "../CheckboxList";
import { AccordionLabel, Props } from "./Types";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import StyledAccordionDetails from "../../StyledAccordionDetails";

export const GenericAccordion = ({ action, label, state, data }: Props) => {
  const isEdit = state[label];
  const toggleEdit = (accordion: AccordionLabel) => {
    action((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };

  const { t } = useTranslation();
  console.log({ data, isEdit });
  return (
    <Accordion disableGutters sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon sx={{ color: commonColors.accentColor }} />
        }
      >
        <Typography>{t(`pages.userPage.info.${label}`)}</Typography>
      </AccordionSummary>
      <StyledAccordionDetails>
        <Box width="100%" mb={2} position="relative">
          <CheckboxListFixed
            data={data}
            label={label}
            isEdit={isEdit}
            toggleEdit={toggleEdit}
          />
        </Box>
      </StyledAccordionDetails>
    </Accordion>
  );
};
