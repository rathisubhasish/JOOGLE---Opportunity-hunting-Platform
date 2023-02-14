// importing modules
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import "./Navigation.css";
import { NavLink } from 'react-router-dom';

// importing navdata
import {unauthorizedNav,homeNav, exploreNav} from "./Navigate";
import { UserMenu } from "../components";

const Navigation = ({navType}) => {
  const [menu, showMenu] = useState(false);
  const {user} = useContext(UserContext);

  const handleHomeNavAction = (command) => {
      if(command.target.id === "search_icon")
      {
        alert("search");
      } 
      if(command.target.id === "notifications")
      {
        alert("notifications");
      }
      if(command.target.id === "user")
      {
        showMenu(!menu);
      }
  }
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
                      <span className="material-icons icon-btn" id={val.id} onClick={handleHomeNavAction}>
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
                        <span className="material-icons icon-btn" id={val.id} onClick={handleHomeNavAction}>
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
          {menu ? <UserMenu /> : ""}
        </div>
    </>
  ) 
};

export default Navigation;