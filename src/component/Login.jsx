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
  const fe = async () => {
    await fetch("http://asmachegeni.ir/sanctum/csrf-cookie", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {});
  };
  useEffect(() => {
    // fe();
    axios
      .get("http://asmachegeni.ir/sanctum/csrf-cookie", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.headers.toString());
      });
    // console.log(Cookies.get("XSRF-TOKEN"));
    console.log(document.cookie);
    // fetch("http://asmachegeni.ir/api/register", {
    //       method: "POST",
    //       headers: {
    //         "X-XSRF-TOKEN": token,
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         username: "asma",
    //         password: 1053522,
    //         name: "asma",
    //       }),
    //     })
    //       .then((response) => {
    //         response.json();
    //       })
    //       .then((res) => {
    //         console.log(res);
    //       });
  }, []);
  const handleForm = () => {};

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
            <span className="error">رمز وارد شده نادرست است</span>
          )}
          <input type="submit" value="ورود" onClick={handleForm} id="submit" />
          <Link id="link" to={"/Register"}>
            ثبت نام
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
