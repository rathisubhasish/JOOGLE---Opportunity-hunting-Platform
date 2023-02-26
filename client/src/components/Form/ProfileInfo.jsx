import React, { useState } from 'react';
import "./FormCSS/Form.css";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";

const ProfileInfo = ({loadingVisibility}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="profile-data-container">
        <div className="profile-data-contents">
            
        </div>
      </div>
    </>
  )
};

export default ProfileInfo;