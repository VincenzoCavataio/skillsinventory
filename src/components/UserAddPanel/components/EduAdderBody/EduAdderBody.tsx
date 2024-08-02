import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortAutocomplete, ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  removeEduRowData,
  updateEduRowsNumber,
} from "../../../../redux/adderSlice";

export const EduAdderBody = () => {
  const dispatch = useDispatch();
  const eduStore = useSelector((state: ReduxStore) => state.rowsManager);
  const handleRemoveRow = (id: number) => {
    dispatch(removeEduRowData(id));
    dispatch(updateEduRowsNumber(eduStore.eduRows - 1));
  };
  const options = [
    { label: "Diploma superiore" },
    { label: "Bachelor" },
    { label: "Master" },
  ];

  return (
    <TableBody>
      {eduStore.eduRowsData &&
        eduStore.eduRowsData.length > 0 &&
        eduStore.eduRowsData.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <ShortAutocomplete
                disablePortal
                options={options}
                defaultValue={row.levelMenu}
                sx={{ width: 187 }}
                renderInput={(params) => <ShortTextField {...params} />}
              />
            </TableCell>
            <TableCell align="center">
              <ShortTextField defaultValue={row.courseTxtField} />
            </TableCell>
            <TableCell align="center">
              <ShortTextField defaultValue={row.instTxtField} />
            </TableCell>
            <TableCell align="center">
              <ShortTextField defaultValue={row.cityTxtField} />
            </TableCell>
            <TableCell align="center">
              {row.itChckbx === true ? (
                <Checkbox sx={{ padding: 0 }} checked={true} />
              ) : (
                <Checkbox sx={{ padding: 0 }} checked={false} />
              )}
            </TableCell>
            <TableCell align="center">
              <GenericDelete handleRemove={handleRemoveRow} row={row} />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
