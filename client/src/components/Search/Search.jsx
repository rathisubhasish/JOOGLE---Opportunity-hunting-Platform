import React from 'react';
import "./Search.css";

const Search = ({searchItem}) => {
    const customPlaceholder = "Search "+searchItem;
  return (
    <>
        <div className="search-container">
            <input 
                type="text" 
                placeholder={searchItem ? customPlaceholder : "Search"} className='search-box'
            />
        </div>
    </>
  )
};

export default Search;