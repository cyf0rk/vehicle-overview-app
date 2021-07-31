const PagingProvider = () => {
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
};

export default PagingProvider;
