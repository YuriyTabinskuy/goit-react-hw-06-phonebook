import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

//Selectors

export const getFilter = state => state.filter;
