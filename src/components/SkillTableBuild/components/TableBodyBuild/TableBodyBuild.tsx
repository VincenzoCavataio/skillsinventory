import { Checkbox, Chip, TableBody, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../../constants";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableData } from "../../types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  rows: TableData[];
  // checked: TableData;
  // setChecked: Dispatch<SetStateAction<TableData[]>>;
};
export const TableBodyBuild = ({ rows }: Props) => {
  // const handleClick = (row: TableData) => {
  //   // if (checked.includes(row))
  //   if (checked.some((item) => item.userId === row.userId)) {
  //     setChecked(checked.filter((item) => item.userId !== row.userId));
  //     console.log(checked);
  //   } else {
  //     setChecked([...checked, row]);
  //     console.log(checked);
  //   }
  // };
  const navigate = useNavigate();
  const { userPage } = PAGES;
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const paginationFilterPage = paginationFilterStore?.pageStart ?? 0;
  const paginationFilterNumber = paginationFilterStore?.itemNumber ?? 0;
  const allSkillsFilter =
    skillsFilterStore?.skills.map(
      (skill) => `${skill.id};${skill.operator}${skill.level}`
    ) ?? [];

  return (
    <TableBody>
      {rows &&
        rows.length > 0 &&
        rows?.map((row: TableData, index: number) => (
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
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                // checked={checked.includes(row)}
                // onClick={() => handleClick(row)}
                // onClick={(event) => handleClick(event, row)}
                // checked={isItemSelected}
                // inputProps={{
                //   'aria-labelledby': labelId,
                // }}
              />
            </TableCell>
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
