import { useState, createContext, useContext } from 'react';
import { useData } from './VehiclesContext';

const CurrentPageListContext = createContext({});
const CurrentPageContext = createContext(1);
const NextPageContext = createContext(null);
const PreviousPageContext = createContext(null);
const SearchTermContext = createContext('');

export const useCurrentPageList = () => useContext(CurrentPageListContext);
export const useCurrentPage = () => useContext(CurrentPageContext);
export const useNextPage = () => useContext(NextPageContext);
export const usePreviousPage = () => useContext(PreviousPageContext);
export const useSearchTerm = () => useContext(SearchTermContext);

const PagingProvider = ({ children }) => {
  const vehicles = useData();

  const [currentPage, updateCurrentPage] = useState(1);
  const [searchedTerm, changeSearchedTerm] = useState('');

  const nextPageHandler = () => {
    if (currentPage < numberOfPages) updateCurrentPage(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage > 1 && updateCurrentPage(currentPage - 1);
  };

  const searchedDataHandler = () => {
    return vehicles.filter(
      (vehicle) =>
        vehicle.vehicleBrand
          .toLowerCase()
          .includes(searchedTerm.toLowerCase()) ||
        vehicle.vehicleModel.toLowerCase().includes(searchedTerm.toLowerCase())
    );
  };

  const getNumberOfPages = () =>
    Math.ceil(searchedDataHandler().length / numberPerPage);

  const numberPerPage = 12;
  const numberOfPages = getNumberOfPages();
  const currentPageList = searchedDataHandler().slice(
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
          <NextPageContext.Provider value={nextPageHandler}>
            <PreviousPageContext.Provider value={previousPageHandler}>
              {children}
            </PreviousPageContext.Provider>
          </NextPageContext.Provider>
        </SearchTermContext.Provider>
      </CurrentPageContext.Provider>
    </CurrentPageListContext.Provider>
  );
};

export default PagingProvider;
