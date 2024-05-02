import { Autocomplete, Box, Button, Container, TextField } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  allCitiesMetadata,
  allCoursesMetadata,
  allEducationalLevelslMetadata,
  allEducationalMetadata,
  allInstitutesMetadata,
  allSkillslMetadata,
} from "./DashboardPage.controller";
import { style } from "./style";
import { CompiledFields, ResponseElementObjectData } from "./types";
import useApi from "../../utilities/useApi";
import { addSkill } from "../../redux/filtersSlice";
import InputChecks from "../../components/InputCheck/InputCheck";
import { InputSelect } from "../../components/InputSelect/InputSelect";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { SkillsTable } from "../../components/SkillsTable/SkillsTable";
import { AddSkillsWindows } from "../../components/AddSkillsWindow";

export const DashboardPage = () => {
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

  return (
    <>
      <HeaderNavbar />
      <Container
        maxWidth="xl"
        sx={{
          ...style.container,
          overflow: "hidden",
          height: 210,
        }}
      >
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <AddSkillsWindows data={allSkillslData?.data} />
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          width={"100%"}
          mb={2}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
            width={600}
          >
            <Box sx={{ m: 0, mt: 0 }}>
              <TextField
                id="outlined-basic"
                label={t("pages.dashboard.search.name")}
                variant="outlined"
                sx={{ width: 180 }}
              />
            </Box>
            <Box sx={{ mr: 0, mb: 2 }}>
              <InputChecks
                data={allEducationalData?.data}
                label={"pages.dashboard.search.certification"}
                width={180}
              />
            </Box>
            <Box sx={{ mr: 0, mb: 2 }}>
              <InputChecks
                width={180}
                data={allCitiesData?.data}
                label={"pages.dashboard.search.cities"}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
            width={600}
            mb={2}
          >
            <Box display={"flex"} flexDirection={"column"} sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allEducationalLevelsData?.data}
                label={t("pages.dashboard.search.educationalLevels")}
                objKey={"educationalLevel"}
                width={180}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allInstitutesData?.data}
                label={t("pages.dashboard.search.institute")}
                objKey={"institute"}
                width={180}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                  allCoursessData?.data?.final_object
                    ? allCoursessData.data.final_object.map(
                        (educationalLevel: ResponseElementObjectData) =>
                          educationalLevel?.name
                      )
                    : []
                }
                onChange={(_, newValue) =>
                  setSelectedInput({ ...selectedInput, course: newValue || "" })
                }
                noOptionsText={
                  <Button>{t("pages.dashboard.search.noOptions")}</Button>
                }
                sx={{ width: 180 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("pages.dashboard.search.course")}
                  />
                )}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
            width={520}
            mb={2}
          >
            <ButtonsContainer
              setSelectedInput={setSelectedInput}
              submit={setIsOpen}
            />
          </Box>
        </Box>
      </Container>
      {isOpen && (
        <Container maxWidth="xl" sx={style.container}>
          <SkillsTable />
        </Container>
      )}
    </>
  );
};
