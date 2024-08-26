import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Step2 = () => {
  const [gender, setGender] = useState("");
  const handleChangeGender = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };
  const { t } = useTranslation();
  const GENDERS = [
    t("pages.userPage.informationDetails.male"),
    t("pages.userPage.informationDetails.female"),
    t("pages.userPage.informationDetails.other"),
  ];
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-start">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        // sx={{ mr: "100px" }}
      >
        <TextField
          margin="normal"
          size="small"
          required
          fullWidth
          id="name"
          label={t("pages.signinPage.step2.name")}
          name="name"
          autoComplete="name"
          autoFocus
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3 }}
        />
        <TextField
          margin="normal"
          size="small"
          required
          fullWidth
          id="lastName"
          label={t("pages.signinPage.step2.surname")}
          name="lastName"
          autoComplete="lastName"
          // sx={{ mb: 3, mt: 3, width: "200px" }}
          sx={{ mb: 3, mt: 3 }}
        />
        {/* </Box> */}
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <FormControl
            sx={{ mb: 3, mt: 3, width: "285px" }}
            // sx={{ mb: 3, mt: 3 }}
            size="small"
            required
          >
            <InputLabel
              required
              sx={{
                zIndex: 999,
                backgroundColor: "white",
                pl: 1,
                pr: 1,
              }}
            >
              {t("pages.signinPage.step2.gender")}
            </InputLabel>
            <Select value={gender} onChange={handleChangeGender} displayEmpty>
              {GENDERS.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={t("pages.signinPage.step2.bday")}
              sx={{ mb: 3, mt: 3, width: "285px" }}
              // sx={{ mb: 3, mt: 3 }}
              slotProps={{
                textField: {
                  required: true,
                  size: "small",
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};
