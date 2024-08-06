import { Box, Typography } from "@mui/material";
import { SettingsScheduler } from "../SettingsScheduler";
import { NEXTRE_ENG } from "../../../../common/commonColors";
type GenericSchedulerProps = {
  org: string;
};

export const GenericScheduler: React.FC<GenericSchedulerProps> = ({ org }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        width: "31%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `${NEXTRE_ENG} 2px solid`,
        pt: 1.5,
        pb: 1.5,
        minWidth: "350px",
        // maxWidth: "500px",
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          mb: "8px",
        }}
      >
        {org}
      </Typography>
      <Box
        sx={{
          height: "1.5px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          mt: "16px",
          mb: "16px",
          backgroundColor: "#9d9d9d",
        }}
      />
      <SettingsScheduler />
    </Box>
  );
};
