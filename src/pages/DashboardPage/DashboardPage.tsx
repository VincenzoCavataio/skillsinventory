import { Box, Container, TextField } from "@mui/material";
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
import useApi from "../../utilities/useApi";
import { InputChecks } from "../../components/InputCheck/InputCheck";
import { InputSelect } from "../../components/InputSelect/InputSelect";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { SkillsTable } from "../../components/SkillsTable/SkillsTable";
import { AddSkillsWindows } from "../../components/AddSkillsWindow";
import { updateFilter } from "../../redux/searchSlice";
import { InputChecks2 } from "../../components/InputCheck2";

type Values = {
  value: string;
  id: number;
};

type CompiledFieldsWithID = {
  //try
  id?: number;
  name?: string;
  selected?: boolean;
  selectedToBeDeleted?: boolean;
  //try
  fullName?: string;
  certification?: Values;
  city?: string[];
  educationalLevel?: Values;
  institute?: Values;
  course?: Values;
};

export const DashboardPage = () => {
  const [selectedInput, setSelectedInput] = useState<CompiledFieldsWithID>({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter({ filters: selectedInput }));
  }, [dispatch, selectedInput]);

  // TODO: aggiungere fallback, forse meglio dentro UseApi
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
        <Box position="relative" width="100%" height="100%">
          <AddSkillsWindows data={allSkillslData?.data} />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          width="100%"
          mb={2}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="nowrap"
            maxWidth={600}
            gap={2}
          >
            <Box sx={{ m: 0, mt: 0 }}>
              <TextField
                id="outlined-basic"
                label={t("pages.dashboard.search.name")}
                variant="outlined"
                sx={{ width: 180 }}
                onChange={(e) => {
                  setSelectedInput({
                    ...selectedInput,
                    fullName: e.target.value,
                  });
                }}
              />
            </Box>
            <Box sx={{ mr: 0, mb: 2 }}>
              <InputChecks2
                data={allEducationalData?.data}
                label={t("pages.dashboard.search.certification")}
                width={180}
                setSelectedInput={setSelectedInput}
                selectedInput={selectedInput}
                objKey="certification"
              />
            </Box>
            <Box sx={{ mr: 0, mb: 2 }}>
              <InputChecks
                width={180}
                data={allCitiesData?.data}
                label={t("pages.dashboard.search.cities")}
                setSelectedInput={setSelectedInput}
                selectedInput={selectedInput}
                objKey="city"
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
            maxWidth={600}
            mb={2}
            gap={2}
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
            <Box display={"flex"} flexDirection={"column"} sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allCoursessData?.data}
                label={t("pages.dashboard.search.course")}
                objKey={"course"}
                width={180}
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
        <Container
          maxWidth="xl"
          sx={{ ...style.container, p: "0 !important", overflow: "hidden" }}
        >
          <SkillsTable />
        </Container>
      )}
    </>
  );
};
