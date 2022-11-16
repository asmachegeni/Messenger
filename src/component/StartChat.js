import React, { useState } from "react";
import "./../style/Logins.css";
import ErrorMessage from "./ErrorMessage";
const StartChat = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const [isShow, setIsShow] = useState(true);
  const AddContact = () => {
    //http requset
    // if succesfull go next page
    // else show error message
    console.log("click");
  };
  return (
    <div className="container">
      {isShow && <ErrorMessage text="invalid user!!!" />}
      <form className="startChat">
        <span className="title">Start Chat</span>
        <input
          type="text"
          placeholder=" Enter Phonenumber..."
          value={phonenumber}
          onChange={(event) => {
            setPhonenumber(event.target.value);
          }}
        />
        <input type="submit" value="Start" onClick={AddContact} id="submit" />
      </form>
    </div>
  );
};
export default StartChat;
