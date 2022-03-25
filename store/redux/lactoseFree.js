import { createSlice } from "@reduxjs/toolkit";

export const lactoseSlice = createSlice({
  name: "lactoseFree",
  initialState: {
    lactoseState: false,
  },
  reducers: {
    toggleLactose: (state, action) => {
      state.lactoseState = action.payload.flag;
      console.log("In Lactose Redux");
    },
  },
});

export const toggleLactose = lactoseSlice.actions.toggleLactose;
export default lactoseSlice.reducer;
