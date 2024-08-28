import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, Typography, Box } from "@mui/material";
import { FLAG_URLS, LANG_TYPE, LANGUAGES } from "../../constants";
import { SelectChangeEvent } from "@mui/material/Select";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, selectLang } from "../../redux/langSlices";

const FLAG_SIZE = { select: 32, input: 24 };

/** Component that gets current language from localStorage and allows to change it */
export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  /** Get current language from localStorage */
  const LANG_FROM_LOCAL_STORAGE = localStorage.getItem("language");

  /** Get current language from Redux store */
  const currentLangSelector: LANG_TYPE = useSelector(langSelector);

  /** It updates language in both localStorage and Redux store, then use it as current i18n language */
  const handleLanguageChange = (event: SelectChangeEvent<LANG_TYPE>) => {
    const newLang = LANGUAGES.find((l) => l.value === event.target.value);
    if (newLang) {
      localStorage.setItem("language", newLang.value.toLowerCase());
      dispatch(selectLang(newLang.value.toLowerCase()));
      i18n.changeLanguage(newLang.value.toLowerCase());
    }
  };

  /**
   * Once the component is mounted, it checks if the language is stored in localStorage and set it as current language.
   * If not it sets the default language
   * */
  useEffect(() => {
    /** Default language is English */
    const FALLBACK_LANGUAGE = LANGUAGES[1].value.toLowerCase();

    if (LANG_FROM_LOCAL_STORAGE) {
      dispatch(selectLang(LANG_FROM_LOCAL_STORAGE));
      i18n.changeLanguage(LANG_FROM_LOCAL_STORAGE.toLowerCase());
    } else {
      dispatch(selectLang(FALLBACK_LANGUAGE));
      i18n.changeLanguage(FALLBACK_LANGUAGE);
    }
  }, [LANG_FROM_LOCAL_STORAGE, dispatch, i18n]);

  return (
    <Select
      value={currentLangSelector}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
      onChange={handleLanguageChange}
      IconComponent={(props) => (
        <ArrowDropDownIcon {...props} sx={{ fill: "white" }} />
      )}
      renderValue={(selected) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <img
            src={FLAG_URLS[selected]}
            alt={currentLangSelector}
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
