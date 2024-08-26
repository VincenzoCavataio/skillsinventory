import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import { ResponseProfileElementObjectData } from "../../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { EditDatePicker } from "../../style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { updateEditPayload } from "../../../../redux/editProfileSlice";
import dayjs from "dayjs";
import { isEditModeSelector } from "../../../../redux/isEditMode";

export const Infos4 = ({
  title,
  data,
}: {
  title: string;
  data:
    | ResponseProfileElementObjectData[keyof ResponseProfileElementObjectData]
    | string[];
}) => {
  const { t } = useTranslation();

  const isActive = useSelector(isEditModeSelector);

  const dispatch = useDispatch();

  const handleDateChange = (
    date: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    dispatch(
      updateEditPayload({
        [title]: dayjs(date).format("YYYY-MM-DD").toString(),
      })
    );
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <EditDatePicker
              value={data ? dayjs(data as string) : undefined}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        ) : (
          <Typography variant="body2">{(data as string[]) ?? "-"}</Typography>
        )}
      </Box>
    </Box>
  );
};
