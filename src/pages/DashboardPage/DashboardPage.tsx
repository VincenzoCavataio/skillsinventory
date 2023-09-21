import { Autocomplete, Box, Button, Container, TextField } from "@mui/material";
import HeaderNavbar from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useState } from "react";
import {
  allCitiesMetadata,
  allCoursesMetadata,
  allEducationalLevelslMetadata,
  allEducationalMetadata,
  allInstitutesMetadata,
  allSkillslMetadata,
} from "./DashboardPage.controller";
import style from "./style";
import { CompiledFields, ResponseElementObjectData } from "./types";
import useApi from "../../utilities/useApi";
import SkillsContainer from "../../components/SkillsContainer";

const DashboardPage = () => {
  const [selectedInput, setSelectedInput] = useState<CompiledFields>({});

  const allEducationalData = useApi(allEducationalMetadata);
  const allEducationalLevelsData = useApi(allEducationalLevelslMetadata);
  const allSkillslData = useApi(allSkillslMetadata);
  const allCitiesData = useApi(allCitiesMetadata);
  const allInstitutesData = useApi(allInstitutesMetadata);
  const allCoursessData = useApi(allCoursesMetadata);

  return (
    <>
      <HeaderNavbar />
      <Container maxWidth="xl" sx={style.container}>
        <Box display={"flex"} flexDirection={"row"} mb={2}>
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allSkillslData?.data?.final_object.map(
                  (tecnologyData: ResponseElementObjectData) =>
                    tecnologyData?.name
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
          </Box>
          <Box sx={{ mr: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allEducationalData?.data?.final_object.map(
                  (certificationData: ResponseElementObjectData) =>
                    certificationData?.name
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
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allCitiesData?.data?.final_object.map(
                  (cityData: string[]) => cityData
                ) || [""]
              }
              onChange={(_, newValue) =>
                setSelectedInput({
                  ...selectedInput,
                  city: String(newValue),
                })
              }
              noOptionsText={
                <Button>{t("pages.dashboard.search.noOptions")}</Button>
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("pages.dashboard.search.cities")}
                />
              )}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allEducationalLevelsData?.data?.final_object.map(
                  (educationalLevel: ResponseElementObjectData) =>
                    educationalLevel?.name
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
                  label={t("pages.dashboard.search.educationalLevels")}
                />
              )}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allInstitutesData?.data?.final_object.map(
                  (educationalLevel: ResponseElementObjectData) =>
                    educationalLevel?.name
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
                  label={t("pages.dashboard.search.institute")}
                />
              )}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                allCoursessData?.data?.final_object.map(
                  (educationalLevel: ResponseElementObjectData) =>
                    educationalLevel?.name
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
                  label={t("pages.dashboard.search.course")}
                />
              )}
            />
          </Box>
        </Box>
      </Container>
      <SkillsContainer skills={["Javascript", "MongoDB"]} />
    </>
  );
};

export default DashboardPage;
