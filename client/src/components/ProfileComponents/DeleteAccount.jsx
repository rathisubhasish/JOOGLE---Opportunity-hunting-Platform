import React, {useState} from "react";

import "./ProfileComponents.css";
import { toast, Flip } from "react-toastify";

const DeleteAccount = () => {


    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        window.scrollTo({top : 0, behavior: 'smooth'});
        try {
          const res = await changePassword({password});
          if (res.error)
          {
            toast.error(res.error, {
            autoClose: 4000,
            hideProgressBar: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip
            });
          }
          else {
            toast.success(res.message, {
              autoClose: 4000,
              hideProgressBar: true,
              closeButton: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              transition: Flip
            });
            //redirect the user to home
            setNewPassword("");
          }
        } catch (err) {
            setNewPassword("");
            toast.error(err, {
            autoClose: 4000,
            hideProgressBar: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip
          });
        }

      };

    return(
        <>
            <div className="profile-component-container">
                <div className="change-password-container">
                    <span className="profile-component-title">
                        Change password
                    </span>
                    
                    <label htmlFor="" className='profile-label-content'>Enter New Password <span className='mandatory-star'>*</span></label>
                    <input
                    type={showPassword ? "text":"password"}
                    placeholder='Enter New Password'
                    className='profile-input-content'
                    value={password}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    />
                    <br />

                    <div className="change-password-action-container">
                        <button
                            disabled={!password}
                            onClick={handlePasswordVisibility}
                            className="profile-btn-submit"
                            id="showpassword-btn">
                                {
                                    showPassword
                                    ?
                                    "Hide"
                                    : 
                                    "Show"
                                }
                        </button>
                        <button
                            disabled={!password}
                            onClick={handleChangePassword}
                            className="profile-btn-submit"
                            id="changepassword-btn">
                                Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DeleteAccount;