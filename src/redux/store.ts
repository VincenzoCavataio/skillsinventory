import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";
import userDataSlice from "./userDataSlice";
import paginationSlice from "./paginationSlice";
import sortingSlice from "./sortingSlice";
import andOrSlice from "./andOrSlice";
import langSlices from "./langSlices";
import checkboxSlice from "./checkboxSlice";
import editProfileSlice from "./editProfileSlice";
import checkboxSkillsSelection from "./checkboxSkillsSelection";
import checkboxEdusSelection from "./checkboxEdusSelection";
import checkboxCertsSelection from "./checkboxCertsSelection";
import loginStatus from "./loginStatus";
import isEditMode from "./isEditMode";
import showModal from "./showGenericModal";
import addSkillToDbSlice from "./addSkillToDbSlice";
import addEducationToDbSlice from "./addEducationToDbSlice";
import addCertificationToDbSlice from "./addCertificationToDbSlice";

export const store = configureStore({
  reducer: {
    skills: skillsSlice,
    search: searchSlice,
    user: userDataSlice,
    pagination: paginationSlice,
    sorting: sortingSlice,
    andOrStore: andOrSlice,
    langManager: langSlices,
    checkboxManager: checkboxSlice,
    editManager: editProfileSlice,
    checkedSkills: checkboxSkillsSelection,
    checkedEdus: checkboxEdusSelection,
    checkedCerts: checkboxCertsSelection,
    loginStatus: loginStatus,
    isEditMode: isEditMode,
    showModal: showModal,
    toDbSkills: addSkillToDbSlice,
    toDbEducation: addEducationToDbSlice,
    toDbCertification: addCertificationToDbSlice,
  },
});
