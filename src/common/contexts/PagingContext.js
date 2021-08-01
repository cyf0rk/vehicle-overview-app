import { useState, createContext, useContext } from 'react';

export const CurrentPageListContext = createContext({});
export const CurrentPageContext = createContext(1);
export const NextPageContext = createContext(null);
export const PreviousPageContext = createContext(null);

export const useCurrentPageList = () => useContext(CurrentPageListContext);
export const useCurrentPage = () => useContext(CurrentPageContext);
export const useNextPage = () => useContext(NextPageContext);
export const usePreviousPage = () => useContext(PreviousPageContext);

const PagingProvider = ({ children, vehicles }) => {
  const [currentPage, updateCurrentPage] = useState(1);

  const getNumberOfPages = () => Math.ceil(vehicles.length / numberPerPage);

  const nextPageHandler = () => {
    if (currentPage < numberOfPages) updateCurrentPage(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage > 1 && updateCurrentPage(currentPage - 1);
  };

  const numberPerPage = 12;
  const numberOfPages = getNumberOfPages();
  const currentPageList = vehicles.slice(
    (currentPage - 1) * numberPerPage,
    numberPerPage * currentPage
  );

  return (
    <CurrentPageListContext.Provider value={currentPageList}>
      <CurrentPageContext.Provider value={currentPage}>
        <NextPageContext.Provider value={nextPageHandler}>
          <PreviousPageContext.Provider value={previousPageHandler}>
            {children}
          </PreviousPageContext.Provider>
        </NextPageContext.Provider>
      </CurrentPageContext.Provider>
    </CurrentPageListContext.Provider>
  );
};

export default PagingProvider;
