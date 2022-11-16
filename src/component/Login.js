import React, { useState } from "react";
import "./../style/Logins.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = () => {
    //http requset
    // if succesfull go next page
    // else show error message
    console.log("click");
  };
  return (
    <div className="container">
      <form>
        <span className="title">Login</span>
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
        <input type="submit" value="Login" onClick={handleForm} id="submit" />
        <input type="submit" value="Register" id="link" />
      </form>
    </div>
  );
};
export default Login;
