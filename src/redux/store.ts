import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";
import paginationSlice from "./paginationSlice";
import sortingSlice from "./sortingSlice";
import andOrSlice from "./andOrSlice";
import langSlices from "./langSlices";
import checkboxSlice from "./checkboxSlice";
import editProfileSlice from "./editProfileSlice";
import adderSlice from "./adderSlice";
import checkboxSkillsSelection from "./checkboxSkillsSelection";
import checkboxEdusSelection from "./checkboxEdusSelection";
import checkboxCertsSelection from "./checkboxCertsSelection";

export const store = configureStore({
  reducer: {
    skills: skillsSlice,
    search: searchSlice,
    user: userSlice,
    pagination: paginationSlice,
    sorting: sortingSlice,
    andOrStore: andOrSlice,
    langManager: langSlices,
    checkboxManager: checkboxSlice,
    editManager: editProfileSlice,
    rowsManager: adderSlice,
    checkedSkills: checkboxSkillsSelection,
    checkedEdus: checkboxEdusSelection,
    checkedCerts: checkboxCertsSelection,
  },
});
