import React from 'react';
import { PropTypes } from 'prop-types';
import './AddToFavorites.scss';

const AddToFavorites = ({ toggleFavoriteHandler, isFavorite }) => {
  return (
    <div className="add-to-fav">
      { !isFavorite ? (
        <a className="add-fav-button" onClick={toggleFavoriteHandler}>&#9734;</a>
      ) : (
        <a className="add-fav-button" onClick={toggleFavoriteHandler}>&#9733;</a>
      ) }
    </div>
  )
}

AddToFavorites.propTypes = {
  toggleFavoriteHandler: PropTypes.func
}

export default AddToFavorites;
