import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCurrentPageList } from '../../common/contexts/PagingContext';
import VehicleListItem from './VehicleListItem';
import VehicleListItemPopup from './VehicleListItemPopup';
import VehiclesListPaging from '../VehiclesListFunctionality/VehiclesListPaging';

import './VehiclesList.scss';

const VehiclesList = () => {
  const currentPageList = useCurrentPageList();

  const [popupItem, changePopupItem] = useState({});
  const [popup, togglePopup] = useState(false);

  const togglePopupHandler = (item) => {
    changePopupItem(item);
    togglePopup(true);
  };

  return (
    <div className='vehicles-list'>
      <ul className='vehicles-list__list'>
        {currentPageList &&
          currentPageList.map((vehicle) => (
            <VehicleListItem
              key={uuidv4()}
              vehicle={vehicle}
              togglePopupHandler={togglePopupHandler}
            />
          ))}
      </ul>
      {popup && (
        <VehicleListItemPopup popupItem={popupItem} togglePopup={togglePopup} />
      )}
      <VehiclesListPaging />
    </div>
  );
};

export default VehiclesList;
