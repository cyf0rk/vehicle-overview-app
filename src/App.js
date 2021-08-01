import Header from './components/Header/Header';
import AddNewVehicle from './components/AddNewVehicle/AddNewVehicle';
import VehiclesList from './components/VehiclesList/VehiclesList';
import VehiclesProvider from './common/contexts/VehiclesContext';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <VehiclesProvider>
        <Header />
        <div className='app-body'>
          <AddNewVehicle />
          <VehiclesList />
        </div>
      </VehiclesProvider>
    </div>
  );
}

export default App;
