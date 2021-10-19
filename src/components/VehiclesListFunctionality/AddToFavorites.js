import React from 'react';
import { PropTypes } from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './AddToFavorites.scss';

const AddToFavorites = ({ toggleFavoriteHandler, isFavorite }) => {
  return (
    <div className="add-to-fav">
      { !isFavorite ? (
        <a className="add-fav-button" onClick={toggleFavoriteHandler}><StarBorderIcon className="star-icon"/></a>
      ) : (
        <a className="add-fav-button" onClick={toggleFavoriteHandler}><StarIcon className="star-icon"/></a>
      ) }
    </div>
  )
}

AddToFavorites.propTypes = {
  toggleFavoriteHandler: PropTypes.func
}

export default AddToFavorites;
