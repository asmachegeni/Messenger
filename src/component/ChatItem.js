import React from "react";
import './../style/ChatItem.css'
import image from './../assets/images.png'
const ChatItem = ({ContactName='Asma:)', lastMessage='ok,ty' }) => {
  return (
    <div className="ChatItemcontainer">
    <div className="ChatItem">
      <img className="imgContact" src={image}/>
      <div className="Chattexts">
        <span id="name">{ContactName}</span>
        <span id="message">{lastMessage}</span>
      </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default ChatItem;
