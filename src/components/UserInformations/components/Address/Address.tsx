import { Box } from "@mui/material";

export const Address = ({
  information,
  address,
}: {
  information: string;
  address: string[];
}) => {
  const dati: string[] = [
    "City:",
    "Province:",
    "Nation:",
    "Zip Code:",
    "Address:",
    "Number:",
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          display: "flex",
          direction: "row",
          ml: 3,
        }}
      >
        <Box sx={{ width: "30%", direction: "column" }}>
          <p style={{ fontWeight: "600" }}>{information}:</p>
        </Box>
        <Box sx={{ width: "60%", direction: "column" }}>
          {address.map((addr, i) => (
            <p key={i} style={{ color: "grey" }}>
              {dati[i]} {addr}
            </p>
          ))}
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
