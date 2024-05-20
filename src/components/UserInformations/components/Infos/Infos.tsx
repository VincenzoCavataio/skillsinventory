import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { commonColors } from "../../../../common/commonColors";

export const Infos = ({
  title,
  data,
  type,
}: {
  title: string;
  data: string | string[] | number;
  type: string;
}) => {
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
        <Typography variant="body2">{data.join(", ")}</Typography>
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
        <Typography variant="body2">{data ?? "-"}</Typography>
      </Box>
    </Box>
  );
};

// "fullName": "Full Name",
// "email": "E-Mail",
// "firstEmploymentStartDate": "First Employment Start Date",
// "actualEmploymentStartDate": "Actual Employment Start Date",
// "privateNumber": "Private Number",
// "workNumber": "Work Number",
// "workPhoneNumber": "N. Telefono Lavoro",
// "actualEmployementDate":"Data di impiego attuale",
// "firstEmployementDate":"Data di primo impiego",
// "address": "Address",
//old json
