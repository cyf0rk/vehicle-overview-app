import { useContext } from 'react';
import { VehiclesContext } from '../../common/VehiclesContext';
import './VehiclesList.scss';

const VehiclesList = () => {
  const vehicles = useContext(VehiclesContext);
  return (
    <ul className='vehicles-list'>
      {vehicles &&
        vehicles.map((vehicle) => (
          <li className='vehicles-list__item'>
            <h3>{vehicle.vehicleBrand}</h3>
            <p>{vehicle.vehicleModel}</p>
            <p>${vehicle.vehiclePrice}</p>
            {/* <p>{vehicle.vehiclePower}</p>
            <p>{vehicle.vehicleDrive}</p> */}
            <p>{vehicle.yearOfManufacture}</p>
            {/* <p>{vehicle.seating}</p> */}
          </li>
        ))}
    </ul>
  );
};

export default VehiclesList;
