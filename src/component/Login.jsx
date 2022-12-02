import React, { useState } from "react";
import "./../style/Logins.css";
import User from "./../assets/user1.png";
import { AiOutlineIdcard } from "react-icons/ai";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const[showPassError,setShowPassError]=useState(false);
  const[showusernameError,setShowusernameError]=useState(false);
  const handleForm = () => {
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
      <div className="container2">
        <img src={User} className="userImg" />
        <span className="title">ورود</span>
        <form>
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
          <input type="submit" value="ورود" onClick={handleForm} id="submit" />
          <input type="submit" value="ثبت نام" id="link" />
        </form>
      </div>
    </div>
  );
};
export default Login;
