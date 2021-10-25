import React from 'react';
import ReactPaginate from 'react-paginate';
import {
  useNavigatePage,
  usePages,
} from '../../common/contexts/PagingContext';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './VehiclesListPaging.scss';

const VehiclesListPaging = () => {
  const numberOfPages = usePages();
  const updateCurrentPage = useNavigatePage();

  return (
    <div className='vehicles-list__paging'>
      {
        numberOfPages() > 0 ? (
          <ReactPaginate
            pageCount={numberOfPages()}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={(page) => updateCurrentPage(page.selected+1)}
            containerClassName="vehicles-list__paging"
            pageClassName="page-number"
            pageLinkClassName="page-number__link"
            activeClassName="current-page"
            activeLinkClassName="current-page__link"
            previousLabel={<KeyboardArrowLeftIcon />}
            nextLabel={<KeyboardArrowRightIcon />}
          />
        ) : ('')
      }
    </div>
  );
};

export default VehiclesListPaging;
