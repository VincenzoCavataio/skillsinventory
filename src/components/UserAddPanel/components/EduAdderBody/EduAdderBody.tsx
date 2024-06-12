import { Dispatch, SetStateAction } from "react";
import { EduRowType } from "../../types";
import {
  Autocomplete,
  Button,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { ShortAutocomplete, ShortTextField } from "../../style";

type EduTableBodyBuildProps = {
  rows: EduRowType[];
  setRowsEduTable: Dispatch<SetStateAction<EduRowType[]>>;
};
export const EduAdderBody: React.FC<EduTableBodyBuildProps> = ({
  rows,
  setRowsEduTable,
}) => {
  const handleRemoveRow = (id: number) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRowsEduTable(newRows);
  };
  const options = [
    { label: "Diploma superiore" },
    { label: "Bachelor" },
    { label: "Master" },
  ];
  return (
    <TableBody>
      {rows &&
        rows.length > 0 &&
        rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <ShortAutocomplete
                disablePortal
                options={options}
                sx={{ width: 150 }}
                renderInput={(params) => <ShortTextField {...params} />}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <Checkbox />
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <Button
                sx={{ width: "2px", height: "10px" }}
                onClick={() => handleRemoveRow(row.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  color="#d1473d"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
