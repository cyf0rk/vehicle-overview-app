import { useEffect, useState, createContext, useContext } from 'react';
import { db } from '../services/firebase';

export const VehiclesContext = createContext(null);
export const AddNewVehicleInfoContext = createContext(null);
export const AddNewVehicleContext = createContext({});
export const CurrentPageListContext = createContext({});
export const CurrentPage = createContext(1);
export const NextPageContext = createContext(null);
export const PreviousPageContext = createContext(null);

export const useVehicles = () => useContext(VehiclesContext);
export const useAddNewVehicleInfo = () => useContext(AddNewVehicleInfoContext);
export const useAddNewVehicle = () => useContext(AddNewVehicleContext);
export const useCurrentPageList = () => useContext(CurrentPageListContext);
export const useCurrentPage = () => useContext(CurrentPage);
export const useNextPage = () => useContext(NextPageContext);
export const usePreviousPage = () => useContext(PreviousPageContext);

const VehiclesProvider = ({ children }) => {
  const [vehicles, setVehicle] = useState([]);
  const [newVehicleInfo, addNewVehicleInfo] = useState({});
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    db.collection('vehicles').onSnapshot((snapshot) =>
      setVehicle(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const changeHandler = (e) => {
    const input = e.target;
    if (input.value.length > 0)
      addNewVehicleInfo({
        ...newVehicleInfo,
        [input.name]: input.value,
      });
  };

  const addNewVehicleHandler = (e) => {
    e.preventDefault();
    db.collection('vehicles').add(newVehicleInfo);
  };

  // Paging functionality
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
    <VehiclesContext.Provider value={vehicles}>
      <AddNewVehicleInfoContext.Provider value={changeHandler}>
        <AddNewVehicleContext.Provider value={addNewVehicleHandler}>
          <CurrentPageListContext.Provider value={currentPageList}>
            <CurrentPage.Provider value={currentPage}>
              <NextPageContext.Provider value={nextPageHandler}>
                <PreviousPageContext.Provider value={previousPageHandler}>
                  {children}
                </PreviousPageContext.Provider>
              </NextPageContext.Provider>
            </CurrentPage.Provider>
          </CurrentPageListContext.Provider>
        </AddNewVehicleContext.Provider>
      </AddNewVehicleInfoContext.Provider>
    </VehiclesContext.Provider>
  );
};

export default VehiclesProvider;
