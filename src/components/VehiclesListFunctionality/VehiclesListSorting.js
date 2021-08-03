import { useSorting } from '../../common/contexts/SortingContext';
import './VehiclesListSorting.scss';

const VehiclesListSorting = ({ changeListStyle }) => {
  const { changeSorting } = useSorting();

  return (
    <div className='sorting'>
      <div className='list-grid'>
        <button className='list' onClick={() => changeListStyle('list')}>
          <i className='fa fa-bars'></i>
          List
        </button>
        <button className='grid' onClick={() => changeListStyle('grid')}>
          <i className='fa fa-th-large'></i>
          Grid
        </button>
      </div>
      <div className='sorting-container'>
        <p>Sort by: </p>
        <select onChange={(e) => changeSorting(e.target.value)}>
          <option value='name'>brand name (A-Z)</option>
          <option value='yom'>year of manufacture (newest)</option>
          <option value='price-up'>price (from lowest)</option>
          <option value='price-down'>price (from highest)</option>
        </select>
      </div>
    </div>
  );
};

export default VehiclesListSorting;
