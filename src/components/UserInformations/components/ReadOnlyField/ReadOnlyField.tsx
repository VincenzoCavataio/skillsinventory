import { Box, Typography } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";

type IdInfoProps = {
  label: string;
  data: number | string | undefined;
};

/** Read only filed in user info section */
export const ReadOnlyField = ({ label, data }: IdInfoProps) => {
  return (
    <Box
      textAlign="left"
      display="flex"
      p={2}
      borderBottom={`1px solid ${commonColors.lightGray}`}
    >
      <Box flex={1} alignContent="center">
        <Typography variant="body1">{label}</Typography>
      </Box>
      <Box flex={2} alignContent="center">
        <Typography variant="body2">{data ?? "-"}</Typography>
      </Box>
    </Box>
  );
};
