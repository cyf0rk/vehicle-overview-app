import './VehicleListItem.scss';

const VehicleListItem = ({ vehicle, togglePopupHandler, listStyle }) => {
  return (
    <li
      className={'vehicles-list__item list-item-' + listStyle}
      onClick={() => togglePopupHandler(vehicle)}
    >
      <h3>{vehicle.vehicleBrand}</h3>
      <p>
        Model:<span>{vehicle.vehicleModel}</span>
      </p>
      <p>
        Price:<span>${vehicle.vehiclePrice}</span>
      </p>
      <p>
        Year of manufacture:<span>{vehicle.yearOfManufacture}</span>
      </p>
    </li>
  );
};

export default VehicleListItem;
