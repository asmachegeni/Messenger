import React from "react";
import './../style/ChatItem.css'
import image from './../assets/user.png'
const ChatItem = ({ContactName='نرگس', lastMessage='باشه مرسی' }) => {
  return (
    <div className="ChatItemcontainer">
    <div className="ChatItem">
      <img className="imgContact" src={image}/>
      <div className="Chattexts">
        <span id="name">{ContactName}</span>
        <span id="message">{lastMessage}</span>
      </div>
      </div>
    </div>
  );
};
export default ChatItem;
