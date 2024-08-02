import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortDatePicker, ShortTextField } from "../../style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  removeCertRowData,
  updateCertRowsNumber,
} from "../../../../redux/adderSlice";

export const CertAdderBody = () => {
  const dispatch = useDispatch();
  const certStore = useSelector((state: ReduxStore) => state.rowsManager);
  const handleRemoveRow = (id: number) => {
    dispatch(removeCertRowData(id));
    dispatch(updateCertRowsNumber(certStore.certRows - 1));
  };

  return (
    <TableBody>
      {certStore.certRowsData &&
        certStore.certRowsData.length > 0 &&
        certStore.certRowsData.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">
              <ShortTextField defaultValue={row.nameTxtField} />
            </TableCell>
            <TableCell align="center">
              <ShortTextField defaultValue={row.issuerTxtField} />
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
              <ShortTextField defaultValue={row.codeTxtField} />
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
