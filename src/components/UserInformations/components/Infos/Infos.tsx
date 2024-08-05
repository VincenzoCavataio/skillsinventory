import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import {
  ReduxStore,
  Residence,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { EditAutocomplete, EditDatePicker, EditTextField } from "../../style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { updateEditPayload } from "../../../../redux/editProfileSlice";
import dayjs from "dayjs";
import { useState } from "react";
import { validateEmail } from "../../../../utilities/validEmailChecker";

export const Infos = ({
  title,
  data,
  type,
}: {
  title: string;
  data:
    | ResponseProfileElementObjectData[keyof ResponseProfileElementObjectData];
  type: string;
}) => {
  const { t } = useTranslation();

  const allEmpty = false;
  const isNullAddress = data && Object.values(data).join("") === "";
  const isActive = useSelector(
    (state: ReduxStore) => state.editManager.isActive
  );

  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);
  const handleTextChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailField) {
      if (validateEmail(e.target.value)) {
        setIsValid(true);
        dispatch(updateEditPayload({ [title]: e.target.value }));
      } else {
        setIsValid(false);
      }
    } else {
      dispatch(updateEditPayload({ [title]: e.target.value }));
    }
  };

  const handleDateChange = (
    date: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    dispatch(updateEditPayload({ [title]: dayjs(date).format("YYYY-MM-DD") }));
  };

  const placeholders = [
    t(`pages.userPage.informationDetails.streetAddress`),
    t(`pages.userPage.informationDetails.streetNumber`),
    t(`pages.userPage.informationDetails.zipCode`),
    t(`pages.userPage.informationDetails.cityAddress`),
    t(`pages.userPage.informationDetails.province`),
    t(`pages.userPage.informationDetails.state`),
  ];
  const emailField = "email_login".includes(title);
  const isDateField = [
    "birthDate",
    "actualEmploymentDate",
    "firstEmploymentDate",
  ].includes(title);

  const isAutocompleteField = ["gender", "driver_license"].includes(title);
  const onlyNumberField = ["workPhoneNumber", "personalPhoneNumber"].includes(
    title
  );

  const autocompleteOptions = {
    gender: [
      t(`pages.userPage.informationDetails.male`),
      t(`pages.userPage.informationDetails.female`),
      t(`pages.userPage.informationDetails.other`),
    ],
    driver_license: [
      t(`pages.userPage.informationDetails.yes`),
      t(`pages.userPage.informationDetails.no`),
    ],
  };

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value === t(`pages.userPage.informationDetails.yes`)) {
      dispatch(updateEditPayload({ [title]: true }));
    } else if (value === t(`pages.userPage.informationDetails.no`)) {
      dispatch(updateEditPayload({ [title]: false }));
    } else {
      dispatch(updateEditPayload({ [title]: value || "" }));
    }
  };
  const handleObjectChange =
    (key: keyof Residence) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newData = { ...(data as Residence) };
      newData[key] = e.target.value;
      dispatch(updateEditPayload({ [title]: newData }));
    };

  return type === "list" && typeof data === "object" ? (
    <Box
      textAlign={"left"}
      display={"flex"}
      p={2}
      borderBottom={`1px solid ${commonColors.lightGray}`}
    >
      <Box flex={1} alignContent="center">
        <Typography variant="body1">{title}:</Typography>
      </Box>
      <Box flex={2} alignContent="center">
        {isActive ? (
          Object.entries(data as Residence).map(([key, value], index) => (
            <EditTextField
              key={index}
              variant="outlined"
              fullWidth
              defaultValue={value}
              onChange={handleObjectChange(key as keyof Residence)}
              sx={{ mb: 1 }}
              placeholder={placeholders[index] || ""}
            />
          ))
        ) : allEmpty === true ? (
          <Typography variant="body2">-</Typography>
        ) : (
          <Typography variant="body2">
            {isNullAddress ? "-" : Object.values(data as Residence).join(", ")}
          </Typography>
        )}
      </Box>
    </Box>
  ) : (
    <Box
      textAlign="left"
      display="flex"
      p={2}
      borderBottom={`1px solid ${commonColors.lightGray}`}
    >
      <Box flex={1} alignContent="center">
        <Typography variant="body1">
          {t(`pages.userPage.informationDetails.${title}`)}
        </Typography>
      </Box>
      <Box flex={2} alignContent="center">
        {isActive ? (
          isDateField ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <EditDatePicker
                value={data ? dayjs(data as string) : undefined}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          ) : isAutocompleteField ? (
            <EditAutocomplete
              disablePortal
              options={autocompleteOptions[title]}
              sx={{ width: 250 }}
              fullWidth
              defaultValue={
                (data as string) === "male"
                  ? t(`pages.userPage.informationDetails.male`)
                  : (data as string) === "female"
                  ? t(`pages.userPage.informationDetails.female`)
                  : (data as string) === "other"
                  ? t(`pages.userPage.informationDetails.other`)
                  : null
              }
              onInputChange={handleAutocompleteChange}
              renderInput={(params) => <EditTextField {...params} />}
            />
          ) : onlyNumberField ? (
            <EditTextField
              variant="outlined"
              id="outlined-number"
              type="number"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
              InputProps={{
                inputMode: "none",
              }}
            />
          ) : emailField ? (
            <EditTextField
              variant="outlined"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
              error={!isValid}
              helperText={!isValid ? "Email non valida" : ""}
            />
          ) : (
            <EditTextField
              variant="outlined"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
            />
          )
        ) : (
          <Typography variant="body2">
            {(data as string) === "male"
              ? t(`pages.userPage.informationDetails.male`)
              : (data as string) === "female"
              ? t(`pages.userPage.informationDetails.female`)
              : (data as string) === "other"
              ? t(`pages.userPage.informationDetails.other`)
              : (data as string[]) ?? "-"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
