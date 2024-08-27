import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

type Props = {
  isModalVisible: boolean;
};
const initialState: Props = {
  isModalVisible: false,
};
const showGenericModal = createSlice({
  name: "showGenericModal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});

export const isModalVisibleSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.showModal?.isModalVisible
);

export default showGenericModal.reducer;
export const { showModal } = showGenericModal.actions;
