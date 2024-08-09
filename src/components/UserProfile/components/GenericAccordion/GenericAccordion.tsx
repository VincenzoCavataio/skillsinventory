import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CheckboxListFixed } from "../CheckboxList";
import { AccordionLabel, Props } from "./Types";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import StyledAccordionDetails from "../../StyledAccordionDetails";
import { CheckboxListFixedEdu } from "../CheckboxList/CheckboxListFixedEdu";
import { CheckboxListFixedCert } from "../CheckboxList/CheckboxListFixedCert";
import SearchOffIcon from "@mui/icons-material/SearchOff";

/** Generic Accordion used to wrap elements in profile page */
export const GenericAccordion = ({ action, label, state, data }: Props) => {
  const { t } = useTranslation();
  const isEdit = state[label];

  const toggleEdit = (accordion: AccordionLabel) => {
    action((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };
  const mappingSection = {
    hardSkills: (
      <CheckboxListFixed
        data={data}
        label={label}
        isEdit={isEdit}
        toggleEdit={toggleEdit}
      />
    ),

    education: (
      <CheckboxListFixedEdu
        data={data}
        label={label}
        isEdit={isEdit}
        toggleEdit={toggleEdit}
      />
    ),

    certificates: (
      <CheckboxListFixedCert
        data={data}
        label={label}
        isEdit={isEdit}
        toggleEdit={toggleEdit}
      />
    ),
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
      <StyledAccordionDetails>
        <Box width="100%" mb={2} position="relative">
          {!data?.length ? (
            <Box
              display="flex"
              ml={2}
              alignContent="center"
              alignItems="center"
            >
              <SearchOffIcon sx={{ mr: 1, color: commonColors.gray }} />
              <Typography variant="subtitle2" fontSize={13}>
                {t(`pages.userPage.info.notFound.${label}`)}
              </Typography>
            </Box>
          ) : (
            mappingSection[label]
          )}
        </Box>
      </StyledAccordionDetails>
    </Accordion>
  );
};
