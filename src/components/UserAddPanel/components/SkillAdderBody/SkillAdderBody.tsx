import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxSkillsSelector,
  removeSkill,
} from "../../../../redux/checkboxSkillsSelection";
import { CheckedSkill } from "../../../../redux/types";
import {
  removeSkillToBeSent,
  updateSkillExp,
  updateSkillLevel,
  updateSkillName,
  updateSkillNote,
} from "../../../../redux/addSkillToBeSentSlice";

/** Component to render the body of the skill adder table, allowing users to input skill details and handle updates and deletions. */
export const SkillAdderBody = () => {
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);

  const dispatch = useDispatch();

  /** Updates the name field of a specific skill entry. */
  const handleUpdateSkillName = (
    id: string,
    idTemp: number | undefined,
    name: string
  ) => {
    dispatch(updateSkillName({ id, idTemp, name }));
  };

  /** Updates the level field of a specific skill entry. */
  const handleUpdateSkillLevel = (
    id: string,
    idTemp: number | undefined,
    level: string
  ) => {
    dispatch(updateSkillLevel({ id, idTemp, level }));
  };

  /** Updates the experience field of a specific skill entry. */
  const handleUpdateSkillExp = (
    id: string,
    idTemp: number | undefined,
    exp: string
  ) => {
    dispatch(updateSkillExp({ id, idTemp, exp }));
  };

  /**  Updates the note field of a specific skill entry. */
  const handleUpdateSkillNote = (
    id: string,
    idTemp: number | undefined,
    note: string
  ) => {
    dispatch(updateSkillNote({ id, idTemp, note }));
  };

  /** Removes a skill row from both the checked list and the to-be-sent list. */
  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeSkill({ id, idTemp }));
    dispatch(removeSkillToBeSent({ id, idTemp }));
  };

  /** Maps the skill name input to a `ShortTextField` component if the name is empty; otherwise, it returns a disabled `ShortTextField`. */
  const mappingSection = (row: CheckedSkill) => {
    if (row.name === "") {
      return (
        <ShortTextField
          defaultValue={row.name}
          onChange={(e) =>
            handleUpdateSkillName(row.id, row.idTemp, e.target.value)
          }
        />
      );
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
              onChange={(e) =>
                handleUpdateSkillLevel(row.id, row.idTemp, e.target.value)
              }
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              type="number"
              inputProps={{ min: 1 }}
              defaultValue={row.exp}
              onChange={(e) =>
                handleUpdateSkillExp(row.id, row.idTemp, e.target.value)
              }
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.note}
              onChange={(e) =>
                handleUpdateSkillNote(row.id, row.idTemp, e.target.value)
              }
            />
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
