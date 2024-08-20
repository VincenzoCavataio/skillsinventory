import { Box, Button, styled } from "@mui/material";
import { GenericAdd } from "../GenericAdd";
import { SkillAdder } from "../SkillAdder";
import { EduAdder } from "../EduAdder";
import { CertAdder } from "../CertAdder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTranslation } from "react-i18next";
import { PRIMARY_COLOR } from "../../../../common/commonColors";
import { useDispatch, useSelector } from "react-redux";
import { CheckedCert, CheckedEdu, CheckedSkill } from "../../../../redux/types";

import {
  addEmptySkill,
  checkboxSkillsSelector,
} from "../../../../redux/checkboxSkillsSelection";
import {
  addEmptyEdu,
  checkboxEdusSelector,
} from "../../../../redux/checkboxEdusSelection";
import {
  addEmptyCert,
  checkboxCertsSelector,
} from "../../../../redux/checkboxCertsSelection";

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
let skillEmptyRows: number = 0;
let eduEmptyRows: number = 0;
let certEmptyRows: number = 0;

export const Wrapper = () => {
  const { t } = useTranslation();
  const skillAdd: string = t("pages.userPage.tables.addSkills");
  const certAdd: string = t("pages.userPage.tables.addCert");
  const eduAdd: string = t("pages.userPage.tables.addEdu");
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);
  const checkedEdusFromStore = useSelector(checkboxEdusSelector);
  const checkedCertsFromStore = useSelector(checkboxCertsSelector);

  const dispatch = useDispatch();

  const handleSkillAddClick = () => {
    skillEmptyRows++;
    const skillBlankData: CheckedSkill = {
      id: "",
      name: "",
      level: "",
      exp: "",
      note: "",
      idTemp: skillEmptyRows,
    };

    dispatch(addEmptySkill(skillBlankData));
  };

  const handleEduAddClick = () => {
    eduEmptyRows++;
    const eduBlankData: CheckedEdu = {
      id: "",
      course: "",
      level: "",
      it: "",
      institute: "",
      city: "",
      idTemp: eduEmptyRows,
    };

    dispatch(addEmptyEdu(eduBlankData));
  };

  const handleCertAddClick = () => {
    certEmptyRows++;
    const certBlankData: CheckedCert = {
      id: "",
      name: "",
      issuer: "",
      it: "",
      code: "",
      releaseDate: "",
      expDate: "",
      idTemp: certEmptyRows,
    };

    dispatch(addEmptyCert(certBlankData));
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
        <EduAdder />
      </Box>
      <Box sx={{ width: "100%", paddingBottom: 3, maxWidth: "725.33px" }}>
        <GenericAdd label={certAdd} onClick={handleCertAddClick} />
        <CertAdder />
      </Box>
      {checkedSkillsFromStore.length > 0 ||
      checkedEdusFromStore.length > 0 ||
      checkedCertsFromStore.length > 0 ? (
        <Button
          variant="contained"
          sx={{
            width: "100%",
            marginBottom: 3,
            backgroundColor: PRIMARY_COLOR,
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
