import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import {
  ReduxStore,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { EditAutocomplete, EditTextField } from "../../style";
import { updateEditPayload } from "../../../../redux/editProfileSlice";
import { useState, FC, SyntheticEvent } from "react";

type DataProps = "male" | "female" | "1" | "0" | "other";
type TitleProps = "gender" | "driver_license";

type Props = {
  title: string;
  data: ResponseProfileElementObjectData;
};

/** A Dropdown component that allows the user to select a gender or a driver license status. */
export const GenderAndDriverLicenseDropdown: FC<Props> = ({ title, data }) => {
  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState<unknown>(data ?? null);

  const isActive = useSelector(
    (state: ReduxStore) => state.editManager.isActive
  );

  const dispatch = useDispatch();

  const autocompleteOptions = {
    gender: ["male", "female", "other"],
    driver_license: [1, 0],
  };

  const handleAutocompleteChange = (value: unknown) => {
    setCurrentValue(value);
    dispatch(updateEditPayload({ [title]: value }));
    console.log({ value, title });
  };

  const DROPDOWN_CHOICE = {
    male: t(`pages.userPage.informationDetails.male`),
    female: t(`pages.userPage.informationDetails.female`),
    other: t(`pages.userPage.informationDetails.other`),
    "1": t(`pages.userPage.informationDetails.yes`),
    "0": t(`pages.userPage.informationDetails.no`),
  };

  return (
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
          <EditAutocomplete
            disablePortal
            options={autocompleteOptions[title as TitleProps]}
            renderOption={(props, option) => {
              const { key, ...rest } = props;
              return (
                <Box component="li" key={key} {...rest}>
                  {t(`pages.userPage.informationDetails.${option}`)}
                </Box>
              );
            }}
            sx={{ width: 250 }}
            fullWidth
            value={currentValue}
            onChange={(
              _event: SyntheticEvent<Element, Event>,
              value: unknown
            ) => handleAutocompleteChange(value)}
            renderInput={(params) => (
              <EditTextField key={title} {...params}>
                {data && data[title as TitleProps]}
              </EditTextField>
            )}
            getOptionLabel={(option) => {
              return t(`pages.userPage.informationDetails.${option}`);
            }}
          />
        ) : (
          <Typography variant="body2">
            {DROPDOWN_CHOICE[data as unknown as DataProps] ?? "-"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
