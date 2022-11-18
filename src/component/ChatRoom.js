import React, { useState } from "react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
const ChatRoom = () => {
  const [phone, setPhone] = useState("09034179326");
  const [username, setUsername] = useState("asma");
  const [contacts, setContascts] = useState([
    {
      name: "asma",
      lastMessage: "thank:)",
      phone: "",
      messages: [
        { text: "what??", date: "2022", senderPhone: "09034179326" },
        { text: "hi", date: "2022", senderPhone: "09034179326" },
        { text: "now", date: "2022", senderPhone: "09034179322" },
      ],
    },
  ]);
  const [nowConversation, setNewConversation] = useState({});
  return <div></div>;
};
export default ChatRoom;
