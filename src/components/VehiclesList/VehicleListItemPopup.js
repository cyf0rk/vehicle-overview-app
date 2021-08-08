import { useFavorites } from '../../common/contexts/FavoritesContext';
import { usePopupModal } from '../../common/contexts/PopupModalContext';

import AddToFavorites from '../VehiclesListFunctionality/AddToFavorites';

import './VehicleListItemPopup.scss';

const VehicleListItemPopup = () => {
  const { addFavoriteVehicleHandler } = useFavorites();
  const { popupRef, popupItem, closePopup, togglePopup } = usePopupModal();

  return (
    <div
      ref={popupRef}
      className='popup-item'
      onClick={closePopup}
    >
      <div className='popup-item__card'>
        <div className='popup-item__card-title'>
          <AddToFavorites 
            addFavoriteVehicleHandler={() => addFavoriteVehicleHandler(popupItem)}
          />
          <h2>{popupItem.vehicleBrand}</h2>
          <a className="close-button" onClick={() => togglePopup(false)}>&#120;</a>
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
