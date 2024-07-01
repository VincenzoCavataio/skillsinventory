import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CheckboxList } from "../CheckboxList";
import { AccordionLabel, Props } from "./Types";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import StyledAccordionDetails from "../../StyledAccordionDetails";

export const GenericAccordion = ({
  action,
  actionDelete,
  label,
  state,
  stateDelete,
  data,
}: Props) => {
  const PROP = state[label];
  const DEL = stateDelete[label];
  const toggleEdit = (accordion: AccordionLabel) => {
    action((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };
  const toggleCancel = (accordion: AccordionLabel) => {
    actionDelete((prevState) => ({
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
        <Box display="flex" flexDirection="row" gap={2}>
          <Button
            onClick={() => toggleEdit(label)}
            size="small"
            variant="outlined"
            color={PROP ? "info" : "primary"}
          >
            {t(`pages.userPage.info.edit`)}
          </Button>
          <Button
            onClick={() => toggleCancel(label)}
            size="small"
            variant="outlined"
            color={DEL ? "warning" : "error"}
          >
            {t(`pages.userPage.info.delete`)}
          </Button>
        </Box>
        {PROP && !DEL && <CheckboxList showCheckbox={true} data={data} />}
        {DEL && !PROP && <CheckboxList showCheckbox={true} data={data} />}
        {!PROP && !DEL && <CheckboxList showCheckbox={false} data={data} />}
        {/* <CheckboxList showCheckbox={PROP || DEL} data={data} /> */}
      </StyledAccordionDetails>
    </Accordion>
  );
};
