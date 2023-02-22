import React, {useEffect, useState} from 'react';
import "./Post.css";
import Img from "../../assets/images/global/card/back.jpg";
import { AddPostForm, Header, Loading } from '../../components/components';

const ADDPOST = () => {
  const [addPostLoading, setAddPostLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
        {addPostLoading ? <Loading loadType='screenLoad'/> : ''}
        <Header headType="DetailHeader" headText="ADD POST"/>
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
            <AddPostForm loadingVisibility={setAddPostLoading}/>
          </div>
        </div>
    </>
  )
};

export default ADDPOST;