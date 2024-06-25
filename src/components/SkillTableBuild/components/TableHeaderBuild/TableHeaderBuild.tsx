import { Button, TableCell, TableHead, TableRow } from "@mui/material";
import { NEXTRE_ENG, commonColors } from "../../../../common/commonColors";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { HeaderCustomCell } from "../HeaderCustomCell";
import { Download } from "@mui/icons-material";
import { HeadCellsData } from "./HeadCells";
import { checkboxMarker } from "../../../../redux/checkboxSlice";

export const TableHeaderBuild = () => {
  const dispatch = useDispatch();

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
          <Button
            sx={{
              backgroundColor: "white",
              color: NEXTRE_ENG,
              boxShadow: "none",
            }}
            onClick={handleDeselectAll}
            variant="contained"
          >
            <Download />
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
