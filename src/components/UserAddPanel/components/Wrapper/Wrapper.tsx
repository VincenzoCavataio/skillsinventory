import { Box, Button, styled } from "@mui/material";
import { GenericAdd } from "../GenericAdd";
import { useState } from "react";
import { SkillAdder } from "../SkillAdder";
import { EduAdder } from "../EduAdder";
import { CertAdder } from "../CertAdder";
import { CertRowType, EduRowType, SkillRowType } from "../../types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTranslation } from "react-i18next";

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

  const [rowsSkillTable, setRowsSkillTable] = useState<SkillRowType[]>([]);
  const [rowsEduTable, setRowsEduTable] = useState<EduRowType[]>([]);
  const [rowsCertTable, setRowsCertTable] = useState<CertRowType[]>([]);
  const [lastId, setLastId] = useState<number>(0);
  const [lastId2, setLastId2] = useState<number>(0);
  const [lastId3, setLastId3] = useState<number>(0);
  const handleSkillAddClick = () => {
    const newId = lastId + 1;
    setLastId(newId);
    setRowsSkillTable((prevRows) => [
      ...prevRows,
      {
        nameTxtField: "",
        levelInput: 1,
        expInput: 1,
        noteTxtField: "",
        id: newId,
      },
    ]);
  };

  const handleEduAddClick = () => {
    const newId2 = lastId2 + 1;
    setLastId2(newId2);
    setRowsEduTable((prevRows) => [
      ...prevRows,
      {
        courseTxtField: "",
        levelMenu: "",
        instChckbx: false,
        itTxtField: "",
        cityTxtField: "",
        id: newId2,
      },
    ]);
  };
  const handleCertAddClick = () => {
    const newId3 = lastId3 + 1;
    setLastId3(newId3);
    setRowsCertTable((prevRows) => [
      ...prevRows,
      {
        issuerTxtField: "",
        nameTxtField: "",
        itChckbx: true,
        codeTxtField: "",
        id: newId3,
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
        }}
      >
        {t("pages.userPage.tables.uploadCV")}
        <VisuallyHiddenInput type="file" />
      </Button>
      <Box sx={{ width: "100%", marginTop: 2, paddingBottom: 3 }}>
        <GenericAdd label={skillAdd} onClick={handleSkillAddClick} />
        {rowsSkillTable.length > 0 && (
          <SkillAdder
            rows={rowsSkillTable}
            setRowsSkillTable={setRowsSkillTable}
          />
        )}
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3 }}>
        <GenericAdd label={eduAdd} onClick={handleEduAddClick} />
        {rowsEduTable.length > 0 && (
          <EduAdder rows={rowsEduTable} setRowsEduTable={setRowsEduTable} />
        )}
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3 }}>
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
            backgroundColor: "#8cbe2d",
            color: "white",
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
