import React from 'react';
import {
  useFormInput,
  useCreateDataEntry,
} from '../../common/contexts/VehiclesContext';

import './AddNewVehicleForm.scss';

const AddNewVehicleForm = ({ toggleAddingVehicle }) => {
  const changeHandler = useFormInput();
  const addNewVehicleHandler = useCreateDataEntry();

  return (
    <form className='add-new-form' onSubmit={addNewVehicleHandler}>
      <div className='input'>
        <div className='input-field'>
          <label htmlFor=''>Vehicle brand:</label>
          <input
            required
            type='text'
            name='vehicleBrand'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Vehicle model:</label>
          <input
            required
            type='text'
            name='vehicleModel'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Vehicle price:</label>
          <input
            required
            type='text'
            name='vehiclePrice'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Vehicle power:</label>
          <input
            required
            type='text'
            name='vehiclePower'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Vehicle drive:</label>
          <input
            required
            type='text'
            name='vehicleDrive'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Year of manufacture:</label>
          <input
            type='text'
            name='yearOfManufacture'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Seating up to:</label>
          <input required type='text' name='seating' onChange={changeHandler} />
        </div>
      </div>
      <div className='actions'>
        <a className='cancel-btn' onClick={() => toggleAddingVehicle(false)}>
          Cancel
        </a>
        <button className='add-btn'>Add Vehicle</button>
      </div>
    </form>
  );
};

export default AddNewVehicleForm;
