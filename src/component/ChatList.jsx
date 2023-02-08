import React, { useState } from "react";
import ChatItem from "./ChatItem";
import "./../style/ChatList.css";
const ChatList = ({ contactInfo, handleClick }) => {
  return (
    <div className="ChatListContainer">
      {contactInfo.map((contact) => (
        <ChatItem
          ContactName={contact.name}
          handleClick={()=>{handleClick(contact)}}
          key={contact.id}
        />
      ))}
    </div>
  );
};
export default ChatList;
