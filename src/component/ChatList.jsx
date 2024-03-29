import React, { useState } from "react";
import ChatItem from "./ChatItem";
import "./../style/ChatList.css";
const ChatList = ({ contactInfo, handleClick }) => {
  return (
    <div className="ChatListContainer">
      <div className="ChatListContainer1">
        {contactInfo.map((contact) => (
          <ChatItem
            ContactName={contact.name}
            isNotif={contact.isNotif}
            handleClick={() => {
              handleClick(contact);
            }}
            key={contact.id}
          />
        ))}
      </div>
    </div>
  );
};
export default ChatList;
