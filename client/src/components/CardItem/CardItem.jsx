import React from 'react';
import "./CardItem.css";
import Img from "../../assets/images/global/cardBack.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// functions
import { deletePost } from "../../api/api";

const CardItem = ({data, role}) => {
  const navigate = useNavigate();

  const handleDeletePost = async (e) => {
    e.preventDefault();
    window.scrollTo({top : 0, behavior: 'smooth'});
    try {
      const res = await deletePost({"postId":data._id});
      if (res.error) toast.error(res.error, {
        autoClose: 4000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      else {
        toast.success(res.message, {
          autoClose: 4000,
          hideProgressBar: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // redirect
        window.location.reload(false);
      }

    } catch (err) {
      toast.error("Server error, please try later!", {
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <> 
      <div className="card-container">
        {/* __________________ Action Items */}
        {
            role === "creator"
            ?
            (
              <>
                <div className="card-action-container">
                <div className="card-action-items">
                  <span className="material-icons action-item" id="post-edit-icon">
                    edit
                  </span>
                  <span className="material-icons action-item" id="post-delete-icon" onClick={handleDeletePost}>
                    delete
                  </span>
                  </div>
                </div>  
                <hr /> 
              </>
            )
            :
            ''
          }
          
        <a href="/" className="card-contents">
          
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
          <br />
        </a>
      </div>
    </>
  )
};

export default CardItem;

