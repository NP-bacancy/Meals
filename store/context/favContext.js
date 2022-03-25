import { useState, createContext } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favMealIds, setFavMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavMealIds((currentFavourites) => [...currentFavourites, id]);
  };

  const removeFavourite = (id) => {
    setFavMealIds((currentFavourites) =>
      currentFavourites.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
}

export default FavouriteContextProvider;
