// importing modules
import React from 'react';
import "./Navigation.css";

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
                    <a href={val.link} className="navBtn">
                      {val.title}
                    </a>
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