import Header from './components/Header/Header';
import AddNewVehicle from './components/AddNewVehicle/AddNewVehicle';

import { useEffect, useState } from 'react';
import { db, auth } from './services/firebase';

import './App.scss';

function App() {
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
        <AddNewVehicle />
        <div>
          {vehicles &&
            vehicles.map((vehicle) => (
              <li>
                {vehicle.id} - {vehicle.vehicleName}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
