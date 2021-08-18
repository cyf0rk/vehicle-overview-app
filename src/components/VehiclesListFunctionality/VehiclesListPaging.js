import {
  useNavigatePage,
  useCurrentPage,
} from '../../common/contexts/PagingContext';

import './VehiclesListPaging.scss';

const VehiclesListPaging = () => {
  const currentPage = useCurrentPage();
  const { nextPageHandler, previousPageHandler } = useNavigatePage();

  return (
    <div className='vehicles-list__paging'>
      <a className='previous' onClick={previousPageHandler}>
        &#8701;
      </a>
      <a className='currentPage'>{currentPage}</a>
      <a className='next' onClick={nextPageHandler}>
        &#8702;
      </a>
    </div>
  );
};

export default VehiclesListPaging;
