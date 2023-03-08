
// _____________________ importing modules
import React, {useState} from 'react';
import loginImg from "../../assets/images/login/login.svg";
import {Header, Loading, LoginForm, Particles} from "../../components/components";
import "./Login.css";

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  return (
    <>
      {loginLoading ? <Loading loadType='screenLoad'/> : ''}
      <Header 
        headType="JoogleHeader" 
      />
      <Particles />
      <div className="login-container">
          <div className="login-items">
            <span id="login-image-container">
              <img src={loginImg} alt="logo" id='login-image'/>
            </span>
            <LoginForm loadingVisibility={setLoginLoading}/>
          </div>
      </div>
    </>
  )
};

export default Login;