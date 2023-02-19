import React, { useState } from 'react';
import "./FormCSS/Form.css";

const AddPostForm = () => {
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

    // const todayDate = new Date(Date.now()).toLocaleDateString();
    return (
      <>
        <div className="form-container">
          <form action="" className="form-content">
          <label htmlFor="" className='label-content'>Enter Post Name</label>
            <input
              type="text"
              placeholder='Enter Post Name'
              className='input-content'
              value={postName}
              onChange={(e) => setPostName(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Enter Organization Name</label>
            <input
              type="text"
              placeholder='Enter Organization Name'
              className='input-content'
              value={organizationDecide}
              onChange={(e) => setOrganizationSelection(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Registration Open Date</label>
            <input
              type="date"
              className='input-content'
              min="02/15/2023"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <label htmlFor="" className='label-content'>Registration Close Date</label>
            <input
              type="date"
              placeholder='Enter Post Name'
              className='input-content'
              min="02/15/2023"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
            
            <label htmlFor="" className='label-content'>Category</label>
            <select className='input-dropdown' name="categoryDecide" id="categoryDecide" onChange={(e) => setCategorySelection(e.target.value)} value={categoryDecide}>
              <option value="notSelected">Select Category</option>
              <option value="Hiring Challenges">Hiring Challenges</option>
              <option value="Jobs">Jobs</option>
              <option value="Bootcamps">Bootcamps</option>
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
                        <span class="material-icons">
                          emoji_events
                        </span>
                        <span className='label-content'>
                          1<sup>st</sup>
                        </span>
                        <input type="text" className='input-content' value={firstPrizeDecide}
              onChange={(e) => setFirstPrizeDecide(e.target.value)}/>
                      </div>
                      <div className="prizes-level-item">
                        <span class="material-icons">
                          emoji_events
                        </span>
                        <span className='label-content'>
                          2<sup>nd</sup>
                        </span>
                        <input type="text" className='input-content' value={secondPrizeDecide}
              onChange={(e) => setSecondPrizeDecide(e.target.value)}/>
                      </div>
                      <div className="prizes-level-item">
                        <span class="material-icons">
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
                        <option value="NA">Not Disclose</option>
                        <option value="market">Expected Market Value</option>
                        <option value="0-5LPA">0 - 5 LPA</option>
                        <option value="5-10LPA">5 - 10 LPA</option>
                        <option value="10-20LPA">10 - 20 LPA</option>
                        <option value="20-30LPA">20 - 30 LPA</option>
                        <option value="30-40LPA">30 - 40 LPA</option>
                        <option value="40-50LPA">40 - 50 LPA</option>
                        <option value=">50LPA">&gt; 50 LPA</option>
                      </select>
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
                        required
                      />
                    </>
                )
                :
                ""
              )
            }
            
            <label htmlFor="" className='label-content'>Responsibility</label>
            <textarea name="" id="" className='input-content'  rows="10" value={ResponsibilityDecide}
              onChange={(e) => setResponsibilityDetail(e.target.value)}></textarea>

            <label htmlFor="" className='label-content'>Requirements</label>
            <textarea name="" id="" className='input-content'  rows="10" value={RequirementsDecide}
              onChange={(e) => setRequirementsDetail(e.target.value)}></textarea>
            
            
            <label htmlFor="" className='label-content'>Location</label>
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

          <button
            // disabled={
            //   !username ||
            //   !email ||
            //   !password ||
            //   !confirmPassword ||
            //   password !== confirmPassword ||
            //   !hasSixChar ||
            //   !hasUpperChar ||
            //   !hasLowerChar ||
            //   !hasNumber ||
            //   !hasSpecialChar ||
            //   !contact ||
            //   !terms
            // }
            // onClick={handleRegister}
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