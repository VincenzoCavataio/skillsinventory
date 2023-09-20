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
import { getCertificationData, getTecnologiesData } from "./DashboardPage.controller";
import style from "./style";
import { TecnologyData } from "./types";
import { commonColors } from "../../common/commonColors";
import { ArrowForwardIos } from "@mui/icons-material";

const DashboardPage = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [tecnologiesData, setTecnologiesData] = useState([]);
  const [selectedInput, setSelectedInput] = useState<InputStates>({});
  const [fullName, setFullName] = useState("");

  //Federico, Claudio add use state setInputStates
  type InputStates = { fullName?: string, skill?: string, certifications?: string[] }
  const [inputStates, setInputStates] = useState<InputStates>({});


  const [sliderValue, setSliderValue] = useState<number>(1);

  //Federico, Claudio dynamic method start
  const handleChangeInput = (_: Event, newValue: string, key: string) => {
    console.log('newvalue: ', event);
    setSelectedInput({ ...selectedInput, [key]: newValue })
  };
  //Federico, Claudio dynamic method end

  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  useEffect(() => {
    getTecnologiesData()
      .then((data) => setTecnologiesData(data?.final_object))
      .catch((e) => console.log(e));

    //Federico, Claudio add method for useeffect start
    /* getCertificationData()
       .then((data) => setCertificationData(data?.final_object))
       .catch((e) => console.log(e));*/
    getCertificationData()
      .then((data) => setInputStates({ ...inputStates, certifications: data?.final_object }))
      .catch((e) => console.log(e));


    //Federico, Claudio add method for useeffect end

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
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                tecnologiesData?.map(
                  (tecnologyData: TecnologyData) => tecnologyData?.name
                ) || []
              }
              onChange={(event, newValue) => handleChangeInput(event, newValue, 'skill')}
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
              disabled={false
                /*selectedInput?.skill.length === 0 ||
              selectedInput?.skill[0] === null*/
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
          {/*Federico, Claudio fix add component start*/}
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                inputStates.certifications?.map(
                  (certificationData: TecnologyData) => certificationData?.name
                ) || ['']
              }
              onChange={(event, newValue) => handleChangeInput(event, newValue, 'certifications')}
              noOptionsText={
                <Button>{t("pages.dashboard.search.noOptions")}</Button>
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("pages.dashboard.search.certification")}
                />
              )}
            />
          </Box>
          {/*Federico, Claudio fix add component end*/}

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
