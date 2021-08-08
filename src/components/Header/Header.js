import { useSearchTerm } from '../../common/contexts/PagingContext';
import { useFavorites } from '../../common/contexts/FavoritesContext';

import './Header.scss';

const Header = () => {
  const { searchHandler } = useSearchTerm();
  const { favoritesPage, toggleFavoritesPage } = useFavorites();

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
        {!favoritesPage ? (
          <a className='favourites-btn' onClick={() => toggleFavoritesPage(true)}>
            My favourites
          </a>
        ): (
          <a className='favourites-btn' onClick={() => toggleFavoritesPage(false)}>
            All vehicles
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
