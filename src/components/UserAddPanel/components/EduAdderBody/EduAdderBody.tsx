import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortAutocomplete, ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxEdusSelector,
  removeEdu,
} from "../../../../redux/checkboxEdusSelection";

export const EduAdderBody = () => {
  const dispatch = useDispatch();
  const checkedEdusFromStore = useSelector(checkboxEdusSelector);

  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeEdu({ id, idTemp }));
  };
  const options = [
    { label: "Diploma superiore" },
    { label: "Bachelor" },
    { label: "Master" },
  ];

  return (
    <TableBody>
      {checkedEdusFromStore.map((row) => (
        <TableRow key={row.idTemp !== undefined ? row.idTemp : row.id}>
          <TableCell align="center">
            <ShortAutocomplete
              disablePortal
              options={options}
              defaultValue={row.level}
              sx={{ width: 187 }}
              renderInput={(params) => <ShortTextField {...params} />}
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.course} />
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.institute} />
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.city} />
          </TableCell>
          <TableCell align="center">
            {row.it === "1" ? (
              <Checkbox sx={{ padding: 0 }} checked={true} />
            ) : (
              <Checkbox sx={{ padding: 0 }} checked={false} />
            )}
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
