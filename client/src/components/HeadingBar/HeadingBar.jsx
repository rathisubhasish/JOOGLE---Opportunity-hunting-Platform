import React from 'react';
import "./HeadingBar.css";


const HeadingBar = ({text}) => {
  return (
    <>
        <div className="heading-bar-container">
            <p>{text}</p>            
        </div>
    </>
  )
};

export default HeadingBar;