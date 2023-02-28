import React, {useState} from 'react';
import "./Profile.css";
import {ChangePassword, Education, Experience, Header, ProfileInfo, Resume} from "../../components/components";
import DeleteAccount from '../../components/ProfileComponents/DeleteAccount';

const Profile = () => {
  const [showInfoContainer, setShowInfoContainer] = useState(true);
  const [showChangePasswordContainer, setShowChangePasswordContainer] = useState(false);
  const [showEducationContainer, setShowEducationContainer] = useState(false);
  const [showExperienceContainer, setShowExperienceContainer] = useState(false);
  const [showResumeContainer, setShowResumeContainer] = useState(false);
  const [showDeleteAccContainer, setShowDeleteAccContainer] = useState(false);

  const handleProfileNavActions = (e) =>{
    setShowInfoContainer(false);
    setShowChangePasswordContainer(false);
    setShowEducationContainer(false);
    setShowExperienceContainer(false);
    setShowResumeContainer(false);
    setShowDeleteAccContainer(false);
    
    if(e.currentTarget.id === "profile-info-container"){
      setShowInfoContainer(true);
    }
    
    if(e.currentTarget.id === "profile-change-password-container"){
      setShowChangePasswordContainer(true);
    }
    if(e.currentTarget.id === "profile-education-container"){
      setShowEducationContainer(true);
    }
    if(e.currentTarget.id === "profile-experience-container"){
      setShowExperienceContainer(true);
    }
    if(e.currentTarget.id === "profile-resume-container"){
      setShowResumeContainer(true);
    }
    if(e.currentTarget.id === "profile-delete-acc-container"){
      setShowDeleteAccContainer(true);
    }

  }

  return (
    <>
    <Header 
      headType="DetailHeader"
      headText="PROFILE"
    />

    <div className="profile-container">
      <div className="profile-content-items">
          <div className="profile-left-panel">
              <ul className='profile-left-nav-list'>
                <li className={showInfoContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-info-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                      info
                  </span>
                  <span className="profile-nav-name">
                      Info
                  </span>
                </li>
                <li className={showChangePasswordContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-change-password-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                      password
                  </span>
                  <span className="profile-nav-name">
                      Change Password
                  </span>
                </li>
                <li className={showEducationContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-education-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                      school
                  </span>
                  <span className="profile-nav-name">
                      Education
                  </span>
                </li>
                <li className={showExperienceContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-experience-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                    work_history
                  </span>
                  <span className="profile-nav-name">
                      Experience
                  </span>
                </li>
                <li className={showResumeContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-resume-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                    article
                  </span>
                  <span className="profile-nav-name">
                      Resume
                  </span>
                </li>
                <li className={showDeleteAccContainer ? 'profile-left-nav-list-item profile-nav-active' : 'profile-left-nav-list-item'} id="profile-delete-acc-container"
                onClick={handleProfileNavActions}>
                  <span className="material-icons profile-nav-icon">
                    delete_forever
                  </span>
                  <span className="profile-nav-name">
                      Delete Account
                  </span>
                </li>
              </ul>
          </div>
          <div className="profile-right-panel">
              {showChangePasswordContainer && 
                <ChangePassword />
              }
              {showInfoContainer && 
                <ProfileInfo />
              }
              {showEducationContainer && 
                <Education />
              }
              {
                showExperienceContainer &&
                <Experience />
              }
              {showResumeContainer && 
                <Resume />
              }
              {showDeleteAccContainer &&
                <DeleteAccount />
              }
          </div>
      </div>
    </div>
    </>
  )
};

export default Profile;