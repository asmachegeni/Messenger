import React, { useState } from "react";
import moment from "jalali-moment";
import "./../style/Message.css";
const Message = ({
  text = "cjjg fjh kbokok lpvfof ccjnfk vjkjjk ljlksjl vjffjffjfjffjfj",
  date = "20222/10/24 23:25",
  senderPhone = "09034179326",
  userPhone = "09034179326",
}) => {
  return (
    <div
      className={
        senderPhone === userPhone
          ? "messageContainerUser"
          : "messageContainerClient"
      }
    >
      <p className={senderPhone === userPhone ? "textUser" : "textClient"}>
        {text}
      </p>
      <span className={senderPhone === userPhone ? "dateUser" : "dateClient"}>
        {moment(date).format("LT")}
      </span>
    </div>
  );
};
export default Message;
