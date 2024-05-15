import { Infos } from "../Infos";
import { Box } from "@mui/material";

const MOCK_DATA: { [key: string]: string } = {
  "Full Name": "Joseph Colombo",
  "E-mail": "Joseph.Colombo.96@gmail.com",
  "First Employment Start Date": "02-05-2016",
  "Actual Employment Start Date": "04-04-2024",
  "Private Number": "+39 3453048655",
  "Work Number": "+39 3453048655",
};

const ADDRESS = {
  Address: ["Via Giuseppe Giuliani, 1", "00185", "Milano", "Italy"],
};

const KEYS = Object.keys(MOCK_DATA);

export const Wrapper = () => {
  const { Address } = ADDRESS;
  return (
    <Box>
      {KEYS.map((key, i) => (
        <Infos title={key} data={MOCK_DATA[key]} key={i} type="row" />
      ))}
      <Infos title="Address" data={Address} type="list" />
    </Box>
  );
};
