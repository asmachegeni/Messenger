import React, { useRef, useState, useEffect } from "react";
import Title from "./Title";
import Message from "./Message";
import "./../style/Conversation.css";
import { FaTelegramPlane } from "react-icons/fa";
const Conversation = ({
  conversationInfo,
  messages,
  AddMessage,
  ShowMenu,
}) => {
  const [v, setValue] = useState("");
  const textref = useRef();
  const mg = useRef();
  useEffect(() => {
    mg.current.scrollTo(0, mg.current.scrollHeight);
  }, [messages]);
  return (
    <div className="ConversationContainer">
      <Title name={conversationInfo.name} ShowMenu={ShowMenu} />
      <div className="contentConversation" ref={mg}>
        {messages
          ? messages.map((message, index) => {
              return (
                <Message
                  text={message.content}
                  date={message.create_at}
                  position={message.position}
                  key={index}
                />
              );
            })
          : false}
      </div>
      <div className="cont">
        <textarea
          placeholder=".... نوشتن پیام"
          className="textbox"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={textref}
          value={v}
        ></textarea>
        <FaTelegramPlane
          onClick={() => {
            AddMessage(v);
            setValue("");
          }}
          className="btn"
        />
      </div>
    </div>
  );
};
export default Conversation;
