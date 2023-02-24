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
                
                <div className="detail-brief-card-container">
                    <div className="detail-brief-card-items">
                        <div className="left-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                how_to_reg
                            </span>
                            <span className="detail-brief-card-name">
                                4 Registered
                            </span>
                        </div>
                        <div className="right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                timer
                            </span>
                            <span className="detail-brief-card-name">
                                3 days left
                            </span>
                        </div>
                    </div>
                </div>
                
                <label htmlFor="" className='detail-label-content'>About us</label>
                <span className="detail-brief">
                    About your company
                </span>

                <label htmlFor="" className='detail-label-content'>Category</label>
                <span className="detail-brief">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Responsibility</label>
                <span className="detail-brief">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Requirements</label>
                <span className="detail-brief">
                    Bootcamps
                </span>

                <label htmlFor="" className='detail-label-content'>Important Information</label>
                <div className="detail-brief-card-container">
                    <div className="detail-brief-card-items">
                        <div className="left-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                location_pin
                            </span>
                            <span className="detail-brief-card-name">
                                pune
                            </span>
                        </div>
                        <div className="right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                work_history
                            </span>
                            <span className="detail-brief-card-name">
                                2 - 3 year experience
                            </span>
                        </div>
                    </div>
                    <div className="detail-brief-card-items">
                        <div className="left-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                event
                            </span>
                            <span className="detail-brief-card-name">
                                5 day working
                            </span>
                        </div>
                        <div className="right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                event_busy
                            </span>
                            <span className="detail-brief-card-name">
                                Last date 04/12/2022
                            </span>
                        </div>
                    </div>
                </div>

                <label htmlFor="" className='detail-label-content'>Prizes</label>
                <div className="detail-brief-card-container">
                    <div className="detail-brief-card-items">
                        <div className="left-right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                emoji_events
                            </span>
                            <span className="detail-brief-card-name">
                                1st position - 
                            </span>
                        </div>
                    </div>
                    <div className="detail-brief-card-items">
                        <div className="left-right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                military_tech
                            </span>
                            <span className="detail-brief-card-name">
                                2nd position - 
                            </span>
                        </div>
                    </div>
                    <div className="detail-brief-card-items">
                        <div className="left-right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                military_tech
                            </span>
                            <span className="detail-brief-card-name">
                                3rd position - 
                            </span>
                        </div>
                    </div>
                </div>

                <label htmlFor="" className='detail-label-content'>Salary / Stipend</label>
                <div className="detail-brief-card-container">
                    <div className="detail-brief-card-items">
                        <div className="left-right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                local_atm
                            </span>
                            <span className="detail-brief-card-name">
                                50 - 60 LPA
                            </span>
                        </div>
                    </div>
                </div>

                <label htmlFor="" className='detail-label-content'>Fees</label>
                <div className="detail-brief-card-container">
                    <div className="detail-brief-card-items">
                        <div className="left-right-detail-brief-card">
                            <span className="material-icons detail-brief-card-icon">
                                attach_money
                            </span>
                            <span className="detail-brief-card-name">
                                50,000 Rs
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Details;