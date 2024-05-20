import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CheckboxList } from "../CheckboxList";
import { AccordionLabel, Props } from "./Types";
import { t } from "i18next";
import { commonColors } from "../../../../common/commonColors";

export const GenericAccordion = ({ action, label, state, data }: Props) => {
  const PROP = state[label];

  const toggleEdit = (accordion: AccordionLabel) => {
    action((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };

  return (
    <Accordion disableGutters sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon sx={{ color: commonColors.accentColor }} />
        }
      >
        <Typography>{t(`pages.userPage.info.${label}`)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Button
          onClick={() => toggleEdit(label)}
          variant="outlined"
          color={PROP ? "info" : "primary"}
        >
          Edit
        </Button>
        <CheckboxList showCheckbox={PROP} data={data} />
      </AccordionDetails>
    </Accordion>
  );
};
