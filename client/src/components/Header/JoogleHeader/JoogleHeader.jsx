import React from 'react';
import "../HeaderCss/Header.css"
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';

const JoogleHeader = () => {
  return (
    <>
        <header>
            <Logo />
            <Navigation navType="home"/>
        </header>
    </>
  )
};

export default JoogleHeader;