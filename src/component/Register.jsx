import React, { useState } from "react";
import "./../style/Logins.css";
import User from "./../assets/user1.png";
import { AiOutlineIdcard } from "react-icons/ai";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassError, setShowPassError] = useState(false);
  const [showusernameError, setShowusernameError] = useState(false);
  const [shownameError, setShownameError] = useState(false);
  const handleRegisterForm = (e) => {
    e.preventDefault();
    fetch("http://asmachegeni.ir/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
      },
    }).then((response) => {
      fetch("http://asmachegeni.ir/api/register", {
        method: "POST",
        headers: {
          credentials: "same-origin",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          name: name,
        }),
      }).then((data) => {
        if (data.status == 201) {
          Navigate("/ChatRoom");
        }
      });
    });
  };
  const IconClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div
        className={
          showPassError || shownameError || showusernameError
            ? "container3"
            : "container2"
        }
      >
        <img src={User} className="userImg" />
        <span className="title">ثبت نام</span>
        <form>
          <div className="field">
            <input
              type="text"
              placeholder="نام"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <FaUserAlt className="inputIcon" />
          </div>
          {shownameError && (
            <span className="error">نام وارد شده معتبر نیست</span>
          )}
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
          <input
            type="submit"
            value="ثبت نام"
            onClick={handleRegisterForm}
            id="submit"
          />

          <Link id="link" to={"/"}>
            ورود
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Register;
