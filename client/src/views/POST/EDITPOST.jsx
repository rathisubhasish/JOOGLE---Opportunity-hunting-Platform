import React, {useEffect, useState} from 'react';
import "./Post.css";
import Img from "../../assets/images/global/card/back.jpg";
import { AddPostForm, EditPostForm, Header, Loading } from '../../components/components';
import { useParams } from 'react-router-dom';
import explorePost from '../../api/explorePost';
import moment from 'moment';

const EDITPOST = () => {

  const [editPostLoading, setEditPostLoading] = useState(false);
  const {postId} = useParams();
  const [fetchEditPostData, setFetchEditPostData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <>
        {editPostLoading ? <Loading loadType='screenLoad'/> : ''}
        <Header headType="DetailHeader" headText="EDIT POST"/>
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
            <EditPostForm loadingVisibility={setEditPostLoading} />
          </div>
        </div>
    </>
  )
};


export default EDITPOST;