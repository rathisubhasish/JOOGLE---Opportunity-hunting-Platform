import React, { useContext, useEffect } from 'react';
import "./Joogle.css";
import { brochureData, welcomeData, slideShowImg, scoresData} from "./Data/brochure";
import {Brochure, Header, Particles, ScoreCard, Slideshow} from "../../components/components";
import { UserContext } from "../../UserContext";


const Joogle = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const {user} = useContext(UserContext);
  return (
    <>
      <Header 
        headType="JoogleHeader" 
      />
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