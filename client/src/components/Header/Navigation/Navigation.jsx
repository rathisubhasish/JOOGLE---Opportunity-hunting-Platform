// importing modules
import React, { useState, useContext } from "react";
import { UserContext } from "../../../UserContext";
import "./Navigation.css";
import { NavLink } from 'react-router-dom';

// importing navdata
import {unauthorizedNav,authorizedNav} from "./Navigate";

const Navigation = () => {
  const {user} = useContext(UserContext);
  return (
    <>
        <div className="menu-container">
          <ul>
            
            {
              !user ?
              unauthorizedNav.map((val,key)=>{
                return (
                  <li key={key}>
                    <NavLink to={val.link} className="navBtn">
                      {val.title}
                    </NavLink>
                  </li>
                );
              })
              :
              authorizedNav.map((val,key)=>{
                return (
                  <li key={key}>
                    <span className="material-icons icon-btn" id={val.id}>
                      {val.icon}
                    </span>
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