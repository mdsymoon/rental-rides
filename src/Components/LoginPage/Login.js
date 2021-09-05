import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import {FcGoogle} from 'react-icons/fc';
import fbIcon from '../../Images/facebook (2).png';

const Login = () => {
    return (
        <div class="login-form mt-5">
      <Form action="#">
        <div class="title">Login</div>
        <div class="input-box underline">
          <input type="text" placeholder="Enter Your Email" required/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Enter Your Password" required/>
          <div class="underline"></div>
        </div>
        <div class="input-box button">
          <input type="submit" name="" value="Continue"/>
        </div>
      </Form>
        <div class="option">or Connect With Social Media</div>
        <div class="google d-flex align-items-center justify-content-center">
        <FcGoogle style={{fontSize:"30px", marginRight:"10px"}}/>
        <p  style={{marginTop:'15px'}}> Sign in With Google</p>
        </div>
        
        <div class="facebook d-flex align-items-center justify-content-center">
        <img src={fbIcon} alt="Facebook" style={{width:"30px", marginRight:"10px"}}/>
        <p  style={{marginTop:'15px'}}> Sign in With Google</p>
        </div>
    </div>
    );
};

export default Login;