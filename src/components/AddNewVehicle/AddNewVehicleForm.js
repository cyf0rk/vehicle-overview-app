import React from 'react';
import { PropTypes } from 'prop-types';
import {
  useFormInput,
  useCreateDataEntry,
} from '../../common/contexts/VehiclesContext';

import './AddNewVehicleForm.scss';

const AddNewVehicleForm = ({ toggleAddingVehicle }) => {
  const changeHandler = useFormInput();
  const addNewVehicleHandler = useCreateDataEntry();
  const currentYear = new Date().getFullYear();

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
          <label htmlFor=''>Vehicle price ($):</label>
          <input
            required
            type='number'
            name='vehiclePrice'
            placeholder='0'
            min='0'
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Vehicle power (HP):</label>
          <input
            required
            type='number'
            name='vehiclePower'
            placeholder='0'
            min='0'
            max='5000'
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
            type='number'
            name='yearOfManufacture'
            placeholder={currentYear + 2}
            min='1769'
            max={currentYear + 2}
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <label htmlFor=''>Seating up to:</label>
          <input required
            type='number'
            name='seating'
            placeholder='1'
            min='1'
            max='100'
            onChange={changeHandler}
          />
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

AddNewVehicleForm.propTypes = {
  toggleAddingVehicle: PropTypes.func
}

export default AddNewVehicleForm;
