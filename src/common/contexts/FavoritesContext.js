import React from 'react';
import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const FavoritesContext = createContext(false);
const FavoriteVehiclesContext = createContext({});

export const useFavorites = () => useContext(FavoritesContext);
export const useFavoriteVehicles = () => useContext(FavoriteVehiclesContext);

const FavoritesProvider = ({ children }) => {
  const [favoriteVehicles, addFavoriteVehicle] = useState([]);
  const [favoritesPage, toggleFavoritesPage] = useState(false);

  const toggleFavoriteHandler = (e, vehicle) => {
    e.stopPropagation();

    if (!checkFavoriteVehicle(vehicle))
      addFavoriteVehicle([...favoriteVehicles, vehicle]);
    else {
      addFavoriteVehicle(
        favoriteVehicles.filter(
          (favVehicle) => favVehicle.id !== vehicle.id
        )
      );
    }
  };

  const checkFavoriteVehicle = (vehicle) => {
    return favoriteVehicles.some(
      (favVehicle) => favVehicle.id === vehicle.id
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritesPage,
        toggleFavoritesPage
      }}
    >
      <FavoriteVehiclesContext.Provider
        value={{
          favoriteVehicles,
          toggleFavoriteHandler,
          checkFavoriteVehicle
        }}
      >
        {children}
      </FavoriteVehiclesContext.Provider>
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default FavoritesProvider;
