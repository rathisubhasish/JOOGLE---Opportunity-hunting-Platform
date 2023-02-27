import React from "react";
import Img from "../../assets/images/global/cardBack.jpg";

const ProfileInfo = () => {
    return(
        <>
            <div className="profile-component-container">
                <div className="profile-info-container">
                    <span className="profile-component-title">
                        Profile Info
                    </span>
                    <span className="material-icons profile-action-item" id="profile-edit-icon">
                    edit
                    </span>
                    <div className="profile-info-content">
                        <label htmlFor="">coming soon</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;