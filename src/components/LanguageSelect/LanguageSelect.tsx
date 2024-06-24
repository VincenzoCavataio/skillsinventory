import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import flagUrls from "./constants";

const Img = styled("img")({
  marginRight: 8,
  height: "auto",
  width: 40,
});

const languages = [
  { label: "IT", value: "it" },
  { label: "EN", value: "gb" },
  { label: "ES", value: "es" },
];

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const defaultLanguage =
    languages.find(
      (language) =>
        language.label === localStorage.getItem("language")?.toUpperCase()
    ) ?? languages[1];
  const [lang, setLang] = useState(defaultLanguage);

  const handleLanguageChange = (
    _event: React.SyntheticEvent,
    newValue: (typeof languages)[number] | null
  ) => {
    if (newValue) {
      setLang(newValue);
      localStorage.setItem("language", newValue.label.toLowerCase());
      i18n.changeLanguage(newValue.label.toLowerCase());
    }
  };

  /*
  
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

  */

  return (
    // <FormControl fullWidth>
    //   <InputLabel id="demo-simple-select-label">Age</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-label"
    //     id="demo-simple-select"
    //     value={lang}
    //     label="Language"
    //     onChange={handleLanguageChange}
    //   >
    //     <MenuItem value={10}>Ten</MenuItem>
    //     <MenuItem value={20}>Twenty</MenuItem>
    //     <MenuItem value={30}>Thirty</MenuItem>
    //   </Select>
    // </FormControl>

    <Autocomplete
      disablePortal
      value={lang}
      id="combo-box-demo"
      options={languages}
      sx={{ width: 160 }}
      getOptionLabel={(option) => option.label}
      onChange={handleLanguageChange}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Img
            // src={`https://flagsapi.com/${option.value.toUpperCase()}/flat/64.png`}
            alt=""
            src={flagUrls[option.value]}
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        const selectedOption = languages.find(
          (option) => option.label === params.inputProps.value
        );
        // const flagUrl = selectedOption
        //   ? `https://flagsapi.com/${selectedOption.value.toUpperCase()}/flat/64.png`
        //   : "";
        const flagUrl = selectedOption ? flagUrls[selectedOption.value] : "";
        return (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              readOnly: true,
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: selectedOption ? (
                <Img src={flagUrl} alt="" />
              ) : null,
              sx: {
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
              },
            }}
          />
        );
      }}
    />
  );
};
