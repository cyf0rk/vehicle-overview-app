import React, { useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { useFavoriteVehicles } from "../../common/contexts/FavoritesContext";
import { usePopupModal } from "../../common/contexts/PopupModalContext";
import { useSortingStyle } from "../../common/contexts/SortingContext";

import AddToFavorites from "../VehiclesListFunctionality/AddToFavorites";

import "./VehicleListItem.scss";

const VehicleListItem = ({ vehicle }) => {
  const { toggleFavoriteHandler, checkFavoriteVehicle } = useFavoriteVehicles();
  const { togglePopupHandler } = usePopupModal();
  const { listStyle } = useSortingStyle();

  const memoCheckFavorite = useCallback(checkFavoriteVehicle(vehicle), [vehicle]);

  return (
    <li
      className={"vehicles-list__item list-item-" + listStyle}
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
        toggleFavoriteHandler={(e) => toggleFavoriteHandler(e, vehicle)}
        isFavorite={memoCheckFavorite}
      />
    </li>
  );
};

VehicleListItem.propTypes = {
  vehicle: PropTypes.shape({
    seating: PropTypes.number,
    vehicleBrand: PropTypes.string,
    vehicleDrive: PropTypes.string,
    vehicleModel: PropTypes.string,
    vehiclePower: PropTypes.number,
    vehiclePrice: PropTypes.number,
    yearOfManufacture: PropTypes.number
  })
}

export default VehicleListItem;
