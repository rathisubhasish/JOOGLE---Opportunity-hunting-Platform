import React, {useEffect, useState} from 'react';
import "./Post.css";
import {addPost, myPost} from '../../api/api';
import { CardItem} from '../../components/components';
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
                  myPostData.map((item,index) => {
                    return(
                        <CardItem data={item} key={index.toString()}/>
                    )
                  })
                }
                </div>
            </div>
        </div>
    </>
  )
};

export default MYPOST;