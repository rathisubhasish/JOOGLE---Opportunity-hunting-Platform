import React from 'react';
import "./Joogle.css";
import { brochureData, welcomeData, slideShowImg} from "./Data/brochure";
import {Brochure, Particles, ScoreCard, Slideshow} from "../../components/components";

const Joogle = () => {
  const user = false;
  return (
    <>
      <div className="joogle-container">
        <Particles />
        <Slideshow slideShowImg={slideShowImg}/>
        <Brochure brochureData={user ? welcomeData : brochureData}/>
        <ScoreCard />
      </div>
    </>
  )
};

export default Joogle;