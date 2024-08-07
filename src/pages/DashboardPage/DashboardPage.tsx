import { Box, Container, TextField } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { AddSkillsWindows } from "../../components/AddSkillsWindow";
import { updateFilter } from "../../redux/searchSlice";
import { InputChecks2 } from "../../components/InputCheck2";
import { SkillTable } from "../../components/SkillTableBuild";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { CompiledFieldsWithID } from "./types";
import { ReduxStore } from "../../redux/types";

export const DashboardPage = () => {
  const { t } = useTranslation();
  const [selectedInput, setSelectedInput] = useState<CompiledFieldsWithID>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterStore = useSelector((state: ReduxStore) => state.search);

  useEffect(() => {
    dispatch(updateFilter({ filters: selectedInput }));
  }, [dispatch, selectedInput]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    //TODO: magari aggiungere un controllo con una chiamata di healthcheck (da parlare con BE)
    if (!token) {
      //TODO: si attiva la modale
      /** QUI LA MODALE */

      //TODO: spostare il navigate dentro il tasto conferma della modal
      navigate(PAGES.loginPage);
    }
    //TODO: al posto di spararti verso login, magari appare una modalina che dice 'utente non loggato, clicca qui per effettuare login', al click del bottone, navigate verso loginPage
  }, [navigate]);

  // TODO: aggiungere fallback, forse meglio dentro UseApi
  const allEducationalData = useApi(allEducationalMetadata(filterStore));
  const allEducationalLevelsData = useApi(allEducationalLevelslMetadata);
  const allSkillslData = useApi(allSkillslMetadata);
  const allCitiesData = useApi(allCitiesMetadata);
  const allInstitutesData = useApi(allInstitutesMetadata);
  const allCoursessData = useApi(allCoursesMetadata);
  //passare ad ognuno di questi inviare i filtri già selezionati,
  //TODO: forse non serve più, assicurarsene ed eventualmente eliminarlo.  --- dovrebbe funzionare tutto commentandolo, chiedere se effettivamente non serve quindi
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Box mb={2}>
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
          <AddSkillsWindows data={allSkillslData?.data ?? []} />
          {/** HO TENTATO DI SISTEMARE L'ERRORE MA è DENTRO */}
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
                //TODO: capire perché danno errori (forse tipi sbagliati?)
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
            position="relative"
          >
            <ButtonsContainer setSelectedInput={setSelectedInput} />
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          ...style.container,
          p: "0 !important",
          overflow: "hidden",
        }}
      >
        <SkillTable />
      </Container>
    </Box>
  );
};
