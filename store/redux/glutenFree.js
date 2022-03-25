import { createSlice } from "@reduxjs/toolkit";

export const glutenSlice = createSlice({
  name: "glutenFree",
  initialState: {
    glutenState: false,
  },
  reducers: {
    toggleGluten: (state, action) => {
      state.glutenState = action.payload.flag;
      console.log("In Gluten Redux");
    },
  },
});

export const toggleGluten = glutenSlice.actions.toggleGluten;
export default glutenSlice.reducer;
