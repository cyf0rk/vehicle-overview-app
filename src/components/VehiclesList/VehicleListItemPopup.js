import './VehicleListItemPopup.scss';

const VehicleListItemPopup = ({ popupItem, togglePopup }) => {
  return (
    <div
      className='popup-item'
      onClick={() => {
        togglePopup(false);
      }}
    >
      <div className='popup-item__card'>
        <div className='popup-item__card-title'>
          <h2>{popupItem.vehicleBrand}</h2>
        </div>
        <div className='popup-item__card-info'>
          <p>
            Model:
            <br />
            <span>{popupItem.vehicleModel}</span>
          </p>
          <p>
            Power:
            <br />
            <span>{popupItem.vehiclePower} HP</span>
          </p>
          <p>
            Price:
            <br />
            <span>${popupItem.vehiclePrice}</span>
          </p>
          <p>
            Drive:
            <br />
            <span>{popupItem.vehicleDrive}</span>
          </p>
          <p>
            Year of manufacture:
            <br />
            <span>{popupItem.yearOfManufacture}</span>
          </p>
          <p>
            Seating:
            <br />
            <span>{popupItem.seating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleListItemPopup;
