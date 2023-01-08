import React, { useState, useContext } from 'react';
import "./FormCSS/Form.css";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";


// functions
import { login } from "../../api/user";
import { UserContext } from '../../UserContext';


const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    window.scrollTo({top : 0, behavior: 'smooth'});
    try {
      const res = await login({ email, password });
      if (res.error) toast.error(res.error, {
        autoClose: 4000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip
      });
      else {
        toast.success(res.message, {
          autoClose: 4000,
          hideProgressBar: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Flip
        });
        setUser(res.username);
        //redirect the user to home
        navigate("/");
      }
    } catch (err) {
      toast.error(err, {
        autoClose: 4000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip
      });
    }
  };

  return (
    <>
      <div className="form-container">
        <form action="" className='form-content'>
        <label htmlFor="" className="form-head" id="login-head">LOGIN</label>
          <label htmlFor="Email" className='label-content'>
            Email
          </label>
          <input
            type="email"
            placeholder='Enter Email Id'
            className='input-content'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="Password" className='label-content'>
            Password
          </label>
          <div className='password-container'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className='input-content'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              id="eye-btn" className="material-icons"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>
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
          <br />
          <button
            disabled={!email || !password} 
            className="btn-submit"
            id="login"
          onClick={handleLogin}
          >
            LOGIN
          </button>
        </form>
      </div>
    </>
  )
};

export default LoginForm;