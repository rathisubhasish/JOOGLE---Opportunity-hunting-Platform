import React, {useEffect, useState} from 'react';
import { CardItem, Filter, Header, Loading } from '../../components/components';
import "./Explore.css";

import {explore} from '../../api/api';
 
const Explore = () => {

  const [exploreData, setExploreData] = useState([]);
  const [exploreLoading, setExploreLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => { 
    setExploreLoading(true);
    const checkExplore = explore()
      .then((actualData) => {
        setExploreData(actualData.data);
        setTimeout(()=> {
          setExploreLoading(false);
        },1000);
      })
      .catch((err) => {
        setExploreLoading(false);
        console.error(err.message)
        }
      );
    return () => checkExplore;
  }, []);

  return (
    <>
          <Header headType="ExploreHeader"/>
          <div className="explore-container">
          <div className="explore-items">
            <div className="explore-category-container">
              <div className="categories-listed">
                <div className="category-item active">
                  <a href="/explore" className='category-item-name'>All</a>
                </div>
                <div className="category-item">
                  <a href="/" className='category-item-name'>Hiring Challenges</a>
                </div>
                <div className="category-item">
                  <a href="/" className='category-item-name'>Jobs</a>
                </div>
                <div className="category-item">
                  <a href="/" className='category-item-name'>Bootcamps</a>
                </div>
                <div className="category-item">
                  <a href="/" className='category-item-name'>Others</a>
                </div> 
              </div>
            </div>
            {exploreLoading ? <Loading loadType="pageLoad"/> :''}
            {!exploreLoading &&
                (
                <>
                  <p className="explore-heading">
                {exploreData.length}
                </p>
                <div className="explore-data">
                {
                  exploreData.map((item,index) => {
                    return(
                        <CardItem data={item} key={index.toString()}/>
                    )
                  })
                }
                </div>
                </>
                )  
            }
            
          </div>
            <Filter />
          </div>
    </>
  )
};

export default Explore;