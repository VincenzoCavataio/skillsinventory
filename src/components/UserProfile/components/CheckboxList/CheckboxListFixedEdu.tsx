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
  checkboxEdusSelector,
  resetCheckedEdus,
  updateCheckedEdus,
} from "../../../../redux/checkboxEdusSelection";
import { CustomListItemButton } from "./CustomCheckbox";
import { currentCheckedEduRow } from "./utils/currentCheckedRow";
import { CheckedEdu } from "../../../../redux/types";
import { Close, Delete, Edit } from "@mui/icons-material";
import { AccordionLabel } from "../GenericAccordion/Types";
import { SelectDeselectLabelEdu } from "./utils/SelectDeselectLabelEdu";

type CheckboxListProps = {
  data?: string[];
  label: AccordionLabel;
  isEdit: boolean;
  toggleEdit?: (accordion: AccordionLabel) => void;
};

/** Component to render skills Checkboxes */
export const CheckboxListFixedEdu: React.FC<CheckboxListProps> = ({
  data,
  label,
  isEdit,
  toggleEdit,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const checkedEduStore = useSelector(checkboxEdusSelector);
  const allChecked = checkedEduStore.length > 0;

  const handleSelectAll = () => {
    data?.forEach((edu) =>
      dispatch(updateCheckedEdus(currentCheckedEduRow(edu)))
    );
  };

  const handleRemoveAll = () => {
    dispatch(resetCheckedEdus());
  };

  const handleEduRowChange = (edu: CheckedEdu) => {
    dispatch(updateCheckedEdus(edu));
  };

  const parsedData = data?.map((edu) => currentCheckedEduRow(edu));

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
            <SelectDeselectLabelEdu
              allChecked={allChecked}
              checkedEdusStore={checkedEduStore}
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

      {parsedData?.map((edu) => {
        const IDs = [...checkedEduStore.map((edu) => edu.id)];
        const isChecked = IDs.includes(edu.id);
        const { course, level, institute, city } = edu;
        const ROW_TO_BE_SHOWN = (
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Typography ml={1}>
                {level} - {course}
              </Typography>
              <Box display="flex" justifyContent="flex-start" ml={1}>
                <Typography variant="caption">
                  {institute} - {city}
                </Typography>
              </Box>
            </Box>
          </Box>
        );

        return (
          <ListItem key={edu.id} disablePadding>
            <CustomListItemButton
              dense
              disabled={!isEdit}
              onClick={() => handleEduRowChange(edu)}
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
