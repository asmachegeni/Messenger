import React from "react";
import "./../style/ChatItem.css";
import image from "./../assets/user.png";
const ChatItem = ({
  ContactName,
  isNotif,
  nameClass = "name",
  handleClick,
}) => {
  return (
    <div
      className="ChatItemcontainer"
      onClick={() => {
        handleClick(ContactName);
      }}
    >
      <div className="ChatItem">
        <img className="imgContact" src={image} />
        <div className="Chattexts">
          <span id={nameClass}>{ContactName}</span>
          {isNotif?<span id="notif"></span>:""}
        </div>
      </div>
    </div>
  );
};
export default ChatItem;
