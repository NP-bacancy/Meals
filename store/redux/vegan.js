import { createSlice } from "@reduxjs/toolkit";

export const veganSlice = createSlice({
  name: "vegan",
  initialState: {
    veganState: false,
  },
  reducers: {
    toggleVegan: (state, action) => {
      state.veganState = action.payload.flag;
      console.log("In Vegan Redux");
    },
  },
});

export const toggleVegan = veganSlice.actions.toggleVegan;
export default veganSlice.reducer;
