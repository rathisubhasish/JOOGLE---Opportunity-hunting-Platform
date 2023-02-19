import React, {useState} from 'react';
import "./CardItem.css";
import Img from "../../assets/images/global/cardBack.jpg";

const CardItem = ({data}) => {
  const [prize,showPrize] = useState("");
  const [salary,showSalary] = useState("");
  const [fee,showFee] = useState("");

  return (
    <> 
      <a href="/" className="card-container">
        <div className="card-contents">
          {/* _______________ card header  */}
          <div className="card-header-container">
            <div className="card-header-items">
              <div className="card-logo-container">
                <span className="card-logo-icon">
                  <img src={Img} alt="Img" className="card-logo-image" />
                </span>
              </div>
              <div className="card-title-container">
                <span id='card-title'>{data.postName}</span>
                <span id='card-subtitle'>{data.organization}</span>
              </div>
            </div>
          </div>
          
          {/* _______________ card details */}
          <div className="card-details-container">
            <div className="card-brief-detail">
              <div className="card-brief-item">
                <div className="card-brief-left-item">
                    <span className="material-icons brief-icon">
                      how_to_reg
                    </span>
                    <span className="brief-name">
                      {data.registered.length} Registered
                    </span>
                </div>
                <div className="card-brief-right-item">
                    <span className="material-icons brief-icon">
                      timer
                    </span>
                    <span className="brief-name">
                      3 days left
                    </span>
                </div>
              </div>
              <div className="card-brief-item">
                <div className="card-brief-left-item">
                    <span className="material-icons brief-icon">
                      category
                    </span>
                    <span className="brief-name">
                      {data.category}
                    </span>
                </div>
                <div className="card-brief-right-item">
                    <span className="material-icons brief-icon">
                      {
                        data.category === "Hiring Challenges"
                        ?
                        "emoji_events"
                        :
                        (
                          data.category === "Jobs"
                          ?
                          "price_check"
                          :
                          (
                            data.category === "Bootcamps"
                            ?
                            "paid"
                            :
                            ''
                          )
                        )
                      }
                    </span>
                    <span className="brief-name">
                      {
                        data.category === "Hiring Challenges"
                        ?
                        "Prizes"
                        :
                        (
                          data.category === "Jobs"
                          ?
                          (
                            <>
                              {data.salary}
                            </>
                          )
                          :
                          (
                            data.category === "Bootcamps"
                            ?
                            (
                              <>
                                {data.fee}
                              </>
                            )
                            :
                            ''
                          )
                        )
                      }
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
};

export default CardItem;

