import { Box } from "@mui/material";
import { GenericAdd } from "../GenericAdd";
import { useState } from "react";
import { SkillAdder } from "../SkillAdder";
import { EduAdder } from "../EduAdder";
import { CertAdder } from "../CertAdder";
import { CertRowType, EduRowType, SkillRowType } from "../../types";

export const Wrapper = () => {
  const skillAdd: string = "Add Skill";
  const certAdd: string = "Add Certifications";
  const eduAdd: string = "Add Education";

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
    </Box>
  );
};
