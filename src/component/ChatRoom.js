import React, { useState } from "react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
import Profile from "./Profile";
import "./../style/ChatRoom.css";
const ChatRoom = () => {
  const [phone, setPhone] = useState("09034179326");
  const [username, setUsername] = useState("asma");
  const [contacts, setContascts] = useState([
    {
      name: "نرگس",
      lastMessage: "باشه مرسی",
      phone: "09034179326",
      messages: [
        { text: "what??", date: "2022", senderPhone: "09034179326" },
        { text: "hi", date: "2022", senderPhone: "09034179326" },
        { text: "now", date: "2022", senderPhone: "09034179322" },
      ],
    },
  ]);
  const [nowConversation, setNewConversation] = useState({});
  const AddMessage = (conversation, message) => {
    let conversationTemp = conversation[0].messages.slice();
    conversationTemp.push({
      text: message,
      date: "2022",
      senderPhone: "09034179322",
    });
    let con = conversation.slice();
    con[0].messages = conversationTemp;
    setContascts(con);
    console.log(contacts)
  };
  return (
    <div className="ChatRoom">
      <div className="Chats">
        <Profile />
        <ChatList contactInfo={contacts} />
      </div>
      <Conversation
        conversationInfo={contacts}
        userPhone={phone}
        AddMessage={AddMessage}
      />
    </div>
  );
};
export default ChatRoom;
