import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const entriesSlice = createSlice({
  name: 'TODO_LIST',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.push(action.payload);
    },
    removeEntry: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addEntry, removeEntry } = entriesSlice.actions;

export default entriesSlice.reducer;
