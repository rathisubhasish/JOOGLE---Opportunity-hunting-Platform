import React, {useState}  from 'react';
// import FilterPopup from '../Popup/FilterPopup';
import "./Filter.css";

const Filter = () => {
    // const [filterPopup, setFilterPopup] = useState(false);
    const handleFilter = () => {
      console.log('sdffsd');
      // setFilterPopup(true);
    }
    return (
        <>
          <span className='filter-container' onClick={handleFilter}>
            <span 
              className="material-icons-outlined filter-icon"
            >
              filter_list
            </span>
            <span className='filter-text'>Filter</span>
          </span>
        </>
    )
};

export default Filter;