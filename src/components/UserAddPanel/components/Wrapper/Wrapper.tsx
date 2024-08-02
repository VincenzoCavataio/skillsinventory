import { Box, Button, styled } from "@mui/material";
import { GenericAdd } from "../GenericAdd";
import { SkillAdder } from "../SkillAdder";
import { EduAdder } from "../EduAdder";
import { CertAdder } from "../CertAdder";
import { CertRowType, EduRowType, SkillRowType } from "../../types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTranslation } from "react-i18next";
import { NEXTRE_ENG } from "../../../../common/commonColors";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  updateCertRowsData,
  updateCertRowsNumber,
  updateEduRowsData,
  updateEduRowsNumber,
  updateSkillRowsData,
  updateSkillRowsNumber,
} from "../../../../redux/adderSlice";
import { checkboxSkillsSelector } from "../../../../redux/checkboxSkillsSelection";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Wrapper = () => {
  const { t } = useTranslation();
  const skillAdd: string = t("pages.userPage.tables.addSkills");
  const certAdd: string = t("pages.userPage.tables.addCert");
  const eduAdd: string = t("pages.userPage.tables.addEdu");
  const rowsStore = useSelector((state: ReduxStore) => state.rowsManager);
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);

  const dispatch = useDispatch();

  const getMaxSkillId = () => {
    if (rowsStore.skillRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.skillRowsData.map((row) => row.id));
  };
  const getMaxEduId = () => {
    if (rowsStore.eduRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.eduRowsData.map((row) => row.id));
  };
  const getMaxCertId = () => {
    if (rowsStore.certRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.certRowsData.map((row) => row.id));
  };
  const handleSkillAddClick = () => {
    const oldRows = getMaxSkillId();
    const newId = oldRows + 1;

    dispatch(updateSkillRowsNumber(newId));
    const skillBlankData: SkillRowType = {
      id: newId,
      nameTxtField: "",
      levelInput: 1,
      expInput: 1,
      noteTxtField: "",
    };
    dispatch(updateSkillRowsData(skillBlankData));
  };

  const handleEduAddClick = () => {
    const oldRows = getMaxEduId();
    const newId = oldRows + 1;
    dispatch(updateEduRowsNumber(newId));
    const eduBlankData: EduRowType = {
      id: newId,
      courseTxtField: "",
      levelMenu: "",
      itChckbx: false,
      instTxtField: "",
      cityTxtField: "",
    };
    dispatch(updateEduRowsData(eduBlankData));
  };

  const handleCertAddClick = () => {
    const oldRows = getMaxCertId();
    const newId = oldRows + 1;
    dispatch(updateCertRowsNumber(newId));
    const certBlankData: CertRowType = {
      id: newId,
      nameTxtField: "",
      issuerTxtField: "",
      itChckbx: false,
      expDate: "",
      releaseDate: "",
      codeTxtField: "",
    };
    dispatch(updateCertRowsData(certBlankData));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={2}
      margin={2}
    >
      <Button
        startIcon={<CloudUploadIcon />}
        component="label"
        role={undefined}
        variant="outlined"
        sx={{
          width: "100%",
          marginTop: 3,
          boxShadow: "none",
          padding: 2,
          borderRadius: 2,
        }}
      >
        {t("pages.userPage.tables.uploadCV")}
        <VisuallyHiddenInput type="file" />
      </Button>

      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          paddingBottom: 3,
        }}
      >
        <GenericAdd label={skillAdd} onClick={handleSkillAddClick} />
        <SkillAdder />
      </Box>

      <Box sx={{ width: "100%", paddingBottom: 3, maxWidth: "725.33px" }}>
        <GenericAdd label={eduAdd} onClick={handleEduAddClick} />
        {rowsStore.eduRows > 0 && <EduAdder />}
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3, maxWidth: "725.33px" }}>
        <GenericAdd label={certAdd} onClick={handleCertAddClick} />
        {rowsStore.certRows > 0 && <CertAdder />}
      </Box>
      {checkedSkillsFromStore.length > 0 ? (
        <Button
          variant="contained"
          sx={{
            width: "100%",
            marginBottom: 3,
            backgroundColor: NEXTRE_ENG,
            color: "white",
            boxShadow: "none",
          }}
        >
          {t("pages.userPage.tables.updateProfile")}
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
};
