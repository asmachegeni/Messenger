import React, { useState } from "react";
import ChatItem from "./ChatItem";
import "./../style/ChatList.css";
const ChatList = ({ contactInfo }) => {
  return (
    <div className="ChatListContainer">
      {contactInfo.map((contact) => (
        <ChatItem
          ContactName={contact.name}
          lastMessage={contact.lastMessage}
        />
      ))}
    </div>
  );
};
export default ChatList;
