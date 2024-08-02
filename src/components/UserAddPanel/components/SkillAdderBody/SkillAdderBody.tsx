import { TableBody, TableCell, TableRow } from "@mui/material";

import { ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  removeSkillRowData,
  updateSkillRowsNumber,
} from "../../../../redux/adderSlice";

export const SkillAdderBody = () => {
  const skillStore = useSelector((state: ReduxStore) => state.rowsManager);
  const dispatch = useDispatch();
  const handleRemoveRow = (id: number) => {
    dispatch(removeSkillRowData(id));
    dispatch(updateSkillRowsNumber(skillStore.skillRows - 1));
  };

  return (
    <TableBody>
      {skillStore.skillRowsData &&
        skillStore.skillRowsData.length > 0 &&
        skillStore.skillRowsData.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <ShortTextField defaultValue={row.nameTxtField} />
            </TableCell>
            <TableCell align="center">
              <ShortTextField
                type="number"
                inputProps={{ min: 1, max: 5 }}
                defaultValue={row.levelInput}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField
                type="number"
                inputProps={{ min: 1 }}
                defaultValue={row.expInput}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField defaultValue={row.noteTxtField} />
            </TableCell>
            <TableCell align="center">
              <GenericDelete
                handleRemove={() => handleRemoveRow(row.id)}
                row={row}
              />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
