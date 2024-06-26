import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
type IdInfoProps = {
  data: number | undefined;
};

export const IdInfo = ({ data }: IdInfoProps) => {
  const { t } = useTranslation();
  return (
    <Box
      textAlign="left"
      display="flex"
      p={2}
      borderBottom={`1px solid ${commonColors.lightGray}`}
    >
      <Box flex={1} alignContent="center">
        <Typography variant="body1">
          {t(`pages.userPage.informationDetails.id`)}
        </Typography>
      </Box>
      <Box flex={2} alignContent="center">
        <Typography variant="body2">{data ?? "-"}</Typography>
      </Box>
    </Box>
  );
};
