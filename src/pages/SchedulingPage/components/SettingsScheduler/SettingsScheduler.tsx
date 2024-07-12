import { Box, Button, Switch, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { NEXTRE_ENG } from "../../../../common/commonColors";

export const SettingsScheduler = () => {
  //   const [hour, setHour] = useState<number>(1);
  //   const [minute, setMinute] = useState<number>(1);
  const [daySettings, setDaySettings] = useState<boolean>(false);
  //   const HOURS = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //     22, 23, 0,
  //   ];
  //   const MINUTES = [
  //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  //     40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  //     59,
  //   ];
  //   const handleChangeHour = (event: SelectChangeEvent<string>) => {
  //     setHour(Number(event.target.value));
  //   };
  //   const handleChangeMinute = (event: SelectChangeEvent<string>) => {
  //     setMinute(Number(event.target.value));
  //   };
  const handleChangeDaySettings = () => {
    if (daySettings === true) {
      setDaySettings(false);
    } else if (daySettings === false) {
      setDaySettings(true);
    }
  };
  const today = dayjs();

  const [selectedDateTime, setSelectedDateTime] = useState(dayjs());

  const handleDateTimeChange = (newValue) => {
    setSelectedDateTime(newValue);
  };
  return (
    <Box
      sx={{
        width: "90%",
        ml: "auto",
        mr: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          mt: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            pr: 1,
          }}
        >
          Stato servizio:
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Non schedulato
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",

          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            pr: 1,
          }}
        >
          Schedulato al:
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Nessuna schedulazione
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 700,
          mt: 1.5,
        }}
      >
        Imposta giorno e orario:
      </Typography>
      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      > */}
      {/* <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Alle ore:
        </Typography>
        <Select value={String(hour)} size="small" onChange={handleChangeHour}>
          {HOURS.map((hour) => (
            <MenuItem key={hour} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 1.5,
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Al minuto:
        </Typography>
        <Select
          value={String(minute)}
          size="small"
          onChange={handleChangeMinute}
        >
          {MINUTES.map((minute) => (
            <MenuItem key={minute} value={minute}>
              {minute}
            </MenuItem>
          ))}
        </Select> */}
      {/* </Box> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Ogni
        </Typography>
        <Switch checked={daySettings} onChange={handleChangeDaySettings} />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Il
        </Typography>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          defaultValue={today}
          views={["month", "day", "hours", "minutes"]}
          disablePast
          ampm={false}
          value={selectedDateTime}
          onChange={handleDateTimeChange}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        sx={{
          backgroundColor: NEXTRE_ENG,
          boxShadow: "none",
          width: "30%",
          ml: "auto",
          mr: "auto",
          mt: 3,
        }}
      >
        Avvia
      </Button>
    </Box>
  );
};
