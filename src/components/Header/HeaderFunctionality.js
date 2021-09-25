import React from 'react';
import { useSearchTerm } from '../../common/contexts/PagingContext';
import { useFavorites } from '../../common/contexts/FavoritesContext';
import { useMenuModal } from '../../common/contexts/PopupModalContext';

import './HeaderFunctionality.scss';

const HeaderFunctionality = () => {
  const { searchHandler } = useSearchTerm();
  const { favoritesPage, toggleFavoritesPage } = useFavorites();
  const { menuModal, toggleMenuModal } = useMenuModal();

    return (
      <div className='menu__items'>
        <input
          type='text'
          name='search-vehicle'
          placeholder='Search for vehicle'
          onChange={searchHandler}
          onKeyPress={(e) => e.key === 'Enter' && toggleMenuModal(false)}
        />
        {!favoritesPage ? (
          <a className='favorites-btn' onClick={() => {
            toggleFavoritesPage(true);
            toggleMenuModal(false);
          }}>
            My favourites
          </a>
        ): (
          <a className='favorites-btn' onClick={() => {
            toggleFavoritesPage(false);
            toggleMenuModal(false);
          }}>
            All vehicles
          </a>
        )}
      </div>
    )
}

export default HeaderFunctionality
