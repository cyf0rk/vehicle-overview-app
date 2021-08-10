import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({});

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({children}) => {
    const [favoriteVehicles, addFavoriteVehicle] = useState([]);
    const [favoritesPage, toggleFavoritesPage] = useState(false);

    const addFavoriteVehicleHandler = (vehicle) => {
        addFavoriteVehicle([...favoriteVehicles, vehicle]);
    }

    return (
        <FavoritesContext.Provider value={{ favoriteVehicles, addFavoriteVehicleHandler, favoritesPage, toggleFavoritesPage }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider;