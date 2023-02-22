import React, {useEffect, useState} from 'react';
import "./Post.css";
import {addPost, myPost} from '../../api/api';
import { CardItem, Header, Loading} from '../../components/components';
import NoDataImg from '../../assets/images/global/error/nodata.svg';

const MYPOST = () => {
  const [myPostData, setMyPostData] = useState([]);
  const [myPostloading, setMyPostLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    setMyPostLoading(true);
    const checkMyPost = myPost()
      .then((actualData) => {
        setMyPostData(actualData.data);
        setMyPostLoading(false);
      })
      .catch((err) => {
        console.error(err.message)
        setMyPostLoading(false);  
      }
      );
    return () => checkMyPost;
  }, []);

  

  return (
    <> 
      <Header headType="DetailHeader" headText="MY POST"/>
      <div className="info-container">
          <div className="mypost-items">
              {myPostloading ? <Loading loadType='pageLoad'/> :''}
              {
                !myPostloading
                &&
                (
                  <>
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
                  </>
                )
              }
          </div>
          <br />
      </div>
    </>
  )
};

export default MYPOST;