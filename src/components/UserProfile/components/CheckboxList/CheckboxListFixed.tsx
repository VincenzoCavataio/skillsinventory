import {
  Box,
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxSkillsSelector,
  resetCheckedSkills,
  updateCheckedSkills,
} from "../../../../redux/checkboxSkillsSelection";
import { CustomListItemButton } from "./CustomCheckbox";
import { currentCheckedSkillRow } from "./utils/currentCheckedRow";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { CheckedSkill } from "../../../../redux/types";
import { Close, Delete, Edit } from "@mui/icons-material";
import { AccordionLabel } from "../GenericAccordion/Types";
import { IconPicker } from "./utils/IconPicker";
import { SelectDeselectLabel } from "./utils/SelectDeselectLabel";
import {
  resetCheckedSkillsDb,
  updateCheckedSkillsDb,
} from "../../../../redux/addSkillToDbSlice";

type CheckboxListProps = {
  data?: string[];
  label: AccordionLabel;
  isEdit: boolean;
  toggleEdit?: (accordion: AccordionLabel) => void;
};

/** Component to render skills Checkboxes */
export const CheckboxListFixed: React.FC<CheckboxListProps> = ({
  data,
  label,
  isEdit,
  toggleEdit,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const checkedSkillsStore = useSelector(checkboxSkillsSelector);
  const allChecked = checkedSkillsStore.length > 0;

  const handleSelectAll = () => {
    data?.forEach((skill) => {
      dispatch(updateCheckedSkills(currentCheckedSkillRow(skill)));
      dispatch(updateCheckedSkillsDb(currentCheckedSkillRow(skill)));
    });
  };

  const handleRemoveAll = () => {
    dispatch(resetCheckedSkills());
    dispatch(resetCheckedSkillsDb());
  };

  const handleSkillRowChange = (skill: CheckedSkill) => {
    dispatch(updateCheckedSkills(skill));
    dispatch(updateCheckedSkillsDb(skill));
  };

  const parsedData = data?.map((skill) => currentCheckedSkillRow(skill));

  return (
    <Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: !isEdit ? "flex-end" : "space-between",
          position: "sticky",
          top: 0,
          bgcolor: "white",
          zIndex: 9999,
          py: "2px",
          width: "100%",
        }}
      >
        {isEdit && (
          <Button
            onClick={allChecked ? handleRemoveAll : handleSelectAll}
            sx={{ pl: 2 }}
          >
            <SelectDeselectLabel
              allChecked={allChecked}
              checkedSkillsStore={checkedSkillsStore}
            />
          </Button>
        )}
        <Tooltip
          title={
            isEdit
              ? t("pages.userPage.info.exitFromEditMode")
              : t("pages.userPage.info.goToEditMode")
          }
          placement="top"
          arrow
        >
          <Box>
            {!isEdit ? (
              <Edit
                onClick={() => toggleEdit && toggleEdit(label)}
                sx={{ cursor: "pointer" }}
              />
            ) : (
              <Close
                onClick={() => toggleEdit && toggleEdit(label)}
                sx={{ cursor: "pointer" }}
              />
            )}
          </Box>
        </Tooltip>
      </Box>

      {parsedData?.map((skill) => {
        const IDs = [...checkedSkillsStore.map((skill) => skill.id)];
        const isChecked = IDs.includes(skill.id);
        const { name, level, exp, note } = skill;

        const ROW_TO_BE_SHOWN = (
          <Box display="flex">
            <Box alignContent="center" px={1}>
              <Box style={{ transform: "scale(1.5)" }} mr={1}>
                {IconPicker(skill.name)}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography ml={1}>{name}</Typography>
              <Box display="flex" justifyContent="flex-start" ml={1}>
                <Typography variant="caption">
                  {t("pages.userPage.info.level")}: {level}
                </Typography>
                <Typography sx={{ mx: 1 }} variant="caption">
                  -
                </Typography>

                <Typography variant="caption">
                  {t("pages.userPage.info.exp")}: {exp}
                </Typography>
                {note && (
                  <Tooltip
                    title={<Typography variant="overline">{note}</Typography>}
                    arrow
                    placement="top"
                  >
                    <AssignmentIcon
                      sx={{ ml: 1, mt: -0.25 }}
                      fontSize="small"
                    />
                  </Tooltip>
                )}
              </Box>
            </Box>
          </Box>
        );

        return (
          <ListItem key={skill.id} disablePadding>
            <CustomListItemButton
              dense
              disabled={!isEdit}
              onClick={() => handleSkillRowChange(skill)}
            >
              {isEdit && (
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemText primary={ROW_TO_BE_SHOWN} />
            </CustomListItemButton>
            {isEdit && (
              <Delete
                color="error"
                sx={{ opacity: 0.8, cursor: "pointer", zIndex: 99, pl: 2 }}
                onClick={alert}
              />
            )}
          </ListItem>
        );
      })}
    </Box>
  );
};
