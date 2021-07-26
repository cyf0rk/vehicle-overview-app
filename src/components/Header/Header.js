import './Header.scss';

const Header = () => {
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
        />
        <a className='favourites-btn' href=''>
          My favourites
        </a>
      </div>
    </div>
  );
};

export default Header;
