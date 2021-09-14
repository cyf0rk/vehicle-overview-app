import React from 'react';
import { useState, createContext, useContext } from "react";
import { useData } from "./VehiclesContext";
import { useSorting } from "./SortingContext";
import { useFavorites, useFavoriteVehicles } from "./FavoritesContext";
import PropTypes from 'prop-types';

const CurrentPageListContext = createContext({});
const CurrentPageContext = createContext(1);
const NavigatePageContext = createContext(null);
const SearchTermContext = createContext("");

export const useCurrentPageList = () => useContext(CurrentPageListContext);
export const useCurrentPage = () => useContext(CurrentPageContext);
export const useNavigatePage = () => useContext(NavigatePageContext);
export const useSearchTerm = () => useContext(SearchTermContext);

const PagingProvider = ({ children }) => {
  const vehicles = useData();
  const { sortList } = useSorting();
  const { favoritesPage } = useFavorites();
  const { favoriteVehicles } = useFavoriteVehicles();

  const [currentPage, updateCurrentPage] = useState(1);
  const [searchedTerm, changeSearchedTerm] = useState("");

  const vehiclesList = favoritesPage ? favoriteVehicles : vehicles;

  const nextPageHandler = () => {
    if (currentPage < numberOfPages) updateCurrentPage(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage > 1 && updateCurrentPage(currentPage - 1);
  };

  const searchedDataHandler = () => {
    return vehiclesList.filter(
      (vehicle) =>
        vehicle.vehicleBrand
          .toLowerCase()
          .includes(searchedTerm.toLowerCase()) ||
        vehicle.vehicleModel.toLowerCase().includes(searchedTerm.toLowerCase())
    );
  };

  const getNumberOfPages = () =>
    Math.ceil(searchedDataHandler().length / numberPerPage);

  const listSortedByName = sortList(searchedDataHandler());
  const numberPerPage = 8;
  const numberOfPages = getNumberOfPages();
  const currentPageList = listSortedByName.slice(
    (currentPage - 1) * numberPerPage,
    numberPerPage * currentPage
  );

  const searchHandler = (e) => {
    changeSearchedTerm(e.target.value);
  };

  return (
    <CurrentPageListContext.Provider value={currentPageList}>
      <CurrentPageContext.Provider value={currentPage}>
        <SearchTermContext.Provider value={{ searchedTerm, searchHandler }}>
          <NavigatePageContext.Provider
            value={{nextPageHandler, previousPageHandler}}
          >
            {children}
          </NavigatePageContext.Provider>
        </SearchTermContext.Provider>
      </CurrentPageContext.Provider>
    </CurrentPageListContext.Provider>
  );
};

PagingProvider.propTypes = {
  nodeProp: PropTypes.node.isRequired
}

export default PagingProvider;
