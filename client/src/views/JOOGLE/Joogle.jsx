import React from 'react';
import "./Joogle.css";
import { brochureData, welcomeData, slideShowImg, scoresData} from "./Data/brochure";
import {Brochure, Particles, ScoreCard, Slideshow} from "../../components/components";

const Joogle = () => {
  const user = false;
  return (
    <>
      <div className="joogle-container">
        <Particles />
        <Slideshow slideShowImg={slideShowImg}/>
        <Brochure brochureData={!user ? welcomeData : brochureData}/>
        <ScoreCard scoresData={scoresData}/>
      </div>
    </>
  )
};

export default Joogle;