import { Box, Typography } from "@mui/material";

export const Infos = ({
  title,
  data,
  type,
}: {
  title: string;
  data: string | string[];
  type: string;
}) => {
  return type === "list" && typeof data === "object" ? (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        p: 2,
        borderBottom: "1px solid #e4e4e4",
      }}
    >
      <Box sx={{ flex: 1, alignContent: "center" }}>
        <Typography variant="body1">{title}:</Typography>
      </Box>
      <Box sx={{ flex: 2, alignContent: "center" }}>
        <Typography variant="body2">{data.join(", ")}</Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        p: 2,
        borderBottom: "1px solid #e4e4e4",
      }}
    >
      <Box sx={{ flex: 1, alignContent: "center" }}>
        <Typography variant="body1">{title}:</Typography>
      </Box>
      <Box sx={{ flex: 2, alignContent: "center" }}>
        <Typography variant="body2">{data}</Typography>
      </Box>
    </Box>
  );
};
