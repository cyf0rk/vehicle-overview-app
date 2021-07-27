import './VehiclesList.scss';

const VehiclesList = ({ vehicles }) => {
  return (
    <ul className='vehicles-list'>
      {vehicles &&
        vehicles.map((vehicle) => (
          <li className='vehicles-list__item'>
            {vehicle.vehicleBrand} - {vehicle.vehicleModel}
          </li>
        ))}
    </ul>
  );
};

export default VehiclesList;
