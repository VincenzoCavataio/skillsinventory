import { Box, MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import {
  ReduxStore,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { EditAutocomplete, EditDatePicker, EditTextField } from "../../style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { updateEditPayload } from "../../../../redux/editProfileSlice";
import dayjs from "dayjs";
import { useState } from "react";

export const Infos = ({
  title,
  data,
  type,
}: {
  title: string;
  data:
    | ResponseProfileElementObjectData[keyof ResponseProfileElementObjectData]
    | string[];
  type: string;
}) => {
  let allEmpty = true;

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== "") {
        allEmpty = false;
        break;
      }
    }
  }

  const { t } = useTranslation();
  const isActive = useSelector(
    (state: ReduxStore) => state.editManager.isActive
  );

  const dispatch = useDispatch();

  const handleTextChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEditPayload({ [title]: e.target.value }));
  };

  const [array, setArray] = useState<string[]>(data as string[]);
  const handleTextChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newArray = [...array];
      newArray[index] = e.target.value;
      setArray(newArray);
      dispatch(updateEditPayload({ [title]: newArray }));
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

  // const handleAutocompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(updateEditPayload({ [title]: e.target.value }));
  // };
  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    dispatch(updateEditPayload({ [title]: value || "" }));
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
          (data as string[]).map((item, index) => (
            <EditTextField
              key={index}
              variant="outlined"
              fullWidth
              defaultValue={item}
              onChange={handleTextChange(index)}
              sx={{ mb: 1 }}
              placeholder={placeholders[index] || ""}
            />
          ))
        ) : allEmpty === true ? (
          <Typography variant="body2">-</Typography>
        ) : (
          <Typography variant="body2">
            {(data as string[]).join(", ")}
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
                value={dayjs(data as string)}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          ) : isAutocompleteField ? (
            <EditAutocomplete
              disablePortal
              options={autocompleteOptions[title]}
              sx={{ width: 250 }}
              fullWidth
              defaultValue={data as string}
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
          ) : (
            <EditTextField
              variant="outlined"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
            />
          )
        ) : (
          <Typography variant="body2">{(data as string[]) ?? "-"}</Typography>
        )}
      </Box>
    </Box>
  );
};
