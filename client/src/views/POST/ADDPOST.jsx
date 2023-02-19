import React, {useEffect} from 'react';
import "./Post.css";
import Img from "../../assets/images/global/card/back.jpg";
import { AddPostForm } from '../../components/components';

const ADDPOST = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
        <div className="info-container">
          <div className="info-cover-container">
            <span className='info-cover'>
              <img src={Img} alt="" className='cover-img'/>
            </span>  
          </div>
          <div className="info-items">
            <div className="company-info-logo">
              <span className='company-logo-container'>
                <img src={Img} alt="logo" className='company-logo'/>
              </span>
            </div>
            <br />
            <AddPostForm />
          </div>
        </div>
    </>
  )
};

export default ADDPOST;