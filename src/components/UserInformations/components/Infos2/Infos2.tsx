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

export const Infos2 = ({
  title,
  data,
}: {
  title: string;
  data:
    | ResponseProfileElementObjectData[keyof ResponseProfileElementObjectData]
    | string[];
}) => {
  const { t } = useTranslation();

  const isActive = useSelector(
    (state: ReduxStore) => state.editManager.isActive
  );

  const dispatch = useDispatch();

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
    event: React.SyntheticEvent,
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
