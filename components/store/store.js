import { createSlice, configureStore } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: { tab: "sarwa-insurance" },
  reducers: {
    update(state, action) {
      state.tab = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { tab: tabSlice.reducer },
});

export const tabActions = tabSlice.actions;

export default store;
