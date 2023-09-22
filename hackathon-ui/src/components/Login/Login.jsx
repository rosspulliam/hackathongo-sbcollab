/** @format */

import { useRef } from "react";
import Config from "../../config/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import store from "../store/store";
import logo from "../../assets/img/springboard.png";
import user from "../../assets/img/user.png";
import email from "../../assets/img/mail.png";
import lock from "../../assets/img/padlock.png";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  return (
    <div className='container'>
      <div className='header-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='container inputs mt-4 pt-2 pb-4'>
        <div className="form">
        <div className='input'>
          <img className='icons' src={user} alt='' />
          <input type='text' placeholder='Username' ref={username} />
        </div>
        <div className='input'>
          <img className='icons' src={lock} alt='' />
          <input type='password' placeholder='Password' ref={password} />
        </div>
        <div className='submit-container'>
          <div className='btn'>Log in</div>
          <div className='forgot-password'>
            <a href="Signup">Don't have an account yet?</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );

  function home() {
    navigate("/");
  }
}
