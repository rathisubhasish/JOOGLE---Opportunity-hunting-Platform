// importing modules
import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Navigation.css";
import { NavLink } from 'react-router-dom';

// importing navdata
import {unauthorizedNav,homeNav, exploreNav} from "./Navigate";

const Navigation = ({navType}) => {
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
              (
                navType === "home"
                ?
                homeNav.map((val,key)=>{
                  return (
                      <li key={key}>
                      <span className="material-icons icon-btn" id={val.id}>
                        {val.icon}
                      </span>
                    </li>
                  );
                })
                :
                (
                  navType === "explore"
                  ?
                  exploreNav.map((val,key)=>{
                    return (
                        <li key={key}>
                        <span className="material-icons icon-btn" id={val.id}>
                          {val.icon}
                        </span>
                      </li>
                    );
                  })
                  :
                  ""
                )
              )
              
            }
          </ul>
        </div>
    </>
  ) 
};

export default Navigation;