import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedEdus, ReduxStore } from "./types";

const initialState: CheckedEdus = {
  checkedEdus: [],
};

const addEducationToDbSlice = createSlice({
  name: "addEducationToDbSlice",
  initialState,
  reducers: {
    updateEducationCourse: (state, action) => {
      const { id, idTemp, course } = action.payload;
      if (idTemp) {
        const education = state.checkedEdus.find(
          (education) => education.idTemp === idTemp
        );
        if (education) {
          education.course = course;
        }
      } else {
        const education = state.checkedEdus.find(
          (education) => education.id === id
        );

        if (education) {
          education.course = course;
        }
      }
    },
    updateEducationLevel: (state, action) => {
      const { id, idTemp, level } = action.payload;
      if (idTemp) {
        const education = state.checkedEdus.find(
          (education) => education.idTemp === idTemp
        );
        if (education) {
          education.level = level;
        }
      } else {
        const education = state.checkedEdus.find(
          (education) => education.id === id
        );

        if (education) {
          education.level = level;
        }
      }
    },
    updateEducationIt: (state, action) => {
      const { id, idTemp, it } = action.payload;
      if (idTemp) {
        const education = state.checkedEdus.find(
          (education) => education.idTemp === idTemp
        );
        if (education) {
          education.it = it;
        }
      } else {
        const education = state.checkedEdus.find(
          (education) => education.id === id
        );

        if (education) {
          education.it = it;
        }
      }
    },
    updateEducationInstitute: (state, action) => {
      const { id, idTemp, institute } = action.payload;
      if (idTemp) {
        const education = state.checkedEdus.find(
          (education) => education.idTemp === idTemp
        );
        if (education) {
          education.institute = institute;
        }
      } else {
        const education = state.checkedEdus.find(
          (education) => education.id === id
        );

        if (education) {
          education.institute = institute;
        }
      }
    },
    updateEducationCity: (state, action) => {
      const { id, idTemp, city } = action.payload;
      if (idTemp) {
        const education = state.checkedEdus.find(
          (education) => education.idTemp === idTemp
        );
        if (education) {
          education.city = city;
        }
      } else {
        const education = state.checkedEdus.find(
          (education) => education.id === id
        );

        if (education) {
          education.city = city;
        }
      }
    },
    updateCheckedEducationDb: (state, action) => {
      const IDs = [...state.checkedEdus.map((edu) => edu.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedEdus = state.checkedEdus.filter(
          (edu) => edu.id !== action.payload.id
        );
      } else {
        state.checkedEdus = [...state.checkedEdus, action.payload];
      }
    },
    removeEducationDb: (state, action) => {
      state.checkedEdus = state.checkedEdus.filter((edu) => {
        if (action.payload.idTemp !== undefined) {
          return edu.idTemp !== action.payload.idTemp;
        } else {
          return edu.id !== action.payload.id;
        }
      });
    },
    resetCheckedEducationDb: (state) => {
      state.checkedEdus = initialState.checkedEdus;
    },
    addEmptyEducationDb: (state, action) => {
      state.checkedEdus = [...state.checkedEdus, action.payload];
    },
  },
});

export const dbEducationSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.toDbEducation.checkedEdus
);

export default addEducationToDbSlice.reducer;
export const {
  updateEducationCourse,
  updateEducationLevel,
  updateEducationIt,
  updateEducationCity,
  updateEducationInstitute,
  updateCheckedEducationDb,
  removeEducationDb,
  resetCheckedEducationDb,
  addEmptyEducationDb,
} = addEducationToDbSlice.actions;
