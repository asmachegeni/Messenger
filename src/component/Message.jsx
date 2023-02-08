import React, { useState } from "react";
import moment from "jalali-moment";
import "./../style/Message.css";
const Message = ({ text, date, position="right" }) => {
  return (
    <div
      className={
        position === "right" ? "messageContainerUser" : "messageContainerClient"
      }
    >
      <p className={position === "right" ? "textUser" : "textClient"}>
        {text}
      </p>
      <span className={position === "right" ? "dateUser" : "dateClient"}>
        {moment(date).format("LT")}
      </span>
    </div>
  );
};
export default Message;
