import React, { useState } from "react";
import "./../style/Logins.css";
import ErrorMessage from "./ErrorMessage";
const Register = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(true);
  const handleRegisterForm = () => {
    //http requset
    // if succesfull go next page
    // else show error message
    console.log("click");
  };
  return (
    <div className="container">
      {isShow && <ErrorMessage text="invalid user!!!" />}
      <form>
        <span className="title">Register</span>
        <input
          type="text"
          placeholder=" phonenumber"
          value={phonenumber}
          onChange={(event) => {
            setPhonenumber(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder=" password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="submit"
          value="Register"
          onClick={handleRegisterForm}
          id="submit"
        />
        <input type="submit" value="Login" id="link" />
      </form>
    </div>
  );
};
export default Register;
