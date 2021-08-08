import './AddToFavorites.scss';

const AddToFavorites = ({addFavoriteVehicleHandler}) => {
    return (
        <div className="add-to-fav">
            <a className="add-fav-button" onClick={addFavoriteVehicleHandler}>&#9734;</a>
            {/* &#9733; */}
        </div>
    )
}

export default AddToFavorites