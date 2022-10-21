import React from 'react';
import "./Particles.css";
import P1 from "../../assets/images/global/particles/1.svg";
import P2 from "../../assets/images/global/particles/2.svg";
import P3 from "../../assets/images/global/particles/3.svg";
import P4 from "../../assets/images/global/particles/4.svg";
import P5 from "../../assets/images/global/particles/5.svg";
import P6 from "../../assets/images/global/particles/6.svg";

const Particles = () => {
  return (
    <>
      <div className="particles-container">
        <img src={P1} alt="" className="element" id="P1"/>
        <img src={P2} alt="" className="element" id="P2"/>
        <img src={P3} alt="" className="element" id="P3"/>
        <img src={P4} alt="" className="element" id="P4"/>
        <img src={P5} alt="" className="element" id="P5"/>
        <img src={P6} alt="" className="element" id="P6"/>
      </div>
    </>
  ) 
};

export default Particles;