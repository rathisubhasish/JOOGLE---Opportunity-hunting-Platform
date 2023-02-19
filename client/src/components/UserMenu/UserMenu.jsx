import React, {useContext}from 'react'
import './UserMenu.css';
import { homeMenu, exploreMenu } from './userMenu';
import { logout } from '../../api/api';
import { UserContext } from '../../UserContext';
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";

const UserMenu = ({menuType}) => { 
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    
    const handleUserMenuAction = async (e) => {
        if(e.currentTarget.id === "profile")
        {
            e.preventDefault();
            navigate("/profile");
        }
        if(e.currentTarget.id === "add post")
        {
            e.preventDefault();
            navigate("/addPost");
        }
        if(e.currentTarget.id === "logout")
        {
            try {
                const res = await logout();
                if (res.error) toast.error(res.error, {
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeButton: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
                    });
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
                    setUser(null);
                    navigate("/login");
                }
            } catch (err) {
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
        }
    };

  return (
    <>
        <div className="user-menu-container">
            <div className="user-menu-items">
                <ul className='user-menu-list' id="user-menu-list">
                {
                    menuType === 'homeMenu'
                    ?
                        (
                            homeMenu.map((val,key)=>{
                                return (
                                    <li key={key} className="user-nav-btn" onClick={handleUserMenuAction} id={val.name}>
                                        <span className="material-icons user-menu-icon">
                                        {val.icon} 
                                        </span>
                                        <span className='user-menu-text'>
                                            {val.name}
                                        </span>
                                    </li>
                                );
                            })
                        )
                    :
                        (
                            exploreMenu.map((val,key)=>{
                                return (
                                    <li key={key} className="user-nav-btn" onClick={handleUserMenuAction} id={val.name}>
                                        <span className="material-icons user-menu-icon">
                                        {val.icon} 
                                        </span>
                                        <span className='user-menu-text'>
                                            {val.name}
                                        </span>
                                    </li>
                                );
                            })
                        )
                    }              
                </ul>
            </div>
        </div>
    </>
  )
}

export default UserMenu;