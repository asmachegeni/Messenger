import React, { useState } from "react";
import "./../style/Logins.css";
import User from "./../assets/user.png";
import { AiOutlineIdcard } from "react-icons/ai";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import {FaUserAlt} from 'react-icons/fa'
const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const[showPassError,setShowPassError]=useState(false);
  const[showusernameError,setShowusernameError]=useState(false);
  const[shownameError,setShownameError]=useState(false);
  const handleRegisterForm = () => {
    //http requset
    // if succesfull go next page
    // else show error message
    console.log("click");
  };
  const IconClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div className={showPassError||shownameError||showusernameError?"container3":"container2"}>
      <img src={User} className="userImg" />
        <span className="title">ثبت نام</span>
        <form>
        <div className="field">
            <input
              type="text"
              placeholder="نام"
              value={name}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <FaUserAlt className="inputIcon" />
          </div>
          {shownameError&&<span className="error">نام وارد شده معتبر نیست</span>}
          <div className="field">
            <input
              type="text"
              placeholder=" نام کاربری"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <AiOutlineIdcard className="inputIcon" />
          </div>
          {showusernameError&&<span className="error">نام کاربری اشتباه است</span>}
          <div className="field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" رمز عبور"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {showPassword ? (
              <TiLockOpen className="inputIconP" onClick={IconClick} />
            ) : (
              <TiLockClosed className="inputIconP" onClick={IconClick} />
            )}
          </div>
          {showPassError&&<span className="error">رمز وارد شده نادرست است</span>}
          <input
            type="submit"
            value="ثبت نام"
            onClick={handleRegisterForm}
            id="submit"
          />
          <input type="submit" value="ورود" id="link" />
        </form>
      </div>
    </div>
  );
};
export default Register;
