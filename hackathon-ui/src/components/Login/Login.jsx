/** @format */

import { useRef } from "react";
import Config from "../../config/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Await, useNavigate } from "react-router-dom";
// import store from "../store/store";
import logo from "../../assets/img/springboard.png";
import user from "../../assets/img/user.png";
import lock from "../../assets/img/padlock.png";
import "./Login.css";
import Button from "react-bootstrap/esm/Button";
export default function Login() {
  const navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");
  const headers = {
    "Content-Type": "application/json",
    username: username.current.value,
    password: password.current.value,
  }
  const login = async () => {
    try {
      await fetch(`${Config.backEndUrl}login`,{
        method: "POST",
        headers: headers,
      }).then().catch(toast.error(
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
      <ToastContainer
    position='top-center'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHove
  />
      <div className='header-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='inputs mt-4 pt-2 pb-4'>
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
          <Button className='btn' onClick={()=>login()}>Log in</Button>
          <div className='forgot-password'>
            <a href="Signup">Don't have an account yet?</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
