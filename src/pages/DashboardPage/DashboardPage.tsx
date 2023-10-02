import { Autocomplete, Box, Button, Container, TextField } from "@mui/material";
import HeaderNavbar from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { addSkill } from "../../redux/filtersSlice";
import InputChecks from "../../components/InputCheck/InputCheck";
import InputSelect from "../../components/InputSelect/InputSelect";
import ButtonsContainer from "../../components/ButtonsContainer";
import Searchbar from "../../components/HeaderNavbar/Searchbar";
import SkillsTable from "../../components/SkillsTable/SkillsTable";

const DashboardPage = () => {
  const [selectedInput, setSelectedInput] = useState<CompiledFields>({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSkill({ label: selectedInput.skill, levelType: "from" }));
  }, [dispatch, selectedInput.skill]);

  const allEducationalData = useApi(allEducationalMetadata);
  const allEducationalLevelsData = useApi(allEducationalLevelslMetadata);
  const allSkillslData = useApi(allSkillslMetadata);
  const allCitiesData = useApi(allCitiesMetadata);
  const allInstitutesData = useApi(allInstitutesMetadata);
  const allCoursessData = useApi(allCoursesMetadata);

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <HeaderNavbar />
      <Container maxWidth="xl" sx={style.container}>
        <Box display={"flex"} flexDirection={"row"} mb={2}>
          {/* <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Searchbar />
          </Box> */}
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <InputSelect
              selectedInput={selectedInput}
              setSelectedInput={setSelectedInput}
              data={allSkillslData?.data}
              label={t("pages.dashboard.search.selectSkills")}
              objKey={"skill"}
            />
          </Box>
          <Box sx={{ mr: 2 }}>
            <InputChecks
              data={allEducationalData?.data}
              label={"pages.dashboard.search.certification"}
            />
          </Box>
          <Box>
            <InputChecks
              data={allCitiesData?.data}
              label={"pages.dashboard.search.cities"}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          {/* <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <Searchbar />
          </Box> */}
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <InputSelect
              selectedInput={selectedInput}
              setSelectedInput={setSelectedInput}
              data={allEducationalLevelsData?.data}
              label={t("pages.dashboard.search.educationalLevels")}
              objKey={"educationalLevel"}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
            <InputSelect
              selectedInput={selectedInput}
              setSelectedInput={setSelectedInput}
              data={allInstitutesData?.data}
              label={t("pages.dashboard.search.institute")}
              objKey={"institute"}
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
                setSelectedInput({ ...selectedInput, course: newValue || "" })
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
      <SkillsContainer />
      <ButtonsContainer
        setSelectedInput={setSelectedInput}
        submit={setIsOpen}
      />
      {isOpen && (
        <Container maxWidth="xl" sx={style.container}>
          <SkillsTable />
        </Container>
      )}
    </>
  );
};

export default DashboardPage;
