import React from 'react';
import "./FormCSS/Form.css";
const LoginForm = () => {
  return (
    <>
      <div className="form-container">
        <form action="" className='form-content'>
            <label htmlFor="Email" className='label-content'>
                Email
            </label>
            <input 
                type="email" 
                placeholder='Enter Email Id'
                className='input-content'
                // value={email}
                // onChange = {(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="Password" className='label-content'>
                Password
            </label>
            <div className='password-container'>
                <input 
                    // type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className='input-content'
                    id="password"
                    // value={password}
                    // onChange = {(e) => setPassword(e.target.value)}
                    required
                />
                <span 
                    id="eye-btn"
                    // onClick={()=>
                    //     setShowPassword(!showPassword)
                    //   }    
                >
                    {/* {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} */}
                </span>
            </div>
            <br />
            <button 
                // disabled={!email || !password} 
                className="btn-submit" 
                id="login"
                // onClick={handleLogin}
                >
                LOGIN
            </button>
        </form>
      </div> 
    </>
  )
};

export default LoginForm;