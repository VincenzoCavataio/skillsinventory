import {
  Autocomplete,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import HeaderNavbar from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useState } from "react";
import {
  allEducationalMetadata,
  allSkillslMetadata,
} from "./DashboardPage.controller";
import style from "./style";
import { CompiledFields, TecnologyData } from "./types";
import { commonColors } from "../../common/commonColors";
import useApi from "../../utilities/useApi";
import SliderComponent from "../../components/SliderComponent";

const DashboardPage = () => {
  const [selectedInput, setSelectedInput] = useState<CompiledFields>({});
  const [fullName, setFullName] = useState("");
  const [sliderValue, setSliderValue] = useState<number>(1);

  const allEducationalData = useApi(allEducationalMetadata);
  const allSkillslData = useApi(allSkillslMetadata);

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
                allSkillslData?.data?.final_object.map(
                  (tecnologyData: TecnologyData) => tecnologyData?.name
                ) || []
              }
              onChange={(_, newValue) =>
                setSelectedInput({ ...selectedInput, skill: newValue || "" })
              }
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
            <SliderComponent
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
            <Typography
              component={"p"}
              color={commonColors.subtitle}
            >{`Livello ${sliderValue}`}</Typography>
          </Box>
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allEducationalData?.data?.final_object.map(
                  (certificationData: TecnologyData) => certificationData?.name
                ) || [""]
              }
              onChange={(_, newValue) =>
                setSelectedInput({
                  ...selectedInput,
                  certification: newValue || "",
                })
              }
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
        </Box>
      </Container>
    </>
  );
};

export default DashboardPage;
