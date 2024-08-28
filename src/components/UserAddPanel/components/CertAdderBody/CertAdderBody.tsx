import {
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
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
import {
  dbCertificationSelector,
  removeCertificationsDb,
  updateCertificationCode,
  updateCertificationExpDate,
  updateCertificationIssuer,
  updateCertificationIt,
  updateCertificationName,
  updateCertificationReleaseDate,
} from "../../../../redux/addCertificationToDbSlice";
import { CheckedCert } from "../../../../redux/types";

export const CertAdderBody = () => {
  const checkedCertsFromStore = useSelector(checkboxCertsSelector);
  const certificationForDbSelector = useSelector(dbCertificationSelector);

  const dispatch = useDispatch();

  const handleUpdateCertificationName = (
    id: string,
    idTemp: number | undefined,
    name: string
  ) => {
    dispatch(updateCertificationName({ id, idTemp, name }));
  };

  const handleUpdateCertificationIssuer = (
    id: string,
    idTemp: number | undefined,
    issuer: string
  ) => {
    dispatch(updateCertificationIssuer({ id, idTemp, issuer }));
  };

  const handleUpdateCertificationIt = (
    id: string,
    idTemp: number | undefined,
    checked: boolean
  ) => {
    const itValue = checked ? "1" : "0";
    dispatch(updateCertificationIt({ id, idTemp, it: itValue }));
  };
  const handleUpdateCertificationCode = (
    id: string,
    idTemp: number | undefined,
    code: string
  ) => {
    dispatch(updateCertificationCode({ id, idTemp, code }));
  };
  const handleUpdateCertificationExpDate = (
    id: string,
    idTemp: number | undefined,
    expDate: string
  ) => {
    dispatch(updateCertificationExpDate({ id, idTemp, expDate }));
  };
  const handleUpdateCertificationReleaseDate = (
    id: string,
    idTemp: number | undefined,
    releaseDate: string
  ) => {
    dispatch(updateCertificationReleaseDate({ id, idTemp, releaseDate }));
  };

  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeCert({ id, idTemp }));
    dispatch(removeCertificationsDb({ id, idTemp }));
  };
  const getCheckboxValue = (id: string, idTemp?: number) => {
    if (idTemp) {
      const foundCertification = certificationForDbSelector.find(
        (certification) => certification.idTemp === idTemp
      );
      return foundCertification ? foundCertification.it === "1" : false;
    } else {
      const foundCertification = certificationForDbSelector.find(
        (certification) => certification.id === id
      );
      return foundCertification ? foundCertification.it === "1" : false;
    }
  };
  const mappingSection = (row: CheckedCert) => {
    if (row.name === "") {
      return (
        <ShortTextField
          defaultValue={row.name}
          onChange={(e) =>
            handleUpdateCertificationName(row.id, row.idTemp, e.target.value)
          }
        />
      );
    } else {
      return <ShortTextField defaultValue={row.name} disabled />;
    }
  };
  const mappingSectionCheckbox = (row: CheckedCert) => {
    if (row.idTemp) {
      return (
        <Checkbox
          sx={{ padding: 0 }}
          checked={getCheckboxValue(row.id, row.idTemp)}
          onChange={(e, value) => {
            console.log(value, row);
            handleUpdateCertificationIt(row.id, row.idTemp, value);
          }}
        />
      );
    } else {
      return (
        <Checkbox
          sx={{ padding: 0 }}
          checked={getCheckboxValue(row.id, row.idTemp)}
          disabled
        />
      );
    }
  };
  return (
    <TableBody>
      {checkedCertsFromStore.map((row) => (
        <TableRow key={row.idTemp !== undefined ? row.idTemp : row.id}>
          <TableCell align="center">
            <Tooltip title={row.name} placement="left" arrow>
              {mappingSection(row)}
            </Tooltip>
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.issuer}
              onChange={(e) =>
                handleUpdateCertificationIssuer(
                  row.id,
                  row.idTemp,
                  e.target.value
                )
              }
            />
          </TableCell>
          <TableCell align="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ShortDatePicker
                value={dayjs(row.releaseDate)}
                format={dateFormatByLanguage()}
                onChange={(date) =>
                  handleUpdateCertificationReleaseDate(
                    row.id,
                    row.idTemp,
                    date?.format("YYYY-MM-DD") || ""
                  )
                }
              />
            </LocalizationProvider>
          </TableCell>
          <TableCell align="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ShortDatePicker
                value={dayjs(row.expDate)}
                format={dateFormatByLanguage()}
                onChange={(date) =>
                  handleUpdateCertificationExpDate(
                    row.id,
                    row.idTemp,
                    date?.format("YYYY-MM-DD") || ""
                  )
                }
              />
            </LocalizationProvider>
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.code}
              onChange={(e) =>
                handleUpdateCertificationCode(
                  row.id,
                  row.idTemp,
                  e.target.value
                )
              }
            />
          </TableCell>
          <TableCell align="center">
            {/* <Checkbox
              sx={{ padding: 0 }}
              checked={getCheckboxValue(row.id, row.idTemp)}
              onChange={(e, value) => {
                console.log(value, row);
                handleUpdateCertificationIt(row.id, row.idTemp, value);
              }}
            /> */}
            {mappingSectionCheckbox(row)}
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
