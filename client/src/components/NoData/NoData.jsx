import React from 'react';
import "./NoData.css";
import NoDataImg from "../../assets/images/global/error/nodata.svg";

const NoData = () => {
  return (
    <>
      <div className="nodata-container">
        <div className="nodata-items">
            <span className="image-nodata">
                <img src="" alt="" className=''/>
            </span>
        </div>
      </div>
    </>
  )
};

export default NoData;