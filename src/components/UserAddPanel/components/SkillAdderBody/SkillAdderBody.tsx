import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxSkillsSelector,
  removeSkill,
} from "../../../../redux/checkboxSkillsSelection";
import { CheckedSkill } from "../../../../redux/types";

export const SkillAdderBody = () => {
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);

  const dispatch = useDispatch();

  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeSkill({ id, idTemp }));
  };
  const mappingSection = (row: CheckedSkill) => {
    if (row.name === "") {
      return <ShortTextField defaultValue={row.name} />;
    } else {
      return <ShortTextField defaultValue={row.name} disabled />;
    }
  };
  return (
    <TableBody>
      {checkedSkillsFromStore.map((row) => (
        <TableRow key={row.idTemp !== undefined ? row.idTemp : row.id}>
          <TableCell align="center">
            <Tooltip title={row.name} placement="left" arrow>
              {/* <ShortTextField defaultValue={row.name} disabled />  */}
              {mappingSection(row)}
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
              handleRemove={() => handleRemoveRow(row.id, row.idTemp)}
              row={row}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
