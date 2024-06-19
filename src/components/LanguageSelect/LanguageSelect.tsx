import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import i18n from "../../translations/i18n";
import { useDispatch } from "react-redux";
import { selectLang } from "../../redux/langSlices";

const Img = styled("img")({
  marginRight: 8,
  height: "auto",
  width: 40,
});

const languages = [
  { label: "IT", value: "it" },
  { label: "EN", value: "gb" },
];

export const LanguageSelect = () => {
  const dispatch = useDispatch();
  const defaultLanguage = languages.find((language) => language.value === "gb");
  const [lang, setLang] = useState(
    languages.find((language) => language.value === "gb")
  );
  const handleLanguageChange = (
    event: React.SyntheticEvent,
    newValue: (typeof languages)[number] | null
  ) => {
    if (newValue) {
      setLang(newValue);
      // localStorage.setItem("language", newValue.label.toLowerCase());
      // i18n.changeLanguage(newValue.label.toLowerCase());
      // location.reload();
    }
  };
  useEffect(() => {
    if (lang) {
      dispatch(selectLang(lang.label.toLowerCase()));
      // localStorage.setItem("language", lang.label.toLowerCase());
      // i18n.changeLanguage(lang.label.toLowerCase());
    }
    // location.reload();
    // }, [lang]);
  }, [dispatch, lang]);
  return (
    <Autocomplete
      disablePortal
      defaultValue={defaultLanguage}
      id="combo-box-demo"
      options={languages}
      sx={{ width: 150 }}
      getOptionLabel={(option) => option.label}
      onChange={handleLanguageChange}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Img
            src={`https://flagsapi.com/${option.value.toUpperCase()}/flat/64.png`}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        const selectedOption = languages.find(
          (option) => option.label === params.inputProps.value
        );
        const flagUrl = selectedOption
          ? `https://flagsapi.com/${selectedOption.value.toUpperCase()}/flat/64.png`
          : "";

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
