import { useEffect, useState, createContext, useContext } from 'react';
import { db } from '../services/firebase';

export const VehiclesContext = createContext(null);
export const AddNewVehicleInfoContext = createContext(null);
export const AddNewVehicleContext = createContext({});

export const useVehicles = () => useContext(VehiclesContext);
export const useAddNewVehicleInfo = () => useContext(AddNewVehicleInfoContext);
export const useAddNewVehicle = () => useContext(AddNewVehicleContext);

const VehiclesProvider = ({ children }) => {
  const [vehicles, setVehicle] = useState([]);
  const [newVehicleInfo, addNewVehicleInfo] = useState({});

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

  return (
    <VehiclesContext.Provider value={vehicles}>
      <AddNewVehicleInfoContext.Provider value={changeHandler}>
        <AddNewVehicleContext.Provider value={addNewVehicleHandler}>
          {children}
        </AddNewVehicleContext.Provider>
      </AddNewVehicleInfoContext.Provider>
    </VehiclesContext.Provider>
  );
};

export default VehiclesProvider;
