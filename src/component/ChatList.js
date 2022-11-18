import React, { useState } from "react";
import ChatItem from "./ChatItem";
const ChatList = ({ contactInfo }) => {
  return (
    <>
      {contactInfo.map((contact) => (
        <ChatItem
          ContactName={contact.name}
          lastMessage={contact.lastMessage}
        />
      ))}
    </>
  );
};
export default ChatList;
