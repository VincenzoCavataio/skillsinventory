import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { ShortAutocomplete, ShortTextField } from "../../style";
import { GenericDelete } from "../GenericDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxEdusSelector,
  removeEdu,
} from "../../../../redux/checkboxEdusSelection";
import {
  removeEducationDb,
  updateEducationCity,
  updateEducationCourse,
  updateEducationInstitute,
  updateEducationIt,
  updateEducationLevel,
} from "../../../../redux/addEducationToDbSlice";

export const EduAdderBody = () => {
  const dispatch = useDispatch();
  const checkedEdusFromStore = useSelector(checkboxEdusSelector);

  const handleUpdateEducationCourse = (
    id: string,
    idTemp: number | undefined,
    course: string
  ) => {
    dispatch(updateEducationCourse({ id, idTemp, course }));
  };

  const handleUpdateEducationLevel = (
    id: string,
    idTemp: number | undefined,
    level: string
  ) => {
    dispatch(updateEducationLevel({ id, idTemp, level }));
  };

  const handleUpdateEducationIt = (
    id: string,
    idTemp: number | undefined,
    checked: boolean
  ) => {
    const itValue = checked ? "1" : "0";
    dispatch(updateEducationIt({ id, idTemp, it: itValue }));
  };
  const handleUpdateEducationCity = (
    id: string,
    idTemp: number | undefined,
    city: string
  ) => {
    dispatch(updateEducationCity({ id, idTemp, city }));
  };
  const handleUpdateEducationInstitute = (
    id: string,
    idTemp: number | undefined,
    institute: string
  ) => {
    dispatch(updateEducationInstitute({ id, idTemp, institute }));
  };

  const handleRemoveRow = (id: string, idTemp?: number) => {
    dispatch(removeEdu({ id, idTemp }));
    dispatch(removeEducationDb({ id, idTemp }));
  };

  type OptionType = {
    label: string;
  };

  const options: OptionType[] = [
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
              onChange={(e, value) =>
                handleUpdateEducationLevel(
                  row.id,
                  row.idTemp,
                  value?.label || ""
                )
              }
              disablePortal
              options={options}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
              defaultValue={
                options.find((option) => option.label === row.level) || null
              }
              // defaultValue={row.level}
              sx={{ width: 187 }}
              renderInput={(params) => <ShortTextField {...params} />}
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.course}
              onChange={(e) =>
                handleUpdateEducationCourse(row.id, row.idTemp, e.target.value)
              }
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.institute}
              onChange={(e) =>
                handleUpdateEducationInstitute(
                  row.id,
                  row.idTemp,
                  e.target.value
                )
              }
            />
          </TableCell>
          <TableCell align="center">
            <ShortTextField
              defaultValue={row.city}
              onChange={(e) =>
                handleUpdateEducationCity(row.id, row.idTemp, e.target.value)
              }
            />
          </TableCell>
          <TableCell align="center">
            {row.it === "1" ? (
              <Checkbox
                sx={{ padding: 0 }}
                checked={true}
                // onChange={(e) =>
                //   handleUpdateEducationIt(row.id, row.idTemp, e.target.checked)
                // }
              />
            ) : (
              <Checkbox
                sx={{ padding: 0 }}
                checked={false}
                // onChange={(e) =>
                //   handleUpdateEducationIt(row.id, row.idTemp, e.target.checked)
                // }
              />
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
