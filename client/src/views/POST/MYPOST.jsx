import React, {useEffect, useState} from 'react';
import "./Post.css";
import {addPost, myPost} from '../../api/api';
import { CardItem} from '../../components/components';
import NoDataImg from '../../assets/images/global/error/nodata.svg';

const MYPOST = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const checkMyPost = myPost()
      .then((actualData) => {
        setMyPostData(actualData.data);
      })
      .catch((err) => console.error(err.message));
    return () => checkMyPost;
  }, []);

  const [myPostData, setMyPostData] = useState([]);

  return (
    <> 
      <div className="info-container">
          <div className="mypost-items">
              <div className="user-post">
              {
                myPostData.length > 0
                ?
                (
                myPostData.map((item,index) => {
                  return(
                      <CardItem data={item} key={index.toString()} role="creator"/>
                  )
                })
                )
                :
                (
                  <>
                    <img src={NoDataImg} alt="" className='empty-data'/>
                  </>
                )
              }
              </div>
          </div>
          <br />
      </div>
    </>
  )
};

export default MYPOST;