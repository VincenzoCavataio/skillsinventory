import { Checkbox, Chip, TableBody, TableCell, TableRow } from "@mui/material";
import { PAGES } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { checkboxMarker } from "../../../../redux/checkboxSlice";
import { TableDataData } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  rows?: TableDataData[];
};

export const TableBodyBuild: React.FC<Props> = ({ rows }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const checkboxState = useSelector(
    (state: ReduxStore) => state.checkboxManager
  );

  const { userPage } = PAGES;
  const paginationFilterPage = paginationFilterStore?.pageStart ?? 0;
  const paginationFilterNumber = paginationFilterStore?.itemNumber ?? 0;
  const allSkillsFilter =
    skillsFilterStore?.skills.map(
      (skill) => `${skill.id};${skill.operator}${skill.level}`
    ) ?? [];

  const handleCheckboxChange = (id: number | undefined) => {
    dispatch(checkboxMarker(id));
  };

  return (
    <TableBody>
      {rows &&
        rows.length > 0 &&
        rows?.map((row: TableDataData, index: number) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell align="center" component="th" scope="row">
              {index + 1 + (paginationFilterPage - 1) * paginationFilterNumber}
            </TableCell>
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
            <TableCell padding="checkbox" align="center">
              <Checkbox
                color="primary"
                onChange={() => handleCheckboxChange(parseInt(row.userId))}
                checked={checkboxState.includes(parseInt(row.userId))}
              />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
