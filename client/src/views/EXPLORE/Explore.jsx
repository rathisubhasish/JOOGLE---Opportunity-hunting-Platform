// _____________ importing modules
import React, {useEffect, useState} from 'react';
import { CardItem,Header, Loading } from '../../components/components';
import "./Explore.css";
import NoDataImg from '../../assets/images/global/error/nodata.svg';
import { exploreCategories } from './exploreCategories';

// _____________ importing APIs
import {explore} from '../../api/api';
import { useNavigate } from 'react-router-dom';
 
const Explore = () => {
  const navigate = useNavigate();

  const getCategory = new URLSearchParams(window.location.search).get('category');

  // const [getCategory, setGetCategory] = useState(getInitialCategory);
  // ______________ state variables
  const [exploreData, setExploreData] = useState([]);
  const [exploreLoading, setExploreLoading] = useState(true);
   
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => { 
    setExploreLoading(true);
    const checkExplore = explore({getCategory})
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
  }, [getCategory]);

  const handleExploreCategory = (e) => {
    var categoryDecide = e.target.id;
    console.log(e.target.id);
    if(e.target.id === "All")
    {
      categoryDecide = "";
    }
    navigate({
      pathname: '/explore',
      search: `?category=${categoryDecide}`,
    });
    // setGetCategory(e.target.id);
  }
  return (
    <>
          <Header headType="ExploreHeader"/>
          <div className="explore-container">
          <div className="explore-items">
            <div className="explore-category-container">
              <div className="categories-listed">
                <div className={!getCategory ? "category-item active": "category-item"} onClick={handleExploreCategory}>
                    <span id="All" className='category-item-name'>All</span>
                </div>
                {exploreCategories.map((val,index) => {
                  return(
                      <div key={index.toString()} className={getCategory === val.categoryName ? "category-item active": "category-item"} onClick={handleExploreCategory}>
                        <span id={val.categoryName} className='category-item-name'>{val.categoryName}</span>
                      </div>
                  )
                })}
              </div>
            </div>
            {exploreLoading ? <Loading loadType="pageLoad"/> :''}
            {!exploreLoading &&
                (
                <>
                  <p className="explore-heading">
                  </p>
                  {
                    exploreData.length > 0
                    ?
                    (
                      <>
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
                    :
                    (
                      <>
                        <div className="explore-data">
                          <div className="no-data-container">
                            <img src={NoDataImg} alt="" className='empty-data'/>
                          </div>
                        </div>
                      </>
                    )
                  }
                </>
                )
            }
          </div>
            {/* <Filter /> */}
          </div>
    </>
  )
};

export default Explore;