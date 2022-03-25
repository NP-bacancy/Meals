import { createSlice } from "@reduxjs/toolkit";

export const vegetarianSlice = createSlice({
  name: "vegetarian",
  initialState: {
    vegetarianState: false,
  },
  reducers: {
    toggleVegetarian: (state, action) => {
      state.vegetarianState = action.payload.flag;
      console.log("In Vegetarian Redux");
    },
  },
});

export const toggleVegetarian = vegetarianSlice.actions.toggleVegetarian;
export default vegetarianSlice.reducer;
