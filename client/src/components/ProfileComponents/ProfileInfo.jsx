import React, {useState, useEffect} from "react";
import profileInfo from "../../api/profileInfo";

const ProfileInfo = () => {

    useEffect(() => {
        // setProfileInfoLoading(true);
        const checkProfileInfo = profileInfo()
          .then((actualData) => {
                setProfileInfoData(actualData);
          })
          .catch((err) => {
            console.error(err.message)
            // setMyPostLoading(false);  
          }
          );
        return () => checkProfileInfo;
      }, []);

      const handleEditBtn = () => {
        setShowEditBoxes(true);
      }

      const handleDeleteBtn = () => {
        setShowEditBoxes(false);
      }

      const [profileInfoData, setProfileInfoData] = useState("");
      const [showEditBoxes, setShowEditBoxes] = useState(false);

    return(
        <>
            <div className="profile-component-container">
                <div className="profile-info-container">
                    <span className="profile-component-title">
                        Profile Info
                    </span>
                    {
                        showEditBoxes
                        ?
                        (
                            <>
                                <span className="material-icons profile-action-item" id="profile-delete-icon" onClick={handleDeleteBtn}>
                                delete
                                </span>
                                <span className="material-icons profile-action-item" id="profile-save-icon">
                                save_as
                                </span>        
                            </>
                        )
                        :
                        (
                            <>
                            <span className="material-icons profile-action-item" id="profile-edit-icon" onClick={handleEditBtn}>
                                edit
                                </span>
                            </>
                        )
                    }
                    
                    <div className="profile-info-content">
                        <div className="profile-info-item">
                            <span className="profile-field-area">
                                <label htmlFor="" className='profile-label-content'>username</label>
                            </span>
                            <span className="profile-field-item">
                                {
                                    showEditBoxes
                                    ?
                                    <input type="text" className='profile-input-content'/>
                                    :
                                    <span className="profile-field-value">
                                        {profileInfoData.username}
                                    </span>
                                }   
                            </span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-field-area">
                                <label htmlFor="" className='profile-label-content'>email</label>
                            </span>
                            <span className="profile-field-item">
                                {
                                    showEditBoxes
                                    ?
                                    <input type="text" className='profile-input-content'/>
                                    :
                                    <span className="profile-field-value">
                                        {profileInfoData.email}
                                    </span>
                                }   
                            </span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-field-area">
                                <label htmlFor="" className='profile-label-content'>contact</label>
                            </span>
                            <span className="profile-field-item">
                                {
                                    showEditBoxes
                                    ?
                                    <input type="text" className='profile-input-content'/>
                                    :
                                    <span className="profile-field-value">
                                        {profileInfoData.contact}
                                    </span>
                                }   
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;