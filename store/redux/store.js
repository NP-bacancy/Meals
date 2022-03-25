import { configureStore } from "@reduxjs/toolkit";

import glutenReducer from "./glutenFree";
import lactoseReducer from "./lactoseFree";
import veganReducer from "./vegan";
import vegetarianReducer from "./vegetarian";

export const store = configureStore({
  reducer: {
    glutenFree: glutenReducer,
    lactoseFree: lactoseReducer,
    vegan: veganReducer,
    vegetarian: vegetarianReducer,
  },
});
