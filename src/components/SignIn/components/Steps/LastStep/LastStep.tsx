import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  handleReset: () => void;
};

// TODO: Da eliminare, Componente Placeholder
export const LastStep: FC<Props> = ({ handleReset }) => {
  return (
    <Box>
      <Typography sx={{ mt: 6, mb: 1, fontSize: 25 }}>
        All steps completed - you&apos;re finished
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button color="error" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
