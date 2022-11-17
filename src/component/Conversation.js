import React, { useState } from "react";
import Title from "./Title";
import Message from "./Message";
import './../style/Conversation.css'
const Conversation = () => {
  const [messages, setMessages] = useState([
    { text: "djfjrufv", date: "20222/10/24 23:25", User: false },
    { text: "djfjrufv", date: "20222/10/24 23:25", User: false },
    { text: "djfjrufv", date: "20222/10/24 23:25", User: true },
    { text: "djfjrufv", date: "20222/10/24 23:25", User: true },
    // { text: "djfjrufv", date: "20222/10/24 23:25", User: false },
    // { text: "djfjrufv", date: "20222/10/24 23:25", User: false },
    // { text: "djfjrufv", date: "20222/10/24 23:25", User: true },
    // { text: "djfjrufv", date: "20222/10/24 23:25", User: false },
  ]);
  return (
    <div className="ConversationContainer">
      <Title />
      <div className="contentConversation">
      {messages.map((message) => (
        <Message text={message.text} date={message.date} User={message.User} />
      ))}
       <textarea placeholder="Write a message..." className="textbox"/>
      </div>
    </div>
  );
};
export default Conversation;
