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
  removeCertificationsToBeSent,
  toBeSentCertificationSelector,
  updateCertificationCode,
  updateCertificationExpDate,
  updateCertificationIssuer,
  updateCertificationIt,
  updateCertificationName,
  updateCertificationReleaseDate,
} from "../../../../redux/addCertificationToBeSentSlice";
import { CheckedCert } from "../../../../redux/types";

/** Component to render the body of the certification adder table, allowing users to input certification details and handle updates and deletions. */
export const CertAdderBody = () => {
  const checkedCertsFromStore = useSelector(checkboxCertsSelector);
  const certificationToBeSentSelector = useSelector(
    toBeSentCertificationSelector
  );

  const dispatch = useDispatch();

  /** Updates the name field of a specific certification entry. */
  const handleUpdateCertificationName = (
    id: string,
    idTemp: number | undefined,
    name: string
  ) => {
    dispatch(updateCertificationName({ id, idTemp, name }));
  };

  /** Updates the issuer field of a specific certification entry. */
  const handleUpdateCertificationIssuer = (
    id: string,
    idTemp: number | undefined,
    issuer: string
  ) => {
    dispatch(updateCertificationIssuer({ id, idTemp, issuer }));
  };

  /** Updates the "IT" field of a specific certification entry. */
  const handleUpdateCertificationIt = (
    id: string,
    idTemp: number | undefined,
    checked: boolean
  ) => {
    const itValue = checked ? "1" : "0";
    dispatch(updateCertificationIt({ id, idTemp, it: itValue }));
  };

  /** Updates the code field of a specific certification entry. */
  const handleUpdateCertificationCode = (
    id: string,
    idTemp: number | undefined,
    code: string
  ) => {
    dispatch(updateCertificationCode({ id, idTemp, code }));
  };

  /** Updates the expiration date field of a specific certification entry. */
  const handleUpdateCertificationExpDate = (
    id: string,
    idTemp: number | undefined,
    expDate: string
  ) => {
    dispatch(updateCertificationExpDate({ id, idTemp, expDate }));
  };

  /** Updates the release date field of a specific certification entry. */
  const handleUpdateCertificationReleaseDate = (
    id: string,
    idTemp: number | undefined,
    releaseDate: string
  ) => {
    dispatch(updateCertificationReleaseDate({ id, idTemp, releaseDate }));
  };

  /** Removes a certification row from both the checked list and the to-be-sent list. */
  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeCert({ id, idTemp }));
    dispatch(removeCertificationsToBeSent({ id, idTemp }));
  };

  /** Retrieves the value of the checkbox indicating whether the certification entry is in the IT field. */
  const getCheckboxValue = (id: string, idTemp?: number) => {
    if (idTemp) {
      const foundCertification = certificationToBeSentSelector.find(
        (certification) => certification.idTemp === idTemp
      );
      return foundCertification ? foundCertification.it === "1" : false;
    } else {
      const foundCertification = certificationToBeSentSelector.find(
        (certification) => certification.id === id
      );
      return foundCertification ? foundCertification.it === "1" : false;
    }
  };

  /**  Maps the certification name input to a `ShortTextField` component if the name is empty; otherwise, it returns a disabled `ShortTextField`. */
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

  /**  Maps the IT checkbox input to a `Checkbox` component based on whether the certification is temporary or not. */
  const mappingSectionCheckbox = (row: CheckedCert) => {
    if (row.idTemp) {
      return (
        <Checkbox
          sx={{ padding: 0 }}
          checked={getCheckboxValue(row.id, row.idTemp)}
          onChange={(_, value) => {
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
          <TableCell align="center">{mappingSectionCheckbox(row)}</TableCell>
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
