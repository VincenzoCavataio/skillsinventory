import { MOCK_USER_DATA, MOCK_USER_DATA_ADDRESS } from "../../../../constants";
import { Infos } from "../Infos";
import { Box } from "@mui/material";

const KEYS = Object.keys(MOCK_USER_DATA.details);

export const Wrapper = () => {
  return (
    <Box>
      {KEYS.map((key) => (
        <Infos
          title={key}
          data={MOCK_USER_DATA.details[key]}
          key={key}
          type="row"
        />
      ))}
      <Infos title="Address" data={MOCK_USER_DATA_ADDRESS} type="list" />
    </Box>
  );
};
