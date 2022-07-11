import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const entriesSlice = createSlice({
  name: 'TODO_LIST',
  initialState,
  reducers: {
    getInit: (state, action) => {
      action.payload.forEach((element) => {
        state.splice(action.payload.length - 1, action.payload.length);
        state.push(element);
      });
    },
    addEntry: (state, action) => {
      state.push(action.payload);
    },
    removeEntry: (state, action) => {
      state.splice(action.payload, 1);
    },
    checkEntry: (state, action) => {
      state.splice(action.payload.index, 1, action.payload);
    },
    clearEntries: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { getInit, addEntry, removeEntry, checkEntry, clearEntries } =
  entriesSlice.actions;

export default entriesSlice.reducer;
