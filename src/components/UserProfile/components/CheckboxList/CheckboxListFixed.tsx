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
  console.log({ data, isEdit });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const checkedSkillsStore = useSelector(checkboxSkillsSelector);
  const allChecked = checkedSkillsStore.length > 0;

  const handleSelectAll = () => {
    data?.forEach((skill) =>
      dispatch(updateCheckedSkills(currentCheckedSkillRow(skill)))
    );
  };

  const handleRemoveAll = () => {
    dispatch(resetCheckedSkills());
  };

  const handleSkillRowChange = (skill: CheckedSkill) => {
    dispatch(updateCheckedSkills(skill));
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
            {allChecked
              ? t(`pages.userPage.info.removeAll`)
              : t(`pages.userPage.info.selectAll`)}
          </Button>
        )}
        {!isEdit ? (
          <Tooltip title="Entra in Edit Mode" placement="top" arrow>
            <Edit
              onClick={() => toggleEdit && toggleEdit(label)}
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Esci da Edit Mode" placement="top" arrow>
            <Close
              onClick={() => toggleEdit && toggleEdit(label)}
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        )}
      </Box>

      {parsedData?.map((skill) => {
        const IDs = [...checkedSkillsStore.map((skill) => skill.id)];
        const isChecked = IDs.includes(skill.id);
        const { name, level, exp, note } = skill;
        const ROW_TO_BE_SHOWN = (
          <Box>
            <Typography>{name}</Typography>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="caption">Level: {level}</Typography>
              <Typography sx={{ mx: 1 }} variant="caption">
                -
              </Typography>

              <Typography variant="caption">Exp: {exp}</Typography>
              {note && (
                <Tooltip
                  title={<Typography variant="overline">{note}</Typography>}
                  arrow
                  placement="top"
                >
                  <AssignmentIcon sx={{ ml: 1, mt: -0.25 }} fontSize="small" />
                </Tooltip>
              )}
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
