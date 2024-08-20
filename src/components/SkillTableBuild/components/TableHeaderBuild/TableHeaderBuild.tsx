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
import { ReduxStore } from "../../../../redux/types";
import { HeaderCustomCell } from "../HeaderCustomCell";
import { Delete, Download } from "@mui/icons-material";
import { HeadCellsData } from "./HeadCells";
import { checkboxMarker } from "../../../../redux/checkboxSlice";
import { useTranslation } from "react-i18next";

export const TableHeaderBuild = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  const checkboxState = useSelector(
    (state: ReduxStore) => state.checkboxManager
  );

  let visible: number;
  const handleDeselectAll = () => {
    checkboxState.forEach((id) => {
      dispatch(checkboxMarker(id));
    });
  };
  if (allSkillsFilter) {
    visible = allSkillsFilter.length;
  } else {
    visible = 0;
  }

  const TOOLTIP_MESSAGE =
    checkboxState.length > 1
      ? `${checkboxState.length} ${t(
          "pages.dashboard.headerTable.selectedElements"
        )}`
      : `${checkboxState.length} ${t(
          "pages.dashboard.headerTable.selectedElement"
        )}`;

  return (
    <TableHead sx={{ background: commonColors.gray }}>
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
                  <Delete
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
              variant="outlined"
            >
              <Download />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
