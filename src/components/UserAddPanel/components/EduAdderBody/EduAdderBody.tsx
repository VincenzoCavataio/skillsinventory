import { Dispatch, SetStateAction } from "react";
import { EduRowType } from "../../types";
import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortAutocomplete, ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";

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
                sx={{ width: 187 }}
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
