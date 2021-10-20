import React from 'react';
import {
  useNavigatePage,
  useCurrentPage,
} from '../../common/contexts/PagingContext';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './VehiclesListPaging.scss';

const VehiclesListPaging = () => {
  const { currentPage, updateCurrentPage,numberOfPages } = useCurrentPage();
  const { nextPageHandler, previousPageHandler } = useNavigatePage();
  const n = 1;

  return (
    <div className='vehicles-list__paging'>
      <a className='previous' onClick={previousPageHandler}>
        <KeyboardArrowLeftIcon />
      </a>
      {[...Array(numberOfPages())].map((e, i) => (
        <p className={`page-number ${i+1 == currentPage ? 'current-page' : ''}`} onClick={() => updateCurrentPage(i+1)} key={i}>{i + 1}</p>
      ))}
      <a className='next' onClick={nextPageHandler}>
        <KeyboardArrowRightIcon />
      </a>
    </div>
  );
};

export default VehiclesListPaging;
