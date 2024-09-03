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
import addSkillToBeSentSlice from "./addSkillToBeSentSlice";
import addEducationToBeSentSlice from "./addEducationToBeSentSlice";
import addCertificationToBeSentSlice from "./addCertificationToBeSentSlice";

export const store = configureStore({
  reducer: {
    /** slice for skills */
    skills: skillsSlice,
    /** slice for search parameters */
    search: searchSlice,
    /** slice for user informations */
    user: userDataSlice,
    /** slice for pagination metadata */
    pagination: paginationSlice,
    /** slice for filtered table sorting */
    sorting: sortingSlice,
    /** slice for and/or parameter from search */
    andOrStore: andOrSlice,
    /*** slice for language selection */
    langManager: langSlices,
    /** slice for checked users in main table in dashboard page */
    checkboxManager: checkboxSlice,
    /** slice for manage changes during edit mode in profile page */
    editManager: editProfileSlice,
    /** slice for checked skills in profile page */
    checkedSkills: checkboxSkillsSelection,
    /** slice for checked educations in profile page */
    checkedEdus: checkboxEdusSelection,
    /** slice for checked certifications in profile page */
    checkedCerts: checkboxCertsSelection,
    /** slice for login status */
    loginStatus: loginStatus,
    /** slice to activate/deactivate edit mode in profile page */
    isEditMode: isEditMode,
    /** slice to show/hide generic modal */
    showModal: showModal,
    /** slice for skills to be sent to backend */
    toBeSentSkills: addSkillToBeSentSlice,
    /** slice for educations to be sent to backend */
    toBeSentEducation: addEducationToBeSentSlice,
    /** slice for certifications to be sent to backend */
    toBeSentCertification: addCertificationToBeSentSlice,
  },
});
