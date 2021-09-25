import React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { db } from '../../services/firebase';
import PropTypes from 'prop-types';

import FavoritesProvider from './FavoritesContext';
import PagingProvider from './PagingContext';
import PopupModalProvider from './PopupModalContext';
import SortingProvider from './SortingContext';

const DataContext = createContext(null);
const FormInputContext = createContext(null);
const CreateDataEntryContext = createContext({});

export const useData = () => useContext(DataContext);
export const useFormInput = () => useContext(FormInputContext);
export const useCreateDataEntry = () => useContext(CreateDataEntryContext);

const VehiclesProvider = ({ children }) => {
  const [vehicles, setVehicle] = useState([]);
  const [newVehicleInfo, addNewVehicleInfo] = useState({});

  useEffect(() => {
    db.collection('vehicles').onSnapshot((snapshot) =>
      setVehicle(snapshot.docs.map((doc) => new Object({id: doc.id, ...doc.data()})))
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

  return (
    <DataContext.Provider value={vehicles}>
      <FormInputContext.Provider value={changeHandler}>
        <CreateDataEntryContext.Provider value={addNewVehicleHandler}>
          <PopupModalProvider>
            <FavoritesProvider>
              <SortingProvider>
                <PagingProvider>{children}</PagingProvider>
              </SortingProvider>
            </FavoritesProvider>
          </PopupModalProvider>
        </CreateDataEntryContext.Provider>
      </FormInputContext.Provider>
    </DataContext.Provider>
  );
};

VehiclesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default VehiclesProvider;
