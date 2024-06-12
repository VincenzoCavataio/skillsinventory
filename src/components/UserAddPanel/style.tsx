// export const customRow {
//     height: 60px !important;
//   }
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
export const ShortTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
  },
  "& .MuiOutlinedInput-input": {
    height: "40px",
    "& .MuiInputLabel-root": {
      height: "40px",
    },
  },
}));
export const ShortTextField2 = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    height: "20px",
  },
  "& .MuiOutlinedInput-input": {
    height: "20px",
    "& .MuiInputLabel-root": {
      height: "20px",
    },
  },
}));
export const ShortAutocomplete = styled(Autocomplete)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
    "& .MuiAutocomplete-input": {
      padding: "3px",
      height: "auto",
    },
    "& .MuiOutlinedInput-root": {
      padding: "0px",
      "& .MuiOutlinedInput-input": {
        padding: "0 14px",
        height: "40px",
        display: "flex",
        alignItems: "center",
      },
    },
  },
}));
