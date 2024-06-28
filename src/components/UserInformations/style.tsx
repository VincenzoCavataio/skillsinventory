import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const EditTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
    width: "250px",
  },
  "& .MuiOutlinedInput-input": {
    height: "40px",
    width: "250px",
    "& .MuiInputLabel-root": {
      height: "40px",
      width: "250px",
    },
  },
}));
export const EditDatePicker = styled(DatePicker)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
    width: "250px",
  },
  "& .MuiOutlinedInput-input": {
    height: "40px",
    width: "250px",
    "& .MuiInputLabel-root": {
      height: "40px",
      width: "250px",
    },
  },
}));
export const EditAutocomplete = styled(Autocomplete)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
    width: "250px",
    "& .MuiAutocomplete-input": {
      height: "40px",
      width: "250px",
    },
    "& .MuiOutlinedInput-root": {
      height: "40px",
      width: "250px",
      "& .MuiOutlinedInput-input": {
        height: "40px",
        width: "250px",
      },
    },
  },
}));
