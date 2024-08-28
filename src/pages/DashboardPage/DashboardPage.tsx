import { Box, CircularProgress, Container, TextField } from "@mui/material";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useRef, useState } from "react";
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
import {
  searchFiltersNameSelector,
  updateFilter,
} from "../../redux/searchSlice";
import { InputChecks2 } from "../../components/InputCheck2";
import { SkillTable } from "../../components/SkillTableBuild";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";
import { CompiledFieldsWithID } from "./types";
import { ReduxStore } from "../../redux/types";
import { paginationPageStart } from "../../redux/paginationSlice";
import { isTokenExpired } from "../../utilities/isTokenExpired/isTokenExpired";
import {
  isModalVisibleSelector,
  showModal,
} from "../../redux/showGenericModal";

export const DashboardPage = () => {
  const { t } = useTranslation();
  const NameInputRef = useRef<HTMLInputElement>(null);
  const [selectedInput, setSelectedInput] = useState<CompiledFieldsWithID>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useRef(localStorage.getItem("authToken"));
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const fullName = useSelector(searchFiltersNameSelector);
  const isModalVisible = useSelector(isModalVisibleSelector);
  const refreshToken = useRef(localStorage.getItem("refreshToken"));

  /** If the modal is visible, blur the background */
  const BLURRED_BG = isModalVisible ? "blur(10px)" : "none";

  useEffect(() => {
    if (!token?.current) {
      navigate(PAGES.loginPage);
    }
  }, [navigate]);

  useEffect(() => {
    if (Object.keys(selectedInput).length) {
      dispatch(paginationPageStart(1));
      dispatch(updateFilter({ filters: selectedInput }));
    }
  }, [selectedInput, dispatch]);

  useEffect(() => {
    if (refreshToken.current) {
      const isRefreshTokenExpired = isTokenExpired({
        token: refreshToken.current!,
      });
      dispatch(showModal(isRefreshTokenExpired));
    }
  }, [dispatch, navigate]);

  // TODO: Da capire se tenerlo oppure no. Con CTRL + F si mette in focus l'input 'Nome e Cognome'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F3" || (e.ctrlKey && e.key === "f")) {
        if (
          NameInputRef.current &&
          NameInputRef.current !== document.activeElement
        ) {
          e.preventDefault();
          NameInputRef.current.focus();
        } else {
          e.preventDefault();
          return true;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const allEducationalData = useApi(allEducationalMetadata(filterStore));
  const allEducationalLevelsData = useApi(allEducationalLevelslMetadata);
  const allSkillslData = useApi(allSkillslMetadata);
  const allCitiesData = useApi(allCitiesMetadata);
  const allInstitutesData = useApi(allInstitutesMetadata);
  const allCoursessData = useApi(allCoursesMetadata);

  const handleInputChange = useCallback((key: string, value: unknown) => {
    setSelectedInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <Box mb={2} sx={{ filter: BLURRED_BG }}>
      <HeaderNavbar />
      <Container
        maxWidth="xl"
        sx={{ ...style.container, overflow: "hidden", height: 210 }}
      >
        <Box position="relative" width="100%" height="100%">
          {allSkillslData?.data ? (
            <AddSkillsWindows data={allSkillslData.data} />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress />
            </Box>
          )}
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
                inputRef={NameInputRef}
                label={t("pages.dashboard.search.name")}
                variant="outlined"
                value={fullName}
                sx={{ width: 180 }}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
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
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="nowrap"
            maxWidth={600}
            mb={2}
            gap={2}
          >
            <Box display="flex" flexDirection="column" sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allEducationalLevelsData?.data}
                label={t("pages.dashboard.search.educationalLevels")}
                objKey="educationalLevel"
                width={180}
              />
            </Box>
            <Box display="flex" flexDirection="column" sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allInstitutesData?.data}
                label={t("pages.dashboard.search.institute")}
                objKey="institute"
                width={180}
              />
            </Box>
            <Box display="flex" flexDirection="column" sx={{ mr: 0 }}>
              <InputSelect
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                data={allCoursessData?.data}
                label={t("pages.dashboard.search.course")}
                objKey="course"
                width={180}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="nowrap"
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
        sx={{ ...style.container, p: "0 !important", overflow: "hidden" }}
      >
        <SkillTable />
      </Container>
    </Box>
  );
};
