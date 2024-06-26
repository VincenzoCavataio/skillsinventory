import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FLAG_URLS, LANGUAGES } from "../../constants";
import { Img, TextFieldStyle } from "./styles";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const defaultLanguage =
    LANGUAGES.find(
      (language) =>
        language.label === localStorage.getItem("language")?.toUpperCase()
    ) ?? LANGUAGES[1];
  const [lang, setLang] = useState(defaultLanguage);

  const handleLanguageChange = (
    _event: React.SyntheticEvent,
    newValue: (typeof LANGUAGES)[number] | null
  ) => {
    if (newValue) {
      setLang(newValue);
      localStorage.setItem("language", newValue.label.toLowerCase());
      i18n.changeLanguage(newValue.label.toLowerCase());
    }
  };

  return (
    <Autocomplete
      disablePortal
      value={lang}
      options={LANGUAGES}
      sx={{ width: 160 }}
      getOptionLabel={(option) => option.label}
      onChange={handleLanguageChange}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.value}>
          <Img alt="" src={FLAG_URLS[option.value]} />
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        const selectedOption = LANGUAGES.find(
          (option) => option.label === params.inputProps.value
        );

        const flagUrl = selectedOption ? FLAG_URLS[selectedOption.value] : "";
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
              sx: TextFieldStyle,
            }}
          />
        );
      }}
    />
  );
};
