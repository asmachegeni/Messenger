import React, { useState } from "react";
import Title from "./Title";
import Message from "./Message";
import "./../style/Conversation.css";
const Conversation = ({ conversationInfo, userPhone }) => {
  return (
    <div className="ConversationContainer">
      <Title name={conversationInfo[0].name}/>
      <div className="contentConversation">
        {conversationInfo.map((message) => (
          <Message
            text={message.text}
            date={message.date}
            senderPhone={message.senderPhone}
            userPhone={userPhone}
          />
        ))}
        <textarea placeholder="Write a message..." className="textbox" />
      </div>
    </div>
  );
};
export default Conversation;
