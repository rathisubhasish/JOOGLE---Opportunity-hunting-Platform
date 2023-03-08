import React, { useState } from 'react';
import "./FormCSS/Form.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

// API import
import {addPost} from '../../api/api';

const AddPostForm = ({loadingVisibility}) => {
    const navigate = useNavigate();
    const [postName, setPostName] = useState("");
    const [organizationDecide, setOrganizationSelection] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [categoryDecide, setCategorySelection] = useState("");
    const [salaryDecide, setSalarySelection] = useState("");
    const [ResponsibilityDecide, setResponsibilityDetail] = useState("");
    const [RequirementsDecide, setRequirementsDetail] = useState("");
    const [LocationDecide, setLocationDecide] = useState("");
    const [minExperienceDecide, setMinExperienceDecide] = useState("");
    const [maxExperienceDecide, setMaxExperienceDecide] = useState("");
    const [workingDayDecide, setWorkingDayDecide] = useState("");
    const [feeDecide, setFeeDecide] = useState("");
    const [firstPrizeDecide, setFirstPrizeDecide] = useState("");
    const [secondPrizeDecide, setSecondPrizeDecide] = useState("");
    const [thirdPrizeDecide, setThirdPrizeDecide] = useState("");
    const [aboutUsDecide, setAboutUsDecide] = useState("");
     
    var todayDate = new Date().toISOString().split('T')[0];
    const handleAddPost = async (e) => {
      e.preventDefault();
      window.scrollTo({top : 0, behavior: 'smooth'});
      loadingVisibility(true);
      const StartDateFormatted = moment(startDate).format("MM/DD/YYYY");
      const EndDateFormatted = moment(endDate).format("MM/DD/YYYY");
      const postData = {
        "postName": postName,
        "organization": organizationDecide,
        "startDate": StartDateFormatted,
        "endDate": EndDateFormatted,
        "aboutUs": aboutUsDecide,
        "category": categoryDecide,
        "responsibility": ResponsibilityDecide,
        "requirements": RequirementsDecide,
        "location": LocationDecide
      }
      if(salaryDecide && categoryDecide === "Jobs"){
        postData.salary = salaryDecide;
      }
      else
      {
        delete postData.salary;
        setSalarySelection("");
      }
      if(workingDayDecide && categoryDecide === "Jobs")
      {
        postData.workingDays = workingDayDecide;
      }
      else
      {
        delete postData.workingDays;
        setWorkingDayDecide("");
      }
      if(feeDecide && categoryDecide === "Bootcamps")
      {
        postData.fees = feeDecide;
      }
      else
      {
        delete postData.fees;
        setFeeDecide("");
      }
      if(firstPrizeDecide && categoryDecide === "Hiring Challenges")
      {
        postData.firstPrize = firstPrizeDecide;
      }
      else
      {
        delete postData.firstPrize;
        setFirstPrizeDecide("");
      }
      if(secondPrizeDecide && categoryDecide === "Hiring Challenges")
      {
        postData.secondPrize = secondPrizeDecide;
      }
      else
      {
        delete postData.secondPrize;
        setSecondPrizeDecide("");
      }
      if(thirdPrizeDecide && categoryDecide === "Hiring Challenges")
      {
        postData.thirdPrize = thirdPrizeDecide;
      }
      else
      {
        delete postData.thirdPrize;
        setThirdPrizeDecide("");
      }
      if(minExperienceDecide)
      {
        postData.minExperience = minExperienceDecide;
      }
      if(maxExperienceDecide)
      {
        postData.maxExperience = maxExperienceDecide;
      }
      console.log(postData);
      
      try {
        const res = await addPost(postData);
        if (res.error){
          loadingVisibility(false);
          toast.error(res.error, {
          autoClose: 4000,
          hideProgressBar: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        }
        else {
          loadingVisibility(false);
          toast.success(res.message, {
            autoClose: 4000,
            hideProgressBar: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setPostName("");
          setOrganizationSelection("");
          setStartDate("");
          setEndDate("");
          setAboutUsDecide("");
          setCategorySelection("");
          setSalarySelection("");
          setResponsibilityDetail("");
          setRequirementsDetail("");
          setLocationDecide("");
          setMinExperienceDecide("");
          setMaxExperienceDecide("");
          setWorkingDayDecide("");
          setFeeDecide("");
          setFirstPrizeDecide("");
          setSecondPrizeDecide("");
          setThirdPrizeDecide("");
          // redirect to home
          navigate("/");
        }
  
      } catch (err) {
        loadingVisibility(false);
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
        <div className="form-container">
          <form action="" className="form-content">
          <label htmlFor="" className='label-content'>Enter Post Name <span className='mandatory-star'>*</span></label>
            <input
              type="text"
              placeholder='Enter Post Name'
              className='input-content'
              value={postName}
              maxLength="30"
              onChange={(e) => setPostName(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Enter Organization <span className='mandatory-star'>*</span></label>
            <input
              type="text"
              placeholder='Enter Organization Name'
              className='input-content'
              value={organizationDecide}
              onChange={(e) => setOrganizationSelection(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Registration Open Date <span className='mandatory-star'>*</span></label>
            <input
              type="date"
              className='input-content'
              min={todayDate}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />

            {
              startDate
              ?
              (
                <>
                  <label htmlFor="" className='label-content'>Registration Close Date <span className='mandatory-star'>*</span></label>
                  <input
                    type="date"
                    placeholder='Enter Post Name'
                    className='input-content'
                    min={startDate}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </>
              )
              :
              ''
            }
            
            <label htmlFor="" className='label-content'>About Us <span className='mandatory-star'>*</span></label>
            <textarea name="" id="" className='input-content'  rows="10" value={aboutUsDecide}
              onChange={(e) => setAboutUsDecide(e.target.value)}>
            </textarea>

            <label htmlFor="" className='label-content'>Category <span className='mandatory-star'>*</span></label>
            <select className='input-dropdown' name="categoryDecide" id="categoryDecide" value={categoryDecide} onChange={(e) => setCategorySelection(e.target.value)} >
              <option value="notSelected">Select Category</option>
              <option value="Hiring Challenges">Hiring Challenges</option>
              <option value="Jobs">Jobs</option>
              <option value="Bootcamps">Bootcamps</option>
              <option value="Others">Others</option>
            </select>

            {
              categoryDecide === "Hiring Challenges"
              ?
              (
                <>
                  <label htmlFor="" className='label-content'>Prizes</label>
                  <div className="prizes-container">
                    <div className="prizes-levels">
                      <div className="prizes-level-item">
                        <span className="material-icons">
                          emoji_events
                        </span>
                        <span className='label-content'>
                          1<sup>st</sup>
                        </span>
                        <input type="text" className='input-content' value={firstPrizeDecide}
              onChange={(e) => setFirstPrizeDecide(e.target.value)}/>
                      </div>
                      <div className="prizes-level-item">
                        <span className="material-icons">
                          emoji_events
                        </span>
                        <span className='label-content'>
                          2<sup>nd</sup>
                        </span>
                        <input type="text" className='input-content' value={secondPrizeDecide}
              onChange={(e) => setSecondPrizeDecide(e.target.value)}/>
                      </div>
                      <div className="prizes-level-item">
                        <span className="material-icons">
                          emoji_events
                        </span>
                        <span className='label-content'>
                          3<sup>rd</sup>
                        </span>
                        <input type="text" className='input-content' value={thirdPrizeDecide}
              onChange={(e) => setThirdPrizeDecide(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                </>
              )
              :
              (
                categoryDecide === "Jobs"
                ?
                  (
                    <>
                      <label htmlFor="" className='label-content'>Salary/Stipend</label>
                      <select name="salaryDecide" id="salaryDecide" className='input-dropdown' value={salaryDecide} onChange={(e) => setSalarySelection(e.target.value)}>
                        <option value="">Select Salary</option>
                        <option value="Not Disclose">Not Disclose</option>
                        <option value="Market Expected">Expected Market Value</option>
                        <option value="0-5LPA">0 - 5 LPA</option>
                        <option value="5-10LPA">5 - 10 LPA</option>
                        <option value="10-20LPA">10 - 20 LPA</option>
                        <option value="20-30LPA">20 - 30 LPA</option>
                        <option value="30-40LPA">30 - 40 LPA</option>
                        <option value="40-50LPA">40 - 50 LPA</option>
                        <option value=">50LPA">&gt; 50 LPA</option>
                      </select>

                      <label htmlFor="" className='label-content'>Working days</label>
                      <input
                        type="number"
                        className='input-content'
                        max="7"
                        min="0"
                        value={workingDayDecide}
                        onChange={(e) => setWorkingDayDecide(e.target.value)}
                        required
                      />
                    </>
                  )
                :
                categoryDecide === "Bootcamps"
                ?
                (
                  <>
                      <label htmlFor="" className='label-content'>Fees</label>
                      <input
                        type="text"
                        className='input-content'
                        value={feeDecide}
                        onChange={(e) => setFeeDecide(e.target.value)}
                      />
                    </>
                )
                :
                ""
              )
            }
            
            <label htmlFor="" className='label-content'>Responsibility <span className='mandatory-star'>*</span></label>
            <textarea name="" id="" className='input-content'  rows="10" value={ResponsibilityDecide}
              onChange={(e) => setResponsibilityDetail(e.target.value)}></textarea>

            <label htmlFor="" className='label-content'>Requirements <span className='mandatory-star'>*</span></label>
            <textarea name="" id="" className='input-content'  rows="10" value={RequirementsDecide}
              onChange={(e) => setRequirementsDetail(e.target.value)}></textarea>
            
            
            <label htmlFor="" className='label-content'>Location <span className='mandatory-star'>*</span></label>
            <input
              type="text"
              className='input-content'
              value={LocationDecide}
              onChange={(e) => setLocationDecide(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Experience</label>
            <div className="experience-container">
              <div className="experience-items">
                <label htmlFor="" className='label-content'>Min</label>
                <input
                  type="number"
                  className='input-content'
                  max="50"
                  min="0"
                  value={minExperienceDecide}
                  onChange={(e) => setMinExperienceDecide(e.target.value)}
                  required
                />
                <label htmlFor="" className='label-content'>Max</label>
                <input
                  type="number"
                  className='input-content'
                  max="50"
                  min="0"
                  value={maxExperienceDecide}
                  onChange={(e) => setMaxExperienceDecide(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />

          <button
            disabled={
              !postName ||
              !organizationDecide ||
              !startDate ||
              !endDate ||
              !aboutUsDecide ||
              !categoryDecide ||
              !ResponsibilityDecide ||
              !RequirementsDecide ||
              !LocationDecide
            }
            onClick={handleAddPost}
            className="btn-submit"
            id="addPost">
            Add Post
          </button>
          </form>
        </div>
      </>
    )
};

export default AddPostForm;