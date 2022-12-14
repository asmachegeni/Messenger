import React, { useState, useRef } from "react";
import Conversation from "./Conversation";
import "./../style/ChatRoom.css";
import Profile from "./Profile";
import ChatList from "./ChatList";
import Search from "./Search";
const ChatRoom = () => {
  const menu = useRef(null);
  const conv = useRef(null);
  const se = useRef(null);
  const [phone, setPhone] = useState("09034179326");
  const [isMobile, setIsMoblie] = useState(false);
  const [username, setUsername] = useState("asma");
  const [showSearch, setShowSearch] = useState(false);
  const [isForground, setIsForground] = useState(true);
  const [contacts, setContascts] = useState([
    {
      name: "نرگس",
      lastMessage: "باشه مرسی",
      phone: "09034179326",
      messages: [
        { text: "what??", date: "2022", senderPhone: "09034179326" },
        { text: "hi", date: "2022", senderPhone: "09034179326" },
        {
          text: "now fffjf ijifliuoi pipoupou ipoipo foudoiu ooo dfsdfkj jkjkjjhkj hkjhkjhk kjhkjhjk",
          date: "2022",
          senderPhone: "09034179322",
        },
      ],
    },
    {
      name: "اسما",
      lastMessage: "باشه مرسی",
      phone: "09034179326",
      messages: [
        { text: "what??", date: "2022", senderPhone: "09034179326" },
        { text: "hiiiiii", date: "2022", senderPhone: "09034179326" },
        {
          text: " pipoupou ipoipo fo",
          date: "2022",
          senderPhone: "09034179322",
        },
      ],
    },
  ]);
  const [nowConversation, setNewConversation] = useState({
    name: "نرگس",
    lastMessage: "باشه مرسی",
    phone: "09034179326",
    messages: [
      { text: "what??", date: "2022", senderPhone: "09034179326" },
      { text: "hi", date: "2022", senderPhone: "09034179326" },
      {
        text: "now fffjf ijifliuoi pipoupou ipoipo foudoiu ooo dfsdfkj jkjkjjhkj hkjhkjhk kjhkjhjk",
        date: "2022",
        senderPhone: "09034179322",
      },
    ],
  });
  //-------------------------------------------------------------------------------------------
  const AddMessage = (conversation, message) => {
    if (message) {
      let messageTemp = conversation.messages.slice();
      messageTemp.push({
        text: message,
        date: "2022",
        senderPhone: "09034179322",
      });
      conversation.messages = messageTemp;
      setNewConversation(conversation);
      let contactsTemp = contacts.slice();
      contactsTemp.forEach((contact) => {
        if (conversation.name === contact.name) {
          contact.messages = messageTemp;
        }
      });
      setContascts(contactsTemp);
    }
  };
  //-------------------------------------------------------------------------------------------
  const AddContact = (NewContacts) => {
    let hasContact = contacts.find((contact) => {
      return NewContacts === contact.name;
    });
    if (!hasContact) {
      let temp = contacts.slice();
      temp.push({
        name: NewContacts,
        lastMessage: "",
        phone: "09034179326",
        messages: [],
      });
      setContascts(temp);
    } else {
      LoadConversation(NewContacts);
    }
  };
  //-------------------------------------------------------------------------------------------
  const changeComponent = (boolvalue) => {
    setShowSearch(boolvalue);
    if (!showSearch) {
      setIsMoblie(true);
    }
  };
  //-------------------------------------------------------------------------------------------
  const LoadConversation = (name) => {
    ShowConversation();
    let nowConract;
    contacts.forEach((contact) => {
      if (contact.name === name) {
        nowConract = contact;
      }
    });
    setNewConversation(nowConract);
  };
  //-------------------------------------------------------------------------------------------
  const ShowMenu = () => {
    menu.current.classList.remove("background");
    menu.current.classList.remove("no");
    menu.current.classList.add("foregroundComponent");
    conv.current.classList.remove("foregroundComponent");
    conv.current.classList.add("background");
    menu.current.classList.add("Chats");
    se.current.classList.add("no");
    se.current.classList.remove("Chats");
    se.current.classList.remove("foregroundComponent");
  };
  //-------------------------------------------------------------------------------------------
  const ShowConversation = () => {
    conv.current.classList.remove("background");
    conv.current.classList.add("foregroundComponent");
    menu.current.classList.remove("foregroundComponent");
    menu.current.classList.add("background");
    console.log(conv.current.classList);
  };
  //-------------------------------------------------------------------------------------------
  const ShowSearch = () => {
    conv.current.classList.remove("foregroundComponent");
    menu.current.classList.remove("foregroundComponent");
    menu.current.classList.remove("Chats");
    menu.current.classList.add("background");
    menu.current.classList.add("no");
    se.current.classList.remove("no");
    se.current.classList.add("Chats");
    se.current.classList.add("foregroundComponent");
  };
  //-------------------------------------------------------------------------------------------
  return (
    <div className="ChatRoom">
      <div ref={se} className={"no"}>
        <Search change={ShowMenu} handleClick={AddContact} />
      </div>
      <div className={"Chats background"} ref={menu}>
        <Profile change={ShowSearch} />
        <ChatList contactInfo={contacts} handleClick={LoadConversation} />
      </div>
      <div ref={conv} className="ConversactoinSec foregroundComponent">
        <Conversation
          conversationInfo={nowConversation}
          userPhone={phone}
          AddMessage={AddMessage}
          ShowMenu={ShowMenu}
        />
      </div>
    </div>
  );
};
export default ChatRoom;
