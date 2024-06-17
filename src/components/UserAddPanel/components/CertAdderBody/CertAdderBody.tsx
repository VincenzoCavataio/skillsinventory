import {
  Button,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { CertRowType } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { ShortDatePicker, ShortTextField } from "../../style";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

type CertTableBodyBuildProps = {
  rows: CertRowType[];
  setRowsCertTable: Dispatch<SetStateAction<CertRowType[]>>;
};
export const CertAdderBody: React.FC<CertTableBodyBuildProps> = ({
  rows,
  setRowsCertTable,
}) => {
  const handleRemoveRow = (id: number) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRowsCertTable(newRows);
  };

  return (
    <TableBody>
      {rows &&
        rows.length > 0 &&
        rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ShortDatePicker />
              </LocalizationProvider>
            </TableCell>
            <TableCell align="center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ShortDatePicker />
              </LocalizationProvider>
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <Checkbox />
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
