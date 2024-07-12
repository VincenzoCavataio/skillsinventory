import { Box, Button, styled } from "@mui/material";
import { GenericAdd } from "../GenericAdd";
import { useState } from "react";
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
  updateCertRowsNumber,
  updateEduRowsNumber,
  updateSkillRowsNumber,
} from "../../../../redux/adderSlice";

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
  const dispatch = useDispatch();
  console.log(rowsStore);
  const [rowsSkillTable, setRowsSkillTable] = useState<SkillRowType[]>([]);
  const [rowsEduTable, setRowsEduTable] = useState<EduRowType[]>([]);
  const [rowsCertTable, setRowsCertTable] = useState<CertRowType[]>([]);
  const [lastId, setLastId] = useState<number>(rowsStore.skillRows);
  // const lastId = rowsStore.skillRows;
  const [lastId2, setLastId2] = useState<number>(rowsStore.eduRows);
  const [lastId3, setLastId3] = useState<number>(rowsStore.certRows);
  const handleSkillAddClick = () => {
    const newId = lastId + 1;
    setLastId(newId);
    dispatch(updateSkillRowsNumber(newId));
    setRowsSkillTable((prevRows) => [
      ...prevRows,
      {
        nameTxtField: "",
        levelInput: 1,
        expInput: 1,
        noteTxtField: "",
        // id: newId,
        id: rowsStore.skillRows,
      },
    ]);
  };

  const handleEduAddClick = () => {
    const newId2 = lastId2 + 1;
    setLastId2(newId2);
    dispatch(updateEduRowsNumber(newId2));
    setRowsEduTable((prevRows) => [
      ...prevRows,
      {
        courseTxtField: "",
        levelMenu: "",
        instChckbx: false,
        itTxtField: "",
        cityTxtField: "",
        // id: newId2,
        id: rowsStore.eduRows,
      },
    ]);
  };
  const handleCertAddClick = () => {
    const newId3 = lastId3 + 1;
    setLastId3(newId3);
    dispatch(updateCertRowsNumber(newId3));
    setRowsCertTable((prevRows) => [
      ...prevRows,
      {
        issuerTxtField: "",
        nameTxtField: "",
        itChckbx: true,
        codeTxtField: "",
        // id: newId3,
        id: rowsStore.certRows,
        releaseDate: "",
        expDate: "",
      },
    ]);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      // sx={{ overflowX: "auto" }}
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
        {rowsSkillTable.length > 0 && (
          <SkillAdder
            rows={rowsSkillTable}
            setRowsSkillTable={setRowsSkillTable}
          />
        )}
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3, maxWidth: "725.33px" }}>
        <GenericAdd label={eduAdd} onClick={handleEduAddClick} />
        {rowsEduTable.length > 0 && (
          <EduAdder rows={rowsEduTable} setRowsEduTable={setRowsEduTable} />
        )}
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3, maxWidth: "725.33px" }}>
        <GenericAdd label={certAdd} onClick={handleCertAddClick} />
        {rowsCertTable.length > 0 && (
          <CertAdder rows={rowsCertTable} setRowsCertTable={setRowsCertTable} />
        )}
      </Box>
      {rowsCertTable.length > 0 ||
      rowsEduTable.length > 0 ||
      rowsSkillTable.length > 0 ? (
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
