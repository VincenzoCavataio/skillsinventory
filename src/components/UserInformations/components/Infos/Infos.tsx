import { Box } from "@mui/material";

export const Infos = ({
  information,
  personalInformation,
}: {
  information: string;
  personalInformation: string;
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          display: "flex",
          ml: 3,
        }}
      >
        <Box sx={{ width: "30%", direction: "column" }}>
          <p style={{ fontWeight: "600" }}>{information}:</p>
        </Box>
        <Box sx={{ width: "60%", direction: "column" }}>
          <p style={{ color: "grey" }}>{personalInformation}</p>
        </Box>
      </Box>
      <hr
        style={{
          marginLeft: 25,
          marginRight: 25,
          borderColor: "#eee",
          borderWidth: "0.5px",
        }}
      />
    </>
  );
};
