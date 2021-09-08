import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import fbIcon from "../../Images/facebook (2).png";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from './../../App';
import { useHistory , useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          email: user.email,
          username: user.displayName,
          userImg: user.photoURL,
        };
        setLoggedInUser(newUser);
        history.replace(from);
        console.log(loggedInUser);
        console.log(newUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="login-form mt-5">
      <Form action="#">
        <div className="title">Login</div>
        <div className="input-box underline">
          <input type="text" placeholder="Enter Your Email" required />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
      </Form>
      <div className="option">or Connect With Social Media</div>
      <div
        className="google d-flex align-items-center justify-content-center"
        onClick={googleLogin}
      >
        <FcGoogle style={{ fontSize: "30px", marginRight: "10px" }} />
        <p style={{ marginTop: "15px" }}> Sign in With Google</p>
      </div>

      <div className="facebook d-flex align-items-center justify-content-center">
        <img
          src={fbIcon}
          alt="Facebook"
          style={{ width: "30px", marginRight: "10px" }}
        />
        <p style={{ marginTop: "15px" }}> Sign in With Google</p>
      </div>
    </div>
  );
};

export default Login;
