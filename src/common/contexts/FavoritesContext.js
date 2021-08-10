import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({});

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({children}) => {
    const [favoriteVehicles, addFavoriteVehicle] = useState([]);
    const [favoritesPage, toggleFavoritesPage] = useState(false);

    const toggleFavoriteHandler = (vehicle) => {
        const checkFavoriteVehicle = favoriteVehicles.some(favVehicle => favVehicle.vehicleModel === vehicle.vehicleModel)

        if (!checkFavoriteVehicle)
            addFavoriteVehicle([...favoriteVehicles, vehicle]);
        else {
            addFavoriteVehicle(favoriteVehicles.filter(favVehicle => favVehicle.vehicleModel !== vehicle.vehicleModel))
        }
    }

    return (
        <FavoritesContext.Provider value={{ favoriteVehicles, toggleFavoriteHandler, favoritesPage, toggleFavoritesPage }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider;