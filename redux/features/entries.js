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
    clearEntries: (state) => {
      state.splice(0, state.length);
      console.log('resetted!');
    },
  },
});

export const { addEntry, removeEntry, clearEntries } = entriesSlice.actions;

export default entriesSlice.reducer;
