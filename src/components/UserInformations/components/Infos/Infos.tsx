import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import {
  ReduxStore,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useSelector } from "react-redux";
import { EditDatePicker, EditTextField } from "../../style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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

  const isDateField = [
    "birthDate",
    "actualEmploymentDate",
    "firstEmploymentDate",
  ].includes(title);
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
        {allEmpty === true ? (
          <Typography variant="body2">-</Typography>
        ) : isActive ? (
          <EditTextField
            variant="outlined"
            fullWidth
            defaultValue={(data as string[]).join(", ")}
          />
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
              <EditDatePicker />
            </LocalizationProvider>
          ) : (
            <EditTextField
              variant="outlined"
              fullWidth
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
