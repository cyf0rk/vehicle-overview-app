import { useFavorites } from '../../common/contexts/FavoritesContext';
import { useMenuModal } from '../../common/contexts/PopupModalContext';

import HeaderFunctionality from './HeaderFunctionality';

import './Header.scss';
import MenuModal from './MenuModal';
import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';
import HamburgerButton from './HamburgerButton';

const Header = () => {
  const { favoritesPage } = useFavorites();
  const { width } = useWindowDimensions();
  const { menuModal, toggleMenuModal } = useMenuModal();

  return (
    <div className='header'>
      <div className='header__title'>
        {!favoritesPage ? <h2>Vehicle Overview</h2> : <h2>Favorite Vehicles Overview</h2>}
      </div>
      {width > 631 ?  
        <HeaderFunctionality />
        : 
        <HamburgerButton toggleMenuModal={toggleMenuModal} menuModal={menuModal} />
      }
      {menuModal && <MenuModal toggleMenuModal={toggleMenuModal} />}
    </div>
  );
};

export default Header;
