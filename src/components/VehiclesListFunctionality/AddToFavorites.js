import './AddToFavorites.scss';

const AddToFavorites = ({addFavoriteVehicleHandler}) => {
    return (
        <div className="add-to-fav">
            <button className="add-fav-button" onClick={addFavoriteVehicleHandler}>Add to favorties</button>
        </div>
    )
}

export default AddToFavorites