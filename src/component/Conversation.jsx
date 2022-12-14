import React, { useRef, useState, useEffect } from "react";
import Title from "./Title";
import Message from "./Message";
import "./../style/Conversation.css";
import { FaTelegramPlane } from "react-icons/fa";
const Conversation = ({
  conversationInfo,
  userPhone,
  AddMessage,
  ShowMenu,
}) => {
  const [v, setValue] = useState("");
  const textref = useRef();
  const mg = useRef();
  useEffect(() => {
    mg.current.scrollTo(0, mg.current.scrollHeight);
    console.log(mg.current.scrollHeight);
  }, [conversationInfo.messages]);
  let i = 0;
  return (
    <div className="ConversationContainer">
      <Title name={conversationInfo.name} ShowMenu={ShowMenu} />
      <div className="contentConversation" ref={mg}>
        {conversationInfo.messages.map((message) => {
          i++;
          return (
            <Message
              text={message.text}
              date={message.date}
              senderPhone={message.senderPhone}
              userPhone={userPhone}
              key={i}
            />
          );
        })}
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
