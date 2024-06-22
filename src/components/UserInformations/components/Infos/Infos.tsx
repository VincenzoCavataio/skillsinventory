import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import { ResponseProfileElementObjectData } from "../../../../redux/types";

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
        <Typography variant="body2">{(data as string[]) ?? "-"}</Typography>
      </Box>
    </Box>
  );
};
