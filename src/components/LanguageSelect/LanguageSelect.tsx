import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, Typography, Box } from "@mui/material";
import { FLAG_URLS, LANG_TYPE, LANGUAGES } from "../../constants";
import { SelectChangeEvent } from "@mui/material/Select";

const FLAG_SIZE = { select: 32, input: 24 };

const defaultLang =
  LANGUAGES.find(
    (lang) => lang.label === localStorage.getItem("language")?.toUpperCase()
  ) || LANGUAGES[1];

/** Component that gets current language from localStorage and allows to change it */
export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(defaultLang);

  const handleLanguageChange = (event: SelectChangeEvent<LANG_TYPE>) => {
    const newLang = LANGUAGES.find((l) => l.value === event.target.value);
    if (newLang) {
      setLang(newLang);
      localStorage.setItem("language", newLang.value.toLowerCase());
      i18n.changeLanguage(newLang.value.toLowerCase());
    }
  };

  return (
    <Select
      value={lang.value}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
      onChange={handleLanguageChange}
      renderValue={(selected) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <img
            src={FLAG_URLS[selected as LANG_TYPE]}
            alt={lang.label}
            style={{
              width: FLAG_SIZE.select,
              height: FLAG_SIZE.select,
              marginRight: 5,
            }}
          />
        </Box>
      )}
    >
      {LANGUAGES.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          <img
            src={FLAG_URLS[value]}
            alt={label}
            style={{
              width: FLAG_SIZE.input,
              height: FLAG_SIZE.input,
              marginRight: 10,
            }}
          />
          <Typography variant="inherit">{label}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
