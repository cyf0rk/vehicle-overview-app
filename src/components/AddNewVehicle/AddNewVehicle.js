import AddNewVehicleForm from './AddNewVehicleForm';

import { useState } from 'react';

import './AddNewVehicle.scss';

const AddNewVehicle = () => {
  const [addingVehicle, toggleAddingVehicle] = useState(false);
  return (
    <>
      {!addingVehicle ? (
        <button className='add-btn' onClick={toggleAddingVehicle}>
          Add Vehicle
        </button>
      ) : (
        <AddNewVehicleForm toggleAddingVehicle={toggleAddingVehicle} />
      )}
    </>
  );
};

export default AddNewVehicle;
