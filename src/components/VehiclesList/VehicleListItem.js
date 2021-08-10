import {useFavorites} from '../../common/contexts/FavoritesContext'
import { usePopupModal } from '../../common/contexts/PopupModalContext';
import { useSorting } from '../../common/contexts/SortingContext';

import AddToFavorites from '../VehiclesListFunctionality/AddToFavorites';

import './VehicleListItem.scss';

const VehicleListItem = ({ vehicle }) => {
  const { toggleFavoriteHandler } = useFavorites();
  const { togglePopupHandler } = usePopupModal();
  const { listStyle } = useSorting();

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
      <AddToFavorites 
        toggleFavoriteHandler={() => toggleFavoriteHandler(vehicle)}
      />
    </li>
  );
};

export default VehicleListItem;
