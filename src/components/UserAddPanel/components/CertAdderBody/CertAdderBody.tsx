import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { CertRowType } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { ShortDatePicker, ShortTextField } from "../../style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GenericDelete } from "../GenericDelete";

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
              <Checkbox sx={{ padding: 0 }} />
            </TableCell>
            <TableCell align="center">
              <GenericDelete handleRemove={handleRemoveRow} row={row} />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
