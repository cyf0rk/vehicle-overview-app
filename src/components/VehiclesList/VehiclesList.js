import { useContext, useState } from 'react';
import { VehiclesContext } from '../../common/VehiclesContext';
import './VehiclesList.scss';

const VehiclesList = () => {
  const vehicles = useContext(VehiclesContext);
  const [currentPage, updateCurrentPage] = useState(1);

  const clickHandler = () => {
    console.log('clicked');
  };
  const getNumberOfPages = () => Math.ceil(vehicles.length / numberPerPage);

  const nextPageHandler = () => {
    if (currentPage < numberOfPages) updateCurrentPage(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage > 1 && updateCurrentPage(currentPage - 1);
  };

  const numberPerPage = 12;
  const numberOfPages = getNumberOfPages();
  const currentPageList = vehicles.slice(
    (currentPage - 1) * numberPerPage,
    numberPerPage * currentPage
  );

  return (
    <div className='vehicles-list'>
      <ul className='vehicles-list__list'>
        {vehicles &&
          currentPageList.map((vehicle) => (
            <li className='vehicles-list__item' onClick={clickHandler}>
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
      <div className='vehicles-list__paging'>
        <a className='previous' onClick={previousPageHandler}>
          &#8701;
        </a>
        <a className='currentPage'>{currentPage}</a>
        <a className='next' onClick={nextPageHandler}>
          &#8702;
        </a>
      </div>
    </div>
  );
};

export default VehiclesList;
