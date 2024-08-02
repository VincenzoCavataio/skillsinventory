import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxSkillsSelector,
  removeSkill,
} from "../../../../redux/checkboxSkillsSelection";

export const SkillAdderBody = () => {
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);

  const dispatch = useDispatch();
  const handleRemoveRow = (id: string) => {
    dispatch(removeSkill(id));
  };

  return (
    <TableBody>
      {checkedSkillsFromStore.map((row) => (
        <TableRow key={row.id}>
          <TableCell align="center">
            <Tooltip title={row.name} placement="left" arrow>
              <ShortTextField defaultValue={row.name} disabled />
            </Tooltip>
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              type="number"
              inputProps={{ min: 1, max: 5 }}
              defaultValue={row.level}
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              type="number"
              inputProps={{ min: 1 }}
              defaultValue={row.exp}
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.note} />
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
