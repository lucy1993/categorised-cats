import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getCategories: () => {},
    setCategories: (state, action) => {
      return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCategories, setCategories } = categorySlice.actions;

export default categorySlice.reducer;