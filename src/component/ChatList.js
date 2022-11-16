import React, { useState } from "react";
import ChatItem from "./ChatItem";
const data = [
  { ContactName: "asma", lastMessage: "hello" },
  { ContactName: "asma", lastMessage: "hello" },
  { ContactName: "asma", lastMessage: "hello" },
  { ContactName: "asma", lastMessage: "hello" },
];
const ChatList = () => {
  const [contactInfo, setContactInfo] = useState(data);
  return (
    <>
      {contactInfo.map((contact) => (
        <ChatItem
          ContactName={contact.ContactName}
          lastMessage={contact.lastMessage}
        />
      ))}
    </>
  );
};
export default ChatList;
