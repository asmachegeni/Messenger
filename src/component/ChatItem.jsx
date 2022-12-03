import React from "react";
import "./../style/ChatItem.css";
import image from "./../assets/user.png";
const ChatItem = ({ ContactName, lastMessage,nameClass="name" }) => {
  return (
    <div className="ChatItemcontainer">
      <div className="ChatItem">
        <img className="imgContact" src={image} />
        <div className="Chattexts">
          <span id={nameClass}>{ContactName}</span>
          <span id="message">{lastMessage}</span>
        </div>
      </div>
    </div>
  );
};
export default ChatItem;
