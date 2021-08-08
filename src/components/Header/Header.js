import { useSearchTerm } from '../../common/contexts/PagingContext';

import './Header.scss';

const Header = () => {
  const { searchHandler } = useSearchTerm();

  return (
    <div className='header'>
      <div className='header__left'>
        <h2>Vehicle Overview</h2>
      </div>
      <div className='header__right'>
        <input
          type='text'
          name='search-vehicle'
          placeholder='Search for vehicle'
          onChange={searchHandler}
        />
        <a className='favourites-btn' href=''>
          My favourites
        </a>
      </div>
    </div>
  );
};

export default Header;
