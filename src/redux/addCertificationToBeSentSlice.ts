import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedCerts, ReduxStore } from "./types";

const initialState: CheckedCerts = {
  checkedCerts: [],
};
const addCertificationToBeSentSlice = createSlice({
  name: "addCertificationToBeSentSlice",
  initialState,
  reducers: {
    updateCertificationName: (state, action) => {
      const { id, idTemp, name } = action.payload;
      if (idTemp) {
        const certification = state.checkedCerts.find(
          (certification) => certification.idTemp === idTemp
        );
        if (certification) {
          certification.name = name;
        }
      } else {
        const certification = state.checkedCerts.find(
          (certification) => certification.id === id
        );

        if (certification) {
          certification.name = name;
        }
      }
    },
    updateCertificationIssuer: (state, action) => {
      const { id, idTemp, issuer } = action.payload;
      if (idTemp) {
        const certification = state.checkedCerts.find(
          (certification) => certification.idTemp === idTemp
        );
        if (certification) {
          certification.issuer = issuer;
        }
      } else {
        const certification = state.checkedCerts.find(
          (certification) => certification.id === id
        );

        if (certification) {
          certification.issuer = issuer;
        }
      }
    },
    updateCertificationIt: (state, action) => {
      const { id, idTemp, it } = action.payload;
      const certification = idTemp
        ? state.checkedCerts.find(
            (certification) => certification.idTemp === idTemp
          )
        : state.checkedCerts.find((certification) => certification.id === id);

      if (certification) {
        certification.it = it;
      }
    },

    updateCertificationCode: (state, action) => {
      const { id, idTemp, code } = action.payload;
      if (idTemp) {
        const certification = state.checkedCerts.find(
          (certification) => certification.idTemp === idTemp
        );
        if (certification) {
          certification.code = code;
        }
      } else {
        const certification = state.checkedCerts.find(
          (certification) => certification.id === id
        );

        if (certification) {
          certification.code = code;
        }
      }
    },
    updateCertificationExpDate: (state, action) => {
      const { id, idTemp, expDate } = action.payload;
      if (idTemp) {
        const certification = state.checkedCerts.find(
          (certification) => certification.idTemp === idTemp
        );
        if (certification) {
          certification.expDate = expDate;
        }
      } else {
        const certification = state.checkedCerts.find(
          (certification) => certification.id === id
        );

        if (certification) {
          certification.expDate = expDate;
        }
      }
    },
    updateCertificationReleaseDate: (state, action) => {
      const { id, idTemp, releaseDate } = action.payload;
      if (idTemp) {
        const certification = state.checkedCerts.find(
          (certification) => certification.idTemp === idTemp
        );
        if (certification) {
          certification.releaseDate = releaseDate;
        }
      } else {
        const certification = state.checkedCerts.find(
          (certification) => certification.id === id
        );

        if (certification) {
          certification.releaseDate = releaseDate;
        }
      }
    },
    updateCheckedCertificationsToBeSent: (state, action) => {
      const IDs = [...state.checkedCerts.map((cert) => cert.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedCerts = state.checkedCerts.filter(
          (cert) => cert.id !== action.payload.id
        );
      } else {
        state.checkedCerts = [...state.checkedCerts, action.payload];
      }
    },
    removeCertificationsToBeSent: (state, action) => {
      state.checkedCerts = state.checkedCerts.filter((cert) => {
        if (action.payload.idTemp !== undefined) {
          return cert.idTemp !== action.payload.idTemp;
        } else {
          return cert.id !== action.payload.id;
        }
      });
    },
    resetCheckedCertificationToBeSent: (state) => {
      state.checkedCerts = initialState.checkedCerts;
    },
    addEmptyCertificationToBeSent: (state, action) => {
      state.checkedCerts = [...state.checkedCerts, action.payload];
    },
  },
});

export const toBeSentCertificationSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.toBeSentCertification.checkedCerts
);

export default addCertificationToBeSentSlice.reducer;
export const {
  updateCertificationName,
  updateCertificationIssuer,
  updateCertificationCode,
  updateCertificationReleaseDate,
  updateCertificationExpDate,
  updateCertificationIt,
  updateCheckedCertificationsToBeSent,
  removeCertificationsToBeSent,
  resetCheckedCertificationToBeSent,
  addEmptyCertificationToBeSent,
} = addCertificationToBeSentSlice.actions;
