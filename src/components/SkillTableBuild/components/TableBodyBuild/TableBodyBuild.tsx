import { Chip, TableBody, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../../constants";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";

export const TableBodyBuild = ({ rows }) => {
  const navigate = useNavigate();
  const { userPage } = PAGES;
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  return (
    <TableBody>
      {rows &&
        rows.length > 0 &&
        rows?.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell align="center" component="th" scope="row">
              <Chip
                label={row.userId}
                onClick={() => navigate(`${userPage}/${row.userId}`)}
              />
            </TableCell>
            <TableCell align="center">{row.lastName}</TableCell>
            <TableCell align="center">{row.firstName}</TableCell>
            {allSkillsFilter.length > 0 && (
              <>
                <TableCell align="center">
                  {row?.skillsList?.join(", ")}
                </TableCell>

                <TableCell align="center">{row.skillsRanking}</TableCell>
                <TableCell align="center">{row.anniEsperienza}</TableCell>
              </>
            )}
            <TableCell align="center">{row.educationList}</TableCell>
            <TableCell align="center">{row.residenceInfo}</TableCell>
            <TableCell align="center">{row.certificationList}</TableCell>
          </TableRow>
        ))}
      {rows?.length === 0 && (
        <TableRow>
          <TableCell align="center" component="th" scope="row">
            Nessun risultato
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
