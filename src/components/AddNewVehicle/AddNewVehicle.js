import './AddNewVehicle.scss';

const AddNewVehicle = () => {
  return (
    <form action='post' className='add-new-form'>
      <div className='input-field'>
        <label htmlFor=''>Vehicle brand:</label>
        <input type='text' name='vehicle-name' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Vehicle model:</label>
        <input type='text' name='vehicle-model' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Vehicle price:</label>
        <input type='text' name='vehicle-price' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Vehicle power:</label>
        <input type='text' name='vehicle-power' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Vehicle drive:</label>
        <input type='text' name='vehicle-drive' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Year of manufacture:</label>
        <input type='text' name='year-of-manufacture' />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Seating up to:</label>
        <input type='text' name='seating-up-to' />
      </div>
      <div className='actions'>
        <a className='cancel-btn' href=''>
          Cancel
        </a>
        <button className='add-btn'>Add Vehicle</button>
      </div>
    </form>
  );
};

export default AddNewVehicle;
