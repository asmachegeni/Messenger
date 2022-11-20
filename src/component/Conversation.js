import React, { useRef, useState } from "react";
import Title from "./Title";
import Message from "./Message";
import "./../style/Conversation.css";
import { FaTelegramPlane } from "react-icons/fa";
const Conversation = ({ conversationInfo, userPhone, AddMessage }) => {
  const [v, setValue] = useState("");
  const textref = useRef();
  return (
    <div className="ConversationContainer">
      <Title name={conversationInfo[0].name} />
      <div className="contentConversation">
        {conversationInfo[0].messages.map((message) => (
          <Message
            text={message.text}
            date={message.date}
            senderPhone={message.senderPhone}
            userPhone={userPhone}
          />
        ))}
      </div>
      <div className="cont">
        <textarea
          placeholder="Write a message..."
          className="textbox"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={textref}
          value={v}
        ></textarea>
        <FaTelegramPlane
          onClick={() => {
            AddMessage(conversationInfo, v);
            setValue("");
          }}
          className="btn"
        />
      </div>
    </div>
  );
};
export default Conversation;
