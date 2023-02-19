import React from 'react';
import { Back } from '../../components';
import Navigation from '../../Navigation/Navigation';
import "../HeaderCss/Header.css";
import {HeadingBar} from '../../components';

const DetailHeader = ({text}) => {
  return (
    <>
        <header>
          <div className="explore-header-container">
            <Back />
            <HeadingBar text={text}/>
            <Navigation navType="explore"/>
          </div>
        </header>
    </>
  )
};

export default DetailHeader;