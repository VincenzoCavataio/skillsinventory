import { styled } from "@mui/material";

export const Img = styled("img")({
  marginRight: 8,
  height: "auto",
  width: 40,
});

export const TextFieldStyle = {
  cursor: "pointer",
  color: "white",
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiAutocomplete-endAdornment": {
    "& .MuiButtonBase-root": {
      color: "white",
    },
  },
};
