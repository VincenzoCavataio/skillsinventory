import { TableHead, TableRow } from "@mui/material";
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
    },
    {
      id: "userId",
      numeric: false,
      disablePadding: true,
      label: "ID",
      sorted: false,
    },
    {
      id: "lastName",
      numeric: false,
      disablePadding: true,
      label: "Last Name",
      sorted: true,
    },
    {
      id: "firstName",
      numeric: false,
      disablePadding: false,
      label: "First Name",
      sorted: true,
    },
    {
      id: "skillsList",
      numeric: true,
      disablePadding: false,
      label: "Skills list",
      sorted: false,
    },
    {
      id: "skillsRanking",
      numeric: true,
      disablePadding: false,
      label: "Ranking",
      sorted: true,
    },
    {
      id: "anniEsperienza",
      numeric: true,
      disablePadding: false,
      label: "Experience Years",
      sorted: true,
    },
    {
      id: "educationList",
      numeric: false,
      disablePadding: false,
      label: "Education",
      sorted: true,
    },
    {
      id: "residenceInfo",
      numeric: false,
      disablePadding: false,
      label: "Address",
      sorted: true,
    },
    {
      id: "certificationList",
      numeric: false,
      disablePadding: false,
      label: "Certifications",
      sorted: true,
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
      </TableRow>
    </TableHead>
  );
};
