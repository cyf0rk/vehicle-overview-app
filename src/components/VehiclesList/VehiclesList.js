import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCurrentPageList } from '../../common/contexts/PagingContext';
import VehicleListItem from './VehicleListItem';
import VehicleListItemPopup from './VehicleListItemPopup';
import VehiclesListPaging from '../VehiclesListFunctionality/VehiclesListPaging';
import VehiclesListSorting from '../VehiclesListFunctionality/VehiclesListSorting';

import './VehiclesList.scss';

const VehiclesList = () => {
  const currentPageList = useCurrentPageList();

  const [popupItem, changePopupItem] = useState({});
  const [popup, togglePopup] = useState(false);
  const [listStyle, changeListStyle] = useState('grid');

  const togglePopupHandler = (item) => {
    changePopupItem(item);
    togglePopup(true);
  };

  return (
    <div className='vehicles-list'>
      <VehiclesListSorting changeListStyle={changeListStyle} />
      <ul className={'vehicles-list__list list-' + listStyle}>
        {currentPageList &&
          currentPageList.map((vehicle) => (
            <VehicleListItem
              key={uuidv4()}
              vehicle={vehicle}
              togglePopupHandler={togglePopupHandler}
              listStyle={listStyle}
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
