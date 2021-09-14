import React from 'react';
import './AddToFavorites.scss';

const AddToFavorites = ({toggleFavoriteHandler}) => {
    return (
        <div className="add-to-fav">
            <a className="add-fav-button" onClick={toggleFavoriteHandler}>&#9734;</a>
            {/* &#9733; */}
        </div>
    )
}

export default AddToFavorites;
