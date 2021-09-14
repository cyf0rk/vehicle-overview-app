import React from 'react';
import { useFavoriteVehicles } from "../../common/contexts/FavoritesContext";
import { usePopupModal } from "../../common/contexts/PopupModalContext";
import { useSortingStyle } from "../../common/contexts/SortingContext";

import AddToFavorites from "../VehiclesListFunctionality/AddToFavorites";

import "./VehicleListItem.scss";

const VehicleListItem = ({ vehicle }) => {
  const { toggleFavoriteHandler } = useFavoriteVehicles();
  const { togglePopupHandler } = usePopupModal();
  const { listStyle } = useSortingStyle();

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
      />
    </li>
  );
};

export default VehicleListItem;
