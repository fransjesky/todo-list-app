import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme';
import entriesReducer from './features/entries';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: entriesReducer,
  },
});
