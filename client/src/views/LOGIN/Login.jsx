import React from 'react';
import "./Login.css";
import loginImg from "../../assets/images/login/login.svg";
import {LoginForm, Particles} from "../../components/components";

const Login = () => {
  return (
    <>
    <Particles />
      <div className="login-container">
          <div className="login-items">
            <span id="login-image-container">
              <img src={loginImg} alt="logo" id='login-image'/>
            </span>
            <LoginForm />
          </div>
      </div>
    </>
  )
};

export default Login;