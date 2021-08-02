import './VehiclesListSorting.scss';

const VehiclesListSorting = ({ changeListStyle }) => {
  return (
    <div className='sorting'>
      <button className='list' onClick={() => changeListStyle('list')}>
        <i className='fa fa-bars'></i>
        List
      </button>
      <button className='grid' onClick={() => changeListStyle('grid')}>
        <i className='fa fa-th-large'></i>
        Grid
      </button>
    </div>
  );
};

export default VehiclesListSorting;
