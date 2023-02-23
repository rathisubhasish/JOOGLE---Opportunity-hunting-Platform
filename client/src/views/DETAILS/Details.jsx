import React, {useEffect} from 'react';
import { CardItem, Filter, Header, Loading } from '../../components/components';
import { useParams } from 'react-router-dom';
import "./Details.css";
import Img from "../../assets/images/global/card/back.jpg";
import CImg from "../../assets/images/global/companies/bmw-2-logo-svgrepo-com.svg";

const Details = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const { postId } = useParams();
  return (
    <>
        <Header headType="DetailHeader" headText=""/>
        <div className="details-container">
            <div className="details-items">
                <div className="detail-cover-container">
                    <span className='detail-cover'>
                    <img src={Img} alt="" className='cover-img'/>
                    </span>  
                </div>
                <div className="detail-company-info-logo">
                    <span className='detail-company-logo-container'>
                        <img src={CImg} alt="logo" className='detail-company-logo'/>
                    </span>
                </div>
                <br />
                <br />
                <div className="detail-header-container">
                    <p className='detail-post-name'>sfddf</p>
                    <p className='detail-post-org'>sfddfsdfs</p>
                </div>
                
                <label htmlFor="" className='detail-label-content'>Category</label>
                <span className="detail-brief-category">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Responsibility</label>
                <span className="detail-brief-category">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Requirements</label>
                <span className="detail-brief-category">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Locations</label>
                <span className="detail-brief-category">
                    Pune
                </span>

                <label htmlFor="" className='detail-label-content'>Working Days</label>
                <span className="detail-brief-category">
                    Pune
                </span>
            </div>
        </div>
    </>
  )
};

export default Details;