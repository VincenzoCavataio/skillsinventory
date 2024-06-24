import { TableBody, TableCell, TableRow } from "@mui/material";
import { SkillRowType } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";

type SkillTableBodyBuildProps = {
  rows: SkillRowType[];
  setRowsSkillTable: Dispatch<SetStateAction<SkillRowType[]>>;
};
export const SkillAdderBody: React.FC<SkillTableBodyBuildProps> = ({
  rows,
  setRowsSkillTable,
}) => {
  const handleRemoveRow = (id: number) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRowsSkillTable(newRows);
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
              <ShortTextField
                type="number"
                inputProps={{ min: 1, max: 5 }}
                defaultValue={1}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField
                type="number"
                inputProps={{ min: 1 }}
                defaultValue={1}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField />
            </TableCell>
            <TableCell align="center">
              <GenericDelete handleRemove={handleRemoveRow} row={row} />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
