import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(false);
const FavoriteVehiclesContext = createContext({});

export const useFavorites = () => useContext(FavoritesContext);
export const useFavoriteVehicles = () => useContext(FavoriteVehiclesContext);

const FavoritesProvider = ({ children }) => {
  const [favoriteVehicles, addFavoriteVehicle] = useState([]);
  const [favoritesPage, toggleFavoritesPage] = useState(false);

  const toggleFavoriteHandler = (e, vehicle) => {
    e.stopPropagation();

    const checkFavoriteVehicle = favoriteVehicles.some(
      (favVehicle) => favVehicle.vehicleModel === vehicle.vehicleModel
    );

    if (!checkFavoriteVehicle)
      addFavoriteVehicle([...favoriteVehicles, vehicle]);
    else {
      addFavoriteVehicle(
        favoriteVehicles.filter(
          (favVehicle) => favVehicle.vehicleModel !== vehicle.vehicleModel
        )
      );
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoritesPage,
        toggleFavoritesPage,
      }}
    >
      <FavoriteVehiclesContext.Provider
        value={{
          favoriteVehicles,
          toggleFavoriteHandler,
        }}
      >
        {children}
      </FavoriteVehiclesContext.Provider>
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

