import React, {useEffect} from 'react';
import { CardItem, Filter } from '../../components/components';
import "./Explore.css";

import {explore} from '../../api/api';

const Explore = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const checkExplore = explore()
      .then((res) => {
        if (res.error) console.error(res.error);
        else console.log(res.data);
      })
      .catch((err) => console.error(err));
    return () => checkExplore;
  }, []);

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
              
            </p>
            <div className="explore-data">
              <CardItem />
            </div>
          </div>

            <Filter />
          </div>
    </>
  )
};

export default Explore;