import React from 'react';
import ReactLoading from 'react-loading';
import "./Loading.css";

const Loading = () => {
  return (
    <> 
        <div className="loading-container screenLoad">
            <ReactLoading 
                type="spin"
                color="#1c4980"
                width="50px"
                height="50px"
            />
        </div>
    </>
  )
};

export default Loading;