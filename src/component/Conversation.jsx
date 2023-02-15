import React, { useRef, useState, useEffect } from "react";
import Title from "./Title";
import Message from "./Message";
import "./../style/Conversation.css";
import { BiSend } from "react-icons/bi";
import { IoMdSend, IoIosSend } from "react-icons/io";
const Conversation = ({ conversationInfo, messages, AddMessage, ShowMenu }) => {
  const [v, setValue] = useState("");
  const textref = useRef();
  const mg = useRef();
  useEffect(() => {
    mg.current.scrollTo(0, mg.current.scrollHeight);
    // console.log("c");
  });
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
        <input
          placeholder=" نوشتن پیام"
          className="textbox"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={textref}
          value={v}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              // if(e.)
              // console.log("e");
              AddMessage(v);
              setValue("");
            }
          }}
        />

        {/* <BiSend
          onClick={() => {
            AddMessage(v);
            setValue("");
          }}
          className="btn"
        /> */}
        <IoMdSend
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
