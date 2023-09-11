import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControlLabel,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import HeaderNavbar from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { getTecnologiesData } from "./DashboardPage.controller";
import style from "./style";
import { TecnologyData } from "./types";
import { commonColors } from "../../common/commonColors";
import { ArrowForwardIos } from "@mui/icons-material";

const DashboardPage = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [tecnologiesData, setTecnologiesData] = useState([]);
  const [selectedTecnologies, setSelectedTecnologies] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");

  const [sliderValue, setSliderValue] = useState<number>(1);

  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };
  const handleChangeTecnologies = (_: Event, newValue: string) => {
    console.log("NV", newValue);

    setSelectedTecnologies([newValue]);
  };

  useEffect(() => {
    getTecnologiesData()
      .then((data) => setTecnologiesData(data?.final_object))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <HeaderNavbar />
      <Container maxWidth="lg" sx={style.container}>
        <Box display={"flex"} flexDirection={"row"}>
          <Box display={"flex"} flexDirection={"column"}>
            <TextField
              id="outlined-basic"
              label={t("pages.dashboard.search.name")}
              variant="outlined"
              sx={{ mr: 2 }}
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                tecnologiesData?.map(
                  (tecnologyData: TecnologyData) => tecnologyData?.name
                ) || []
              }
              onChange={handleChangeTecnologies}
              noOptionsText={
                <Button>{t("pages.dashboard.search.noOptions")}</Button>
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("pages.dashboard.search.selectSkills")}
                />
              )}
            />
            <Slider
              aria-label="Always visible"
              style={{ width: 280, marginTop: 10, left: 10 }}
              max={5}
              min={1}
              disabled={
                selectedTecnologies.length === 0 ||
                selectedTecnologies[0] === null
              }
              value={sliderValue}
              marks
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
            />
            <Typography
              component={"p"}
              color={commonColors.subtitle}
            >{`Livello ${sliderValue}`}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              color: commonColors.white,
            }}
          >
            <ArrowForwardIos />
          </Button>
          {/* <FormControlLabel
            onChange={() => setAdvancedSearch(!advancedSearch)}
            value={advancedSearch}
            control={<Switch color="primary" />}
            label={t("pages.dashboard.search.advancedSearch")}
            labelPlacement="start"
          /> */}
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          background: "white",
          position: "relative",
          mt: 0,
          p: advancedSearch ? 2 : 0,
          display: "flex",
          justifyContent: "space-between",
          transition: "all .2s",
          height: advancedSearch ? "100px" : 0,
        }}
      ></Container>
    </>
  );
};

export default DashboardPage;
