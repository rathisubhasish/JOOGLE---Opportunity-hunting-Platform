import React from 'react';
import Navigation from '../../Navigation/Navigation';
import "../HeaderCss/Header.css";
import Back from "../../Back/Back";
import Search from "../../Search/Search";

const ExploreHeader = () => {
  return (
    <>
        <header>
          <div className="explore-header-container">
            <Back/>
            <Search />            
            <Navigation navType="explore" />
          </div>
        </header>
    </>
  )
};

export default ExploreHeader;