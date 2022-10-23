import React from 'react';
import "./Form.css";

const SignupForm = () => {
  return (
    <>
      <div className="form-container">
        <form action="" className="form-content">
          <label htmlFor="" className='label-content'>Username</label>
          <input
            type="text"
            placeholder='Enter Username'
            className='input-content'
            // value={username}
            // onChange = {(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Email</label>
          <input
            type="email"
            placeholder='Enter Email Id'
            className='input-content'
            // value={email}
            // onChange = {(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Password</label>
          <input
            type="password"
            placeholder='Enter Password'
            className='input-content'
            // value={password}
            // onChange = {(e) => setPassword(e.target.value)}
            required
          />

          {/* {showCondition && <div className="input-conditions">
            <span className='condition-item'>
              {hasSixChar ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>length &gt; 6</p>
            </span>
            <span className='condition-item'>
              {hasUpperChar ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one uppercase</p>
            </span>
            <span className='condition-item'>
              {hasLowerChar ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one lowercase</p>
            </span>
            <span className='condition-item'>
              {hasNumber ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one number</p>
            </span>
            <span className='condition-item'>
              {hasSpecialChar ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one special character</p>
            </span>
          </div>
          } */}

          <label htmlFor="" className='label-content'>Confirm Password</label>

          <input
            type="password"
            placeholder='Re-Enter Password'
            className='input-content'
            // value={confirmPassword}
            // onChange = {(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* {password && confirmPassword && <div className="input-conditions">
            <span className='condition-item'>
              {password === confirmPassword ? <span className="material-symbols-outlined checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>password matched</p>
            </span>
          </div>
          } */}

<label htmlFor="" className='label-content'>Mobile Number</label>
<input 
                type="tel"
                placeholder='xxxxx-xxxxx' 
                className='input-content'
                maxLength={10}
                pattern="[0-9]{10}"
                // value={contactNumber}
                // onChange = {(e) => setContactNumber(e.target.value)}
                required
            />
            {/* {showCondition && <div className="input-conditions">
                <span className='condition-item'>
                    {contactNumber ? <span className="material-symbols-outlined checkSuccessIcon">
                    verified
                    </span> : <span></span>}
                    <p>eg - 9875496852</p>
                </span>
            </div>
            } */}

<div className="checkbox-container">
                <input 
                    type="checkbox"
                    className='input-content'
                    id="checkbox"
                    // onChange = {()=> setTerms(!terms)}
                    required
                />
                <label htmlFor="" className='label-content'>Terms & Condition</label>    
            </div>
            <button 
                // disabled = {
                //     !username || 
                //     !email || 
                //     !password || 
                //     !confirmPassword || 
                //     password !== confirmPassword ||
                //     !hasSixChar ||
                //     !hasUpperChar ||
                //     !hasLowerChar ||
                //     !hasNumber ||
                //     !hasSpecialChar || 
                //     !contactNumber ||
                //     !terms
                // } 
                // onClick={handleRegister}
                className="btn-submit" 
                id="signup">
                SIGNUP
            </button>
        </form>
      </div>
    </>
  )
};

export default SignupForm;