import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: null,
};

export const themeSlice = createSlice({
  name: 'DARK_MODE',
  initialState,
  reducers: {
    initTheme: (state, action) => {
      state.darkMode = action.payload;
    },
    switchDarkTheme: (state) => {
      state.darkMode = true;
    },
    switchLightTheme: (state) => {
      state.darkMode = false;
    },
  },
});

export const { initTheme, switchDarkTheme, switchLightTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
