import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { HeaderCustomCell } from "../HeaderCustomCell";
import { HeadCells } from "../../types";
export const TableHeaderBuild = () => {
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );

  const headCells: readonly HeadCells[] = [
    {
      id: "userN",
      numeric: false,
      disablePadding: true,
      label: "N°",
      sorted: false,
      color: false,
    },
    {
      id: "userId",
      numeric: false,
      disablePadding: true,
      label: "ID",
      sorted: false,
      color: false,
    },
    {
      id: "lastName",
      numeric: false,
      disablePadding: true,
      label: "Last Name",
      sorted: true,
      color: false,
    },
    {
      id: "firstName",
      numeric: false,
      disablePadding: false,
      label: "First Name",
      sorted: false,
      color: false,
    },
    {
      id: "skillsList",
      numeric: true,
      disablePadding: false,
      label: "Skills list",
      sorted: false,
      color: false,
    },
    {
      id: "skillsRanking",
      numeric: true,
      disablePadding: false,
      label: "Ranking",
      sorted: true,
      sortingBE: "RANKING_",
      color: false,
    },
    {
      id: "anniEsperienza",
      numeric: true,
      disablePadding: false,
      label: "Experience Years",
      sorted: true,
      sortingBE: "EXP_",
      color: false,
    },
    {
      id: "educationList",
      numeric: false,
      disablePadding: false,
      label: "Education",
      sorted: true,
      sortingBE: "EDU_",
      color: false,
    },
    {
      id: "residenceInfo",
      numeric: false,
      disablePadding: false,
      label: "Address",
      sorted: true,
      sortingBE: "CITY_",
      color: false,
    },
    {
      id: "certificationList",
      numeric: false,
      disablePadding: false,
      label: "Certifications",
      sorted: false,
      color: false,
    },
  ];
  let visible: number;
  if (allSkillsFilter) {
    visible = allSkillsFilter.length;
  } else {
    visible = 0;
  }
  return (
    <TableHead sx={{ background: commonColors.accentColor }}>
      <TableRow>
        {headCells.map((headCell) => (
          <HeaderCustomCell headCell={headCell} visible={visible} />
        ))}
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            // inputProps={{
            //   "aria-label": "select all CVs",
            // }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
