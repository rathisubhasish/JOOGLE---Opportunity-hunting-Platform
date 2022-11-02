import React from 'react';
import "./Joogle.css";
import { brochureData } from "./brochureData";
import {Brochure, Particles, Slideshow} from "../../components/components";

const Joogle = () => {
  return (
    <>
      <div className="joogle-container">
        <Particles />
        <br />
        <Slideshow />
        <br />
        <Brochure brochureData={brochureData}/>
      </div>
    </>
  )
};

export default Joogle;