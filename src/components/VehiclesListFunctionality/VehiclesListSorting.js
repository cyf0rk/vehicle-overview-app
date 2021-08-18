import { useSorting, useSortingStyle } from "../../common/contexts/SortingContext";

import "./VehiclesListSorting.scss";

const VehiclesListSorting = () => {
  const { changeSorting } = useSorting();
  const { changeListStyle } = useSortingStyle();

  return (
    <div className="sorting">
      <div className="list-grid">
        <button className="list" onClick={() => changeListStyle("list")}>
          <i className="fa fa-bars"></i>
          List
        </button>
        <button className="grid" onClick={() => changeListStyle("grid")}>
          <i className="fa fa-th-large"></i>
          Grid
        </button>
      </div>
      <div className="sorting-container">
        <p>Sort by: </p>
        <select onChange={(e) => changeSorting(e.target.value)}>
          <option value="name" onChange={(e) => changeSorting(e.target.value)}>
            brand name (A-Z)
          </option>
          <option value="yom" onChange={(e) => changeSorting(e.target.value)}>
            year of manufacture (newest)
          </option>
          <option
            value="price-up"
            onChange={(e) => changeSorting(e.target.value)}
          >
            price (from lowest)
          </option>
          <option
            value="price-down"
            onChange={(e) => changeSorting(e.target.value)}
          >
            price (from highest)
          </option>
        </select>
      </div>
    </div>
  );
};

export default VehiclesListSorting;
