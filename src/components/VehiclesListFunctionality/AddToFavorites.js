import React from 'react';
import { PropTypes } from 'prop-types';
import './AddToFavorites.scss';

const AddToFavorites = ({toggleFavoriteHandler}) => {
    return (
        <div className="add-to-fav">
            <a className="add-fav-button" onClick={toggleFavoriteHandler}>&#9734;</a>
            {/* &#9733; */}
        </div>
    )
}

AddToFavorites.propTypes = {
  toggleFavoriteHandler: PropTypes.func
}

export default AddToFavorites;
