import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortDatePicker, ShortTextField } from "../../style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxCertsSelector,
  removeCert,
} from "../../../../redux/checkboxCertsSelection";
import dayjs from "dayjs";
import { dateFormatByLanguage } from "../../../../utilities/dateFormatByLanguage";

export const CertAdderBody = () => {
  const checkedCertsFromStore = useSelector(checkboxCertsSelector);
  const dispatch = useDispatch();

  ì;
  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeCert({ id, idTemp }));
  };

  return (
    <TableBody>
      {checkedCertsFromStore.map((row) => (
        <TableRow key={row.idTemp !== undefined ? row.idTemp : row.id}>
          <TableCell align="center">
            <ShortTextField defaultValue={row.name} />
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.issuer} />
          </TableCell>
          <TableCell align="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ShortDatePicker
                value={dayjs(row.releaseDate)}
                format={dateFormatByLanguage()}
              />
            </LocalizationProvider>
          </TableCell>
          <TableCell align="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ShortDatePicker
                value={dayjs(row.expDate)}
                format={dateFormatByLanguage()}
              />
            </LocalizationProvider>
          </TableCell>
          <TableCell align="center">
            <ShortTextField defaultValue={row.code} />
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
              // handleRemove={() => handleRemoveRow(row.id)}
              handleRemove={() => handleRemoveRow(row.id, row.idTemp)}
              row={row}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
