// importing modules
import React from 'react';
import "./Navigation.css";
import { NavLink } from 'react-router-dom';

// importing navdata
import {unauthorizedNav,authorizedNav} from "./Navigate";

const Navigation = () => {
  return (
    <>
        <div className="menu-container">
          <ul>
            {
              unauthorizedNav.map((val,key)=>{
                return (
                  <li key={key}>
                    <NavLink to={val.link} className="navBtn">
                      {val.title}
                    </NavLink>
                  </li>
                );
              })
            }
          </ul>
        </div>
    </>
  ) 
};

export default Navigation;