import { TableCell, TableHead, TableRow } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { tableHeaderStyle } from "../../style";

export const TableHeaderBuild = () => {
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  return (
    <TableHead sx={{ background: commonColors.accentColor }}>
      <TableRow>
        <TableCell
          sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
        >
          ID
        </TableCell>
        <TableCell
          sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
          align="right"
        >
          Last Name
        </TableCell>
        <TableCell
          sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
          align="right"
        >
          First Name
        </TableCell>
        {allSkillsFilter.length > 0 && (
          <>
            <TableCell
              sx={[tableHeaderStyle, { width: 70, color: commonColors.white }]}
              align="right"
            >
              Skills
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              Ranking
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              Years of Experience
            </TableCell>
          </>
        )}
        <TableCell
          sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
          align="right"
        >
          Education
        </TableCell>
        <TableCell
          sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
          align="right"
        >
          Address
        </TableCell>
        <TableCell
          sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
          align="right"
        >
          Certification
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
