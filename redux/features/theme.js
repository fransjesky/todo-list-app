import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: 'DARK_MODE',
  initialState,
  reducers: {
    switchDarkTheme: (state) => {
      state.darkMode = true;
    },
    switchLightTheme: (state) => {
      state.darkMode = false;
    },
  },
});

export const { switchDarkTheme, switchLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
