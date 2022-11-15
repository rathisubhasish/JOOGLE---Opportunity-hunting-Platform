import React from 'react';
import "./ScrollUp.css";


const Scrollup = () => {

  const scrollToTop = () => {
    window.scrollTo({top : 0, behavior: 'smooth'});
  }
  return (
    <>
      <span 
        className="material-icons" 
        id="scroll-up-icon"
        onClick={scrollToTop}
      >
        arrow_upward
      </span>
    </>
  )
};

export default Scrollup;