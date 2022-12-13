import React, { useState } from "react";
import Conversation from "./Conversation";
import "./../style/ChatRoom.css";
import Profile from "./Profile";
import ChatList from "./ChatList";
import Search from "./Search";
const ChatRoom = () => {
  const [phone, setPhone] = useState("09034179326");
  const [username, setUsername] = useState("asma");
  const [showSearch, setShowSearch] = useState(false);
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
      console.log("ddddd");
    } else {
      LoadConversation(NewContacts);
    }
    console.log("O_O");
  };
  //-------------------------------------------------------------------------------------------
  const changeComponent = () => {
    setShowSearch(!showSearch);
  };
  //-------------------------------------------------------------------------------------------
  const LoadConversation = (name) => {
    let nowConract;
    contacts.forEach((contact) => {
      if (contact.name === name) {
        nowConract = contact;
      }
    });
    setNewConversation(nowConract);
  };
  //-------------------------------------------------------------------------------------------
  return (
    <div className="ChatRoom">
      {showSearch ? (
        <div className="Chats">
          <Search change={changeComponent} handleClick={AddContact} />
        </div>
      ) : (
        <div className="Chats">
          <Profile change={changeComponent} />
          <ChatList contactInfo={contacts} handleClick={LoadConversation} />
        </div>
      )}

      <Conversation
        conversationInfo={nowConversation}
        userPhone={phone}
        AddMessage={AddMessage}
      />
    </div>
  );
};
export default ChatRoom;
