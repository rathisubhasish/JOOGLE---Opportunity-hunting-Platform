import React, {useState} from 'react';
import "./Search.css";

const Search = ({searchItem}) => {
    const handleClear = () =>{
      setClear(true);
    }

    const stopSearch = () => {
      document.getElementById("search-box").value="";
      setClear(false);
    }

    const [clear, setClear] = useState(false);
    const customPlaceholder = "Search "+searchItem;
  return (
    <>
        <div className="search-container">
          <div className="search-field">
            <input 
                  type="text" 
                  onFocus={handleClear}
                  id="search-box"
                  placeholder={searchItem ? customPlaceholder : "Search"} className='search-box'
              />
          </div>
            {
            clear 
            ?
            <span 
              className="material-icons"
              onClick={stopSearch} 
              id="search-btn-icon"
            >
            clear
            </span>
            :
            <span class="material-icons" id="search-btn-icon">
            search
            </span>
            }
        </div>
    </>
  )
};

export default Search;