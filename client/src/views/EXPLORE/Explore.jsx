import React, {useEffect, useState} from 'react';
import { CardItem, Filter } from '../../components/components';
import "./Explore.css";

import {explore} from '../../api/api';

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const checkExplore = explore()
      .then((actualData) => {
        setExploreData(actualData.data);
      })
      .catch((err) => console.error(err.message));
    return () => checkExplore;
  }, []);

  const [exploreData, setExploreData] = useState([]);

  return (
    <>
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
              </div>
            </div>
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
          </div>
            <Filter />
          </div>
    </>
  )
};

export default Explore;