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
import "../Login/Login.css";
export default function Signup() {
  const navigate = useNavigate();
  const firstName = useRef(null);
  const LastName = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  
  const headers = {
    "Content-Type": "application/json",
    firstName: firstName.current.value,
    LastName: LastName.current.value,
    username: username.current.value,
    password: password.current.value,
  }
  const singup = async () => {
    try {
      await fetch(`${Config.backEndUrl}signup`,{
        method: "POST",
        headers: headers,
      }).then().catch(
        
        toast.error(
        "The information entered is incorrect. Please try again",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      ))
    } catch (error) {
      console.log("error")
    }
  }
  return (
    <div className='container'>
      <div className='header-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='container inputs mt-4 pt-2 pb-4'>
        <div className="form">
        <div className='input'>
          <img className='icons' src={user} alt='' />
          <input type='text' placeholder='First Name' ref={firstName} />
        </div>
        <div className='input'>
          <img className='icons' src={user} alt='' />
          <input type='text' placeholder='Last Name' ref={LastName} />
        </div>
        <div className='input'>
          <img className='icons' src={user} alt='' />
          <input type='text' placeholder='Username' ref={username} />
        </div>
        <div className='input'>
          <img className='icons' src={lock} alt='' />
          <input type='password' placeholder='Password' ref={password} />
        </div>
        <div className='submit-container'>
          <div className='btn'>Sign up</div>
          <div className='forgot-password'>
            <a href="/Login">Already have an account?</a>
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
