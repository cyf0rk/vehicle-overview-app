import React from 'react';
import AddNewVehicleForm from './AddNewVehicleForm';

import { useState } from 'react';

import './AddNewVehicle.scss';

const AddNewVehicle = () => {
  const [addingVehicle, toggleAddingVehicle] = useState(false);

  return (
    <div className='add-new-vehicle'>
      {!addingVehicle ? (
        <div className='add-new-vehicle__button'>
          <button className='add-btn' onClick={toggleAddingVehicle}>
            Add Vehicle
          </button>
        </div>
      ) : (
        <AddNewVehicleForm toggleAddingVehicle={toggleAddingVehicle} />
      )}
    </div>
  );
};

export default AddNewVehicle;
