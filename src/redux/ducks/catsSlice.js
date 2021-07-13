import { createSlice } from '@reduxjs/toolkit'

export const catsSlice = createSlice({
  name: 'cats',
  initialState: [],
  reducers: {
    getCats: () => {},
    setCats: (state, action) => {
      return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCats, setCats } = catsSlice.actions;

export default catsSlice.reducer;