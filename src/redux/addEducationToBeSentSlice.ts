import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedEdus, ReduxStore } from "./types";

const initialState: CheckedEdus = {
  checkedEdus: [],
};

const addEducationToBeSentSlice = createSlice({
  name: "addEducationToBeSentSlice",
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
      const education = idTemp
        ? state.checkedEdus.find((education) => education.idTemp === idTemp)
        : state.checkedEdus.find((education) => education.id === id);

      if (education) {
        education.it = it;
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
    updateCheckedEducationToBeSent: (state, action) => {
      const IDs = [...state.checkedEdus.map((edu) => edu.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedEdus = state.checkedEdus.filter(
          (edu) => edu.id !== action.payload.id
        );
      } else {
        state.checkedEdus = [...state.checkedEdus, action.payload];
      }
    },
    removeEducationToBeSent: (state, action) => {
      state.checkedEdus = state.checkedEdus.filter((edu) => {
        if (action.payload.idTemp !== undefined) {
          return edu.idTemp !== action.payload.idTemp;
        } else {
          return edu.id !== action.payload.id;
        }
      });
    },
    resetCheckedEducationToBeSent: (state) => {
      state.checkedEdus = initialState.checkedEdus;
    },
    addEmptyEducationToBeSent: (state, action) => {
      state.checkedEdus = [...state.checkedEdus, action.payload];
    },
  },
});

export const toBeSentEducationSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.toBeSentEducation.checkedEdus
);

export default addEducationToBeSentSlice.reducer;
export const {
  updateEducationCourse,
  updateEducationLevel,
  updateEducationIt,
  updateEducationCity,
  updateEducationInstitute,
  updateCheckedEducationToBeSent,
  removeEducationToBeSent,
  resetCheckedEducationToBeSent,
  addEmptyEducationToBeSent,
} = addEducationToBeSentSlice.actions;
