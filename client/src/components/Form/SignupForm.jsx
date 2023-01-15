import React, { useState } from 'react';
import "./FormCSS/Form.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// functions
import { signup } from "../../api/user";


const SignupForm = () => {
  const navigate = useNavigate();
  const [showCondition] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContactNumber] = useState("");
  const [terms, setTerms] = useState(false);
  // const [checkRole, setCheckRole] = useState(false);
  
  // Password Validation
  let hasSixChar = password.length > 6;
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  const handleRegister = async (e) => {
    e.preventDefault();
    window.scrollTo({top : 0, behavior: 'smooth'});
    try {
      const res = await signup({ username, email, password, contact });
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
        // redirect to login
        navigate("/login");
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
      <div className="form-container">
        <form action="" className="form-content">
          <label htmlFor="" className="form-head" id="signup-head">SIGNUP</label>
          <label htmlFor="" className='label-content'>Username</label>
          <input
            type="text"
            placeholder='Enter Username'
            className='input-content'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Email</label>
          <input
            type="email"
            placeholder='Enter Email Id'
            className='input-content'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Password</label>
          <input
            type="password"
            placeholder='Enter Password'
            className='input-content'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {showCondition && <div className="input-conditions">
            <span className='condition-item'>
              {hasSixChar ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>length &gt; 6</p>
            </span>
            <span className='condition-item'>
              {hasUpperChar ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one uppercase</p>
            </span>
            <span className='condition-item'>
              {hasLowerChar ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one lowercase</p>
            </span>
            <span className='condition-item'>
              {hasNumber ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one number</p>
            </span>
            <span className='condition-item'>
              {hasSpecialChar ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>one special character</p>
            </span>
          </div>
          }

          <label htmlFor="" className='label-content'>Confirm Password</label>

          <input
            type="password"
            placeholder='Re-Enter Password'
            className='input-content'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {password && confirmPassword && <div className="input-conditions">
            <span className='condition-item'>
              {password === confirmPassword ? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>password matched</p>
            </span>
          </div>
          }

          <label htmlFor="" className='label-content'>Mobile Number</label>
          <input
            type="tel"
            placeholder='xxxxx-xxxxx'
            className='input-content'
            maxLength={10}
            pattern="[0-9]{10}"
            value={contact}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          {showCondition && <div className="input-conditions">
            <span className='condition-item'>
              {contact? <span className="material-icons checkSuccessIcon">
                verified
              </span> : <span></span>}
              <p>eg - 9875496852</p>
            </span>
          </div>
          }

          {/* <div className="role-container">
            <div className="radio-item">
              <input type="radio" name="role" id="student" value="student" />
              <label htmlFor="" className='label-content'>Student</label>
            </div>
            <div className="radio-item">
              <input type="radio" name="role" id="company" value="company"/>
              <label htmlFor="" className='label-content'>Company</label>
            </div>
          </div> */}

          <div className="checkbox-container">
            <div className="checkbox-item">
              <input
                type="checkbox"
                className='input-content'
                id="checkbox"
                onChange={() => setTerms(!terms)}
                required
              />
              <label htmlFor="" className='label-content' >Terms & Condition</label>
            </div>
          </div>
            <br />
          <button
            disabled={
              !username ||
              !email ||
              !password ||
              !confirmPassword ||
              password !== confirmPassword ||
              !hasSixChar ||
              !hasUpperChar ||
              !hasLowerChar ||
              !hasNumber ||
              !hasSpecialChar ||
              !contact ||
              !terms
            }
            onClick={handleRegister}
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