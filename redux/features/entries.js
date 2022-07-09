import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const entriesSlice = createSlice({
  name: 'TODO_LIST',
  initialState,
  reducers: {
    getInit: (state, action) => {
      action.payload.forEach((element) => {
        state.splice(0, action.payload.length);
        state.push(element);
      });
    },
    addEntry: (state, action) => {
      state.push(action.payload);
    },
    removeEntry: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearEntries: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { getInit, addEntry, removeEntry, clearEntries } =
  entriesSlice.actions;

export default entriesSlice.reducer;
