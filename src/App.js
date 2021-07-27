import Header from './components/Header/Header';
import AddNewVehicle from './components/AddNewVehicle/AddNewVehicle';
import VehiclesList from './components/VehiclesList/VehiclesList';

import { useEffect, useState } from 'react';
import { db, auth } from './services/firebase';

import './App.scss';

function App() {
  const [addingVehicle, toggleAddingVehicle] = useState(false);
  const [vehicles, setVehicle] = useState([]);

  useEffect(() => {
    db.collection('vehicles').onSnapshot((snapshot) =>
      setVehicle(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const addNewVehicle = () => {
    // db.collection('vehicles').add();
  };

  return (
    <div className='App'>
      <Header />
      <div className='app-body'>
        {!addingVehicle ? (
          <button className='add-btn' onClick={toggleAddingVehicle}>
            Add Vehicle
          </button>
        ) : (
          <AddNewVehicle cancelAddingVehicle={toggleAddingVehicle} />
        )}
        <VehiclesList vehicles={vehicles} />
      </div>
    </div>
  );
}

export default App;
