import React from 'react';
import "./Joogle.css";
import { brochureData, welcomeData } from "./Data/brochure";
import {Brochure, Particles, ScoreCard, Slideshow} from "../../components/components";

const Joogle = () => {
  const user = false;
  return (
    <>
      <div className="joogle-container">
        <Particles />
        <Slideshow />
        <Brochure brochureData={!user ? welcomeData : brochureData}/>
        <ScoreCard />
      </div>
    </>
  )
};

export default Joogle;