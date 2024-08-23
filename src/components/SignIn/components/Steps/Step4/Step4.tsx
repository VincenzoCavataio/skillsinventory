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

export const Step4 = () => {
  const { t } = useTranslation();
  const [driverLicense, setDriverLicense] = useState("");
  const handleChangeDriverLicense = (event: SelectChangeEvent<string>) => {
    setDriverLicense(event.target.value);
  };
  const DRIVERLICENSE = [
    t("pages.userPage.informationDetails.yes"),
    t("pages.userPage.informationDetails.no"),
  ];
  const [org, setOrg] = useState("");
  const handleChangeOrg = (event: SelectChangeEvent<string>) => {
    setOrg(event.target.value);
  };
  const ORGANIZATIONS = [
    { label: "ALMALAUREA" },
    { label: "BE" },
    { label: "ILLIMITY" },
    { label: "NEXTRE" },
    { label: "YOUCO" },
    { label: "PWC" },
    { label: "TEMP" },
    { label: "Other.." },
  ];

  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-start">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ mr: "100px" }}
      >
        <TextField
          size="small"
          required
          fullWidth
          id="pvtNumber"
          label={t("pages.signinPage.step4.pvtNumber")}
          name="pvtNumber"
          autoComplete="pvtNumber"
          type="number"
          autoFocus
          sx={{ mb: 3, mt: 3, width: "200px" }}
        />
        <TextField
          margin="normal"
          size="small"
          fullWidth
          id="workNumber"
          label={t("pages.signinPage.step4.workNumber")}
          name="workNumber"
          autoComplete="workNumber"
          type="number"
          sx={{ mb: 3, mt: 3, width: "200px" }}
        />
        <FormControl sx={{ mb: 3, mt: 3, width: "200px" }} size="small">
          <InputLabel
            sx={{
              zIndex: 999,
              backgroundColor: "white",
              pl: 1,
              pr: 1,
            }}
          >
            {t("pages.signinPage.step4.driverLicense")}
          </InputLabel>
          <Select
            value={driverLicense}
            onChange={handleChangeDriverLicense}
            displayEmpty
          >
            {DRIVERLICENSE.map((driverLicense) => (
              <MenuItem key={driverLicense} value={driverLicense}>
                {driverLicense}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={t("pages.signinPage.step4.firstEmploymentDate")}
            sx={{ mb: 3, mt: 3, width: "200px" }}
            slotProps={{
              textField: {
                size: "small",
              },
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={t("pages.signinPage.step4.actualEmploymentDate")}
            sx={{ mb: 3, mt: 3, width: "200px" }}
            slotProps={{
              textField: {
                required: true,
                size: "small",
              },
            }}
          />
        </LocalizationProvider>
        <FormControl
          required
          sx={{ mb: 3, mt: 3, width: "200px" }}
          size="small"
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
            {t("pages.signinPage.step4.organization")}
          </InputLabel>
          <Select value={org} onChange={handleChangeOrg} displayEmpty>
            {ORGANIZATIONS.map((org) => (
              <MenuItem key={org.label} value={org.label}>
                {org.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
