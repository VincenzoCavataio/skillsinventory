import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
export const SmallTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    padding: "3px 3px",
    fontSize: "0.875rem",
    borderRadius: 0,
  },
  "& .MuiOutlinedInput-input": {
    padding: "3px 3px",
    "& .MuiInputLabel-root": {
      fontSize: "0.875rem",
    },
  },
}));
