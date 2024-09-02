import { useMemo } from "react";
import {
  Box,
  Button,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { PRIMARY_COLOR, commonColors } from "../../../../common/commonColors";
import { useDispatch, useSelector } from "react-redux";
import { HeaderCustomCell } from "../HeaderCustomCell";
import { Cancel, Download } from "@mui/icons-material";
import { HeadCellsData } from "./HeadCells";
import {
  checkboxManagerSelector,
  checkboxMarker,
} from "../../../../redux/checkboxSlice";
import { useTranslation } from "react-i18next";
import { skillsSelector } from "../../../../redux/skillsSlice";

export const TableHeaderBuild = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const skillsFilterStore = useSelector(skillsSelector);
  const checkboxState = useSelector(checkboxManagerSelector);

  const allSkillsFilter = useMemo(
    () =>
      skillsFilterStore?.skills.map(
        (skill) => `${skill.id};${skill.operator}${skill.level}`
      ) || [],
    [skillsFilterStore]
  );

  const visible = allSkillsFilter.length;

  const TOOLTIP_MESSAGE = `${checkboxState.length} ${
    checkboxState.length > 1
      ? t("pages.dashboard.headerTable.selectedElements")
      : t("pages.dashboard.headerTable.selectedElement")
  }`;

  const handleDeselectAll = () => {
    checkboxState.forEach((id) => {
      dispatch(checkboxMarker(id));
    });
  };

  return (
    <TableHead sx={{ background: commonColors.accentColor }}>
      <TableRow>
        {HeadCellsData().map((headCell) => (
          <HeaderCustomCell
            key={headCell.id}
            headCell={headCell}
            visible={visible}
          />
        ))}
        <TableCell sx={{ padding: "10px", width: "10px" }} align="center">
          <Tooltip
            title={
              <Box display="flex" alignItems="center">
                {TOOLTIP_MESSAGE}
                <Box ml={1}>
                  <Cancel
                    style={{ cursor: "pointer" }}
                    fontSize="small"
                    onClick={handleDeselectAll}
                  />
                </Box>
              </Box>
            }
            arrow
            placement="top"
            open={checkboxState.length > 0}
          >
            <Button
              sx={{
                backgroundColor: "white",
                color: PRIMARY_COLOR,
                boxShadow: "none",
              }}
              onClick={handleDeselectAll}
              variant="contained"
            >
              <Download />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
