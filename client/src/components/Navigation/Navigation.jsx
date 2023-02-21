// importing modules
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import "./Navigation.css";
import { NavLink, useNavigate } from 'react-router-dom';

// importing navdata
import {unauthorizedNav,homeNav, exploreNav} from "./Navigate";
import { UserMenu } from "../components";

const Navigation = ({navType}) => {
  const [menu, showMenu] = useState(false);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavAction = (command) => {
      if(command.target.id === "search_icon")
      {
        navigate('/explore');
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
                      <span className="material-icons icon-btn" id={val.id} onClick={handleNavAction}>
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
                        <span className="material-icons icon-btn" id={val.id} onClick={handleNavAction}>
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
          {navType === "home" ? (menu ? <UserMenu menuType='homeMenu' visibility={showMenu}/> : '') : (menu ? <UserMenu menuType='exploreMenu' visibility={showMenu}/> : '')}
        </div>
    </>
  ) 
};

export default Navigation;