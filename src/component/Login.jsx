import React, { useState, useEffect } from "react";
import "./../style/Logins.css";
import User from "./../assets/user1.png";
import { AiOutlineIdcard } from "react-icons/ai";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Login = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassError, setShowPassError] = useState(false);
  const [showusernameError, setShowusernameError] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    fetch("https://asmachegeni.ir/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
      },
    }).then((response) => {
      fetch("https://asmachegeni.ir/api/login", {
        method: "POST",
        headers: {
          credentials: "same-origin",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((data) => {
          if (data.status == 200) {
            Navigate("/ChatRoom");
          }
          return data.json();
        })
        .then((res) => {
          // console.log(res.message);
          if (res.message != undefined) {
            setShowPassError(true);
            setPassword("");
            setUsername("");
          }
          Cookies.set("access_token", res.access_token);
        });
    });
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
          {showusernameError && (
            <span className="error">نام کاربری اشتباه است</span>
          )}
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
          {showPassError && (
            <span className="error">کاربری با این مشخصات وجود ندارد</span>
          )}
          {/* <input type="submit" value="ورود" onClick={handleForm} id="submit" /> */}
          <button onClick={handleForm} id="submit">
            ورود
          </button>

          <Link id="link" to={"/Register"}>
            ثبت نام
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
