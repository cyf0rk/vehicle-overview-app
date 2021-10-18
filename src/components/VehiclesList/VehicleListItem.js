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
      <AddToFavorites
        toggleFavoriteHandler={(e) => toggleFavoriteHandler(e, vehicle)}
        isFavorite={memoCheckFavorite}
      />
      <div className="item-info">
        <h3>{vehicle.vehicleBrand}</h3>
        <p>
          <span>{vehicle.vehicleModel}</span>
        </p>
        <p>
          <span>${vehicle.vehiclePrice}</span>
        </p>
        <p>
          <span>{vehicle.yearOfManufacture}.</span>
        </p>
      </div>
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
