import AddNewVehicleForm from './AddNewVehicleForm';

import './AddNewVehicle.scss';

const AddNewVehicle = ({ cancelAddingVehicle }) => {
  return <AddNewVehicleForm cancelAddingVehicle={cancelAddingVehicle} />;
};

export default AddNewVehicle;
