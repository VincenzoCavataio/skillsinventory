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
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import StyledAccordionDetails from "../../StyledAccordionDetails";

export const GenericAccordion = ({ action, label, state, data }: Props) => {
  const PROP = state[label];

  const toggleEdit = (accordion: AccordionLabel) => {
    action((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };
  const { t } = useTranslation();
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
        <Button
          onClick={() => toggleEdit(label)}
          size="small"
          variant="outlined"
          color={PROP ? "info" : "primary"}
        >
          {t(`pages.userPage.info.edit`)}
        </Button>
        <CheckboxList showCheckbox={PROP} data={data} />
      </StyledAccordionDetails>
    </Accordion>
  );
};
